const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
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