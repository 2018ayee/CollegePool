const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.generalNotification = functions.https.onRequest(async (req, res) => {
	//	
	var chat_id = req.query.chat_id;
	var user_id = req.query.user_id; //person who caused this notif
	var title = req.query.title; 
	var body = req.query.body;
	var type = req.query.type;
	admin.firestore().collection('chats').doc(chat_id).get().then((doc) => {
		var tokens = doc.data().tokens; //
		const payload = {
			notification: {
				title: title,
				body: body,
				sound: 'default',
				badge: '1'
			},
			data: {
				type: type,
				chatId: chat_id
			}
		};

	      // Send notifications to all tokens.
	      var finalTokens = []; 
	      //res.send(tokens);
	     for(var i = 0; i<tokens.length; i++){
	       	//res.send("tokens");
	       	//res.send(tokens);
	       	if(tokens[i]!== user_id)
	       	 	finalTokens.push(tokens[i]);
	       }
	      admin.messaging().sendToDevice(finalTokens, payload);
	      //res.status(200).json({message: 'Notification sent'});
	      res.send("Notification sent")
	      return;
	  }).catch((err) => {
	  	return console.log(err);
	  });

});

exports.sendChatNotification = functions.firestore.document('chats/{chatId}')
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

	  console.log(tokens);
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

	  console.log(lastMessage.userId);
      // Get the sender profile.
      const getSenderProfilePromise = admin.auth().getUser(lastMessage.userId);

      // The snapshot to the user's tokens.
      let tokensSnapshot;

      // The array containing all the user's tokens.
      // let tokens;

      const results = await Promise.all([getDeviceTokensPromise, getSenderProfilePromise, removeSenderTokenPromise]);
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

      const finalTokens = Array.from(new Set(tokens));

      console.log('There are', finalTokens.length, 'tokens to send notifications to.');
      console.log('Fetched sender profile', sender);

      var photoURL = sender.photoURL;
      if(photoURL.substring(0,27) === 'https://graph.facebook.com/') {
      	photoURL += '?height=300';
      }

      if(lastMessage.message === "") {
      	lastMessage.message = "Sent a photo";
      }
      
      // Notification details.
      const payload = {
        notification: {
          title: sender.displayName,
          body: `${sender.displayName}: ${lastMessage.message}`,
          sound: 'default',
          badge: '1'
        },
        data: {
        	type: 'New Message',
        	chatId: chatId
        }
      };

      // Listing all tokens as an array.
      // tokens = Object.keys(tokensSnapshot.val());

      // Send notifications to all tokens.
      const response = await admin.messaging().sendToDevice(finalTokens, payload);
      // For each message check if there was an error.
      const tokensToRemove = [];
      var delIndex = [];
      var remTokens = [];
      response.results.forEach((result, index) => {
        const error = result.error;
        if (error) {
          console.error('Failure sending notification to', finalTokens[index], error);
          // Cleanup the tokens who are not registered anymore.
          if (error.code === 'messaging/invalid-registration-token' ||
              error.code === 'messaging/registration-token-not-registered') {
          	delIndex.push(index);
          }
        }
      });
      for(var l = 0; l < finalTokens.length; l++) {
      	if(delIndex.indexOf(l) < 0) {
      		remTokens.push(finalTokens[l]);
      	}
      }
      console.log(remTokens);
      // const removeResponse = await tokensToRemove.push(admin.firestore().collection('chats').doc(chatId).update({tokens: remTokens}));
      const removePromise = await tokensToRemove.push(admin.firestore().collection('chats').doc(chatId).get());

      return Promise.all(removePromise);
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

exports.getDriverPay = functions.https.onRequest(async (req, res) => {
	
 	const DEFAULTMPG = 24.7;
	const DEFAULTCARPRICE = 20000;
	const LIFESPAN = 150000;
	const OPP_COST = 10;
	const TRAFFICADJUST = 1.2;
	const GAS_PRICE = 0.15;
	/****
	data = {
		"distance": distance,
		"capacity": capacity,
	}
	//duration in seconds
	***/
	console.log(req.query.time);
	
	let DocRef = admin.firestore().collection("postings").doc(req.query.id);
	//res.send(DocRef.user);
	

	let transaction = admin.firestore().runTransaction(t => {
	  return t.get(DocRef)
	    .then(doc => {
	      // Add one person to the city population.
	      // Note: this could be done without a transaction
	      //       by updating the population using FieldValue.increment()
	      if (doc.exists) {
		      //let newPrice = '$10';
		      if(doc.get('riders') !== null && doc.get('distance') !== null && doc.get('capacity') !== null){
			      var d = doc.data().distance;
			      var n = doc.data().riders;
			      var c = doc.data().capacity;
			      let newPrice = d*(GAS_PRICE*(1+(n-1)/3))
			      let theoretical = d*(GAS_PRICE*(1+(c-1)/3))
			      var displayed ="";
			      if(newPrice===theoretical)
			      	displayed = "$"+newPrice.toFixed(2);
			      else
			      	displayed = "$"+newPrice.toFixed(2)+"-$"+theoretical.toFixed(2);
			      t.update(DocRef, {price: displayed});
			      //res.send(displayed);
			      res.send("Current time received by document "+req.query.id+" is: "+req.query.time+". It's current payout is "+displayed+".");
			      return displayed;
			  }
			  else
			  	res.send('Document missing required fields');
			  	throw new Error('Document missing required fields');
		  }
		  else{
		  	throw new Error("Profile doesn't exist")
		  }
	    });
	})
  
});

exports.getRiderPrice = functions.https.onRequest(async (req, res) => {
	
 	const DEFAULTMPG = 24.7;
	const DEFAULTCARPRICE = 20000;
	const LIFESPAN = 150000;
	const OPP_COST = 10;
	const TRAFFICADJUST = 1.2;
	const GAS_PRICE = 0.15;
	/****
	data = {
		"distance": distance,
		"capacity": capacity,
	}
	//duration in seconds
	***/
	console.log(req.query.time);
	
	let DocRef = admin.firestore().collection("postings").doc(req.query.id);
	//res.send(DocRef.user);
	

	let transaction = admin.firestore().runTransaction(t => {
	  return t.get(DocRef)
	    .then(doc => {
	      if (doc.exists) {
		      //let newPrice = '$10';
		      if(doc.get('riders') !== null && doc.get('distance') !== null && doc.get('capacity') !== null){
			      var d = doc.data().distance;
			      var n = doc.data().riders;
			      var c = doc.data().capacity;
			      //var e = Math.E;
			      //NEW REQUIREMENTS: unix departure time 
			      var current_time = req.query.time;
			      //var post_time = req.query.ptime;
			      var departure_time = req.query.utime;
			      //var scale = (departure_time-doc.data().timeStamp)/1000/3600/24;
			      //var preprocessed_dt = current_time - doc.data().timeStamp;
			      //var dt = Math.floor(preprocessed_dt/1000/3600/6)*6;
			      var time_remaining = (departure_time-current_time);
			      var dt = Math.floor(time_remaining/1000/3600/12)*12;
			      //res.send(d+" "+n+" "+c +" "+t);
			      /***
			      ACCR:
			      1) let newPrice = (GAS_PRICE + 0.007/n*Math.log(1+2*dt))*d;
			      1) let theoretical = (GAS_PRICE + 0.007/n*Math.log(1+2*dt))*d;//distance*(GAS_PRICE*(1+(c-1)/3))
			      
			      2) let newPrice = (GAS_PRICE+((1.0*5/Math.pow(Math.E, 2)*Math.pow(Math.E, 1/12*dt/scale)-1.0*5/Math.pow(Math.E, 2))/100/n))*d;
			      2) let theoretical = (GAS_PRICE+((1.0*5/Math.pow(Math.E, 2)*Math.pow(Math.E, 1/12*dt/scale)-1.0*5/Math.pow(Math.E, 2))/100/c))*d;
			      ***/
			      /*** ACER ***/
			      //let newPrice = (GAS_PRICE+(1.0*1/37*Math.pow(Math.E, (120-dt)/37-1/0.4)+0.0025)/n)*d;
			      //let theoretical = (GAS_PRICE+(1.0*1/37*Math.pow(Math.E, (120-dt)/37-1/0.4)+0.0025)/n)*d;

			      /*** CCER ***/
			      let newPrice = (GAS_PRICE+(1.0*1/48*Math.pow(Math.E, (120-dt)/48-1/0.4)+0.0025)/1)*d;
			      let theoretical = (GAS_PRICE+(1.0*1/48*Math.pow(Math.E, (120-dt)/48-1/0.4)+0.0025)/1)*d;
			      
			      var displayed ="";
			      if(newPrice.toFixed(2)===theoretical.toFixed(2))
			      	displayed = "$"+newPrice.toFixed(2);
			      else
			      	displayed = "$"+theoretical.toFixed(2)+"-$"+newPrice.toFixed(2);
			      //res.send("passed!");
			      t.update(DocRef, {price: displayed});
			      //res.send(displayed);
			      //res.send("Current time received by document "+req.query.id+" is: "+req.query.time+", and the time differential is "+dt+" hours. The scale factor is "+scale+", and the price is "+displayed+".");
			      res.send(displayed);
			      return displayed;

			  }
			  else
			  	res.send('Document missing required fields');
			  	throw new Error('Document missing required fields');
		  }
		  else{
		  	throw new Error("Profile doesn't exist")
		  }
	    });
	})
});

exports.getRiderPriceNoDbUpdate = functions.https.onRequest(async (req, res) => {
  const GAS_PRICE = 0.15;
  var d = req.query.distance;
  var n = 1
  var c = req.query.capacity;
  var current_time = req.query.time;
  var post_time = req.query.ptime;
  //var post_time = req.query.ptime;
  var departure_time = req.query.utime;
  var scale = (departure_time-post_time/1000/3600/24);
  var preprocessed_dt = current_time - post_time;
  var dt = Math.floor(preprocessed_dt/1000/3600/6)*6;
  var time_remaining = (departure_time-current_time);
  var t = Math.floor(time_remaining/1000/3600/12)*12;
  /***
  let newPrice = (GAS_PRICE+((1.0*5/Math.pow(Math.E, 2)*Math.pow(Math.E, 1/12*dt/scale)-1.0*5/Math.pow(Math.E, 2))/100/n))*d;
  let theoretical = (GAS_PRICE+((1.0*5/Math.pow(Math.E, 2)*Math.pow(Math.E, 1/12*dt/scale)-1.0*5/Math.pow(Math.E, 2))/100/c))*d;
	***/
  /*** ACER ***/
  //let newPrice = (GAS_PRICE+(1.0*1/37*Math.pow(Math.E, (120-t)/37-1/0.4)+0.0025)/n)*d;
  //let theoretical = (GAS_PRICE+(1.0*1/37*Math.pow(Math.E, (120-t)/37-1/0.4)+0.0025)/n)*d;

  /*** CCER ***/
  let newPrice = (GAS_PRICE+(1.0*1/48*Math.pow(Math.E, (120-dt)/48-1/0.4)+0.0025)/1)*d;
  let theoretical = (GAS_PRICE+(1.0*1/48*Math.pow(Math.E, (120-dt)/48-1/0.4)+0.0025)/1)*d;

  var displayed ="";
  if(newPrice.toFixed(2)===theoretical.toFixed(2))
  	displayed = "$"+newPrice.toFixed(2);
  else
  	displayed = "$"+theoretical.toFixed(2)+"-$"+newPrice.toFixed(2);
  //res.send(displayed);
  //res.send("Current time received by document "+req.query.id+" is: "+req.query.time+", and the time differential is "+dt+" hours. The scale factor is "+scale+", and the price is "+displayed+".");
  res.send(displayed);
  return displayed;


})
/**
exports.finalRiderPrice = functions.https.onRequest(async (req, res) => {
	const GAS_PRICE = 0.15;
	var userid = req.query.userid;
	var docid = req.query.docid;
	let userDocRef = admin.firestore().collection("users").doc(userid);
	let postDocRef = admin.firestore().collection("postings").doc(docid);

	let getDoc = userDocRef.get().then(doc => {
	    if (!doc.exists) {
	      throw new Error('No such document');
	    } else {
	      //console.log('Document data:', doc.data());
	      return doc.data();
	    }
	  }).catch(err => {
	  	throw new Error('Error getting document');
	     //console.log('Error getting document', err);
	  });



})
**/
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