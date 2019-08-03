const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendFollowerNotification = functions.firestore.document('chats/{chatId}')
    .onUpdate(async (change, context) => {
      const chatId = context.params.chatId;
      let users;
      let lastMessage;

      //Check if changes were due to a delete
      if (change.before.exists === true && change.after.exists === false) {
	    return console.log('Chat id ' + chatId + ' deleted');
	  }

	  const previousValue = change.before.data();
	  const newValue = change.after.data();

	  if(previousValue.chats.length >= newValue.chats.length) {
	  	return console.log('Chat message from ' + chatId + ' was deleted or other field was modified, no message necessary');
	  }

      // Get users in chat.
      const chatDocument = await admin.firestore().collection('chats').doc(chatId).get().then((doc) => {
      	users = doc.data().users;
      	if(doc.data().chats.length === 0)
      		return console.log('Chat has no messages');
      	lastMessage = doc.data().chats[doc.data().chats.length - 1];
      	return lastMessage;
      }).catch((err) => {
      	return console.log(err);
      })
      
      // Get the list of device notification tokens.
      let tokens;
	  const getDeviceTokensPromise = await admin.firestore().collection('chats').doc(chatId).get().then((doc) => {
	  	tokens = doc.data().tokens;
	  	return tokens;
	  }).catch((err) => {
	  	return console.log(err);
	  })

	  const removeSenderTokenPromise = await admin.firestore().collection('users').doc(lastMessage.userId).get().then((doc) => {
	  	let newTokens = [];
	  	for(var i = 0; i < doc.data().tokens.length; i++) {
	  		for(var j = 0; j < tokens.length; j++) {
	  			if(doc.data().tokens.indexOf(tokens[j]) < 0) {
	  				newTokens.push(tokens[j]);
	  			}
	  		}
	  	}
	  	tokens = newTokens;
	  	return tokens;
	  }).catch((err) => {
	  	return console.log(err);
	  })

      // Get the sender profile.
      const getFollowerProfilePromise = admin.auth().getUser(lastMessage.userId);

      // The snapshot to the user's tokens.
      let tokensSnapshot;

      // The array containing all the user's tokens.
      // let tokens;

      const results = await Promise.all([getDeviceTokensPromise, getFollowerProfilePromise, removeSenderTokenPromise]);
      console.log('Device tokens found: ' + tokens);
      tokensSnapshot = results[0];
      const sender = results[1];

      // Check if there are any device tokens.
      // if (!tokensSnapshot.hasChildren()) {
      //   return console.log('There are no notification tokens to send to.');
      // }
      if(tokens.length === 0) {
      	return console.log('There are no notification tokens to send to.');
      }

      console.log('There are', tokens.length, 'tokens to send notifications to.');
      console.log('Fetched sender profile', sender);

      var photoURL = sender.photoURL;
      if(photoURL.substring(0,27) === 'https://graph.facebook.com/') {
      	photoURL += '?height=300';
      }

      // Notification details.
      const payload = {
        notification: {
          title: sender.displayName,
          body: `${sender.displayName}: ${lastMessage.message}`,
          icon: photoURL,
          sound: 'default'
        },
        data: {
        	type: 'New Message',
        	chatId: chatId
        }
      };

      // Listing all tokens as an array.
      // tokens = Object.keys(tokensSnapshot.val());

      // Send notifications to all tokens.
      const response = await admin.messaging().sendToDevice(tokens, payload);
      // For each message check if there was an error.
      const tokensToRemove = [];
      var delIndex = [];
      var remTokens = [];
      response.results.forEach((result, index) => {
        const error = result.error;
        if (error) {
          console.error('Failure sending notification to', tokens[index], error);
          // Cleanup the tokens who are not registered anymore.
          if (error.code === 'messaging/invalid-registration-token' ||
              error.code === 'messaging/registration-token-not-registered') {
          	delIndex.push(index);
          }
        }
      });
      for(var l = 0; l < tokens.length; l++) {
      	if(delIndex.indexOf(l) < 0) {
      		remTokens.push(tokens[l]);
      	}
      }
      tokensToRemove.push(admin.firestore().collection('chats').doc(chatId).update({tokens: remTokens}));
      return Promise.all(tokensToRemove);
    });

var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "wmc3v88r36cbxjjz",
  publicKey: "6shw5z43m37vntj8",
  privateKey: "701dd692aaf7a6959a43f9736ea9a4ff"
});

exports.getCustomer = functions.https.onRequest(async (req, res) => {
	gateway.customer.find(req.query.id, (err, customer) => {
		if(err)
			console.log(err)
		else {
			// console.log(customer)
			res.json(customer)
		}
	});
});

exports.getToken = functions.https.onRequest(async (req, res) => {
	gateway.clientToken.generate({
	  // customerId: req.params.id
	}, (err, response) => {
		if(err)
			console.log(err)
		else if(response) {
		  var clientToken = response.clientToken
		  res.status(200).json({'clientToken': clientToken})
		}
	});

});

exports.addCustomer = functions.https.onRequest(async (req, res) => {
	var customer = gateway.customer.create({
	customFields: ({'username': req.query.username}),
	}, (err, result) => {
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.json(result);
		}
	});
});

exports.addPayment = functions.https.onRequest(async (req, res) => {
	var cards;
	var venmoAccounts;
	var paypalAccounts;
	var exists = false;
	var stream = gateway.customer.gateway.customer.find(req.body.id, 
		(err, customer) => {
			if(err) {
				res.json(err);
			}

		    cards = customer.creditCards;
		    venmoAccounts = customer.venmoAccounts;
		    paypalAccounts = customer.paypalAccounts;
		    cardExists = false;
		    venmoExists = false;
		    paypalExists = false;

		    var paymentMethod = gateway.paymentMethod.create({
			  customerId: req.body.id,
			  paymentMethodNonce: req.body.nonce,
			}, (err, result) => { 
				if(err)
				{
					res.json(err);
				}
				else
				{
					// console.log(result);
					if(typeof cards !== 'undefined')
						for(var i = 0; i < cards.length; i++)
						{
							if(typeof result.creditCard !== 'undefined')
								if(cards[i].uniqueNumberIdentifier === result.creditCard.uniqueNumberIdentifier) {
									cardExists = true;
									exists = true;
								}
						}
					if(typeof venmoAccounts !== 'undefined')
						for(var j = 0; j < venmoAccounts.length; j++) {
							if(typeof result.venmoAccount !== 'undefined') 
								if(venmoAccounts[j].venmoUserId === result.venmoAccount.venmoUserId) {
									venmoExists = true;
									exists = true;
								}
						}
					if(typeof paypalAccounts !== 'undefined')
						for(var k = 0; k < paypalAccounts.length; k++) {
							if(typeof result.paypalAccounts !== 'undefined') 
								if(paypalAccounts[k].email === result.paypalAccounts.email) {
									paypalExists = true;
									exists = true;
								}
						}
					if(cardExists) {
						gateway.paymentMethod.delete(result.creditCard.token, (err) => {
							if(err)
								console.log(err)
						});
					}
					else if(venmoExists) {
						gateway.paymentMethod.delete(result.venmoAccount.token, (err) => {
							if(err)
								console.log(err)
						});
					}
					else if(paypalExists) {
						gateway.paymentMethod.delete(result.paypalAccounts.token, (err) => {
							if(err)
								console.log(err)
						});
					}
					if(exists) {
						res.status(200).json({'message': 'Already exists'});
					}
					else {
						res.status(200).json({'message': 'Success'});
					}
				}
			});
	    }
	);
});

exports.removePayment = functions.https.onRequest(async (req, res) => {
	var remove = gateway.paymentMethod.delete(req.query.token, (err) => {
		if(err) 
			res.json(err);
		else
			res.status(200).json({'message': 'Removed successfully'});
	});
});