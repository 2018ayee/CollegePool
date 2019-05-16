import { Component, OnInit } from '@angular/core';
import { DynamicAddService } from '../dynamic-add.service';
import * as dropin from 'braintree-web-drop-in';
import * as braintree from 'braintree-web';
import { IPayPalConfig } from 'ngx-paypal';
import { LogincheckService } from '../logincheck.service';
import { PaymentService } from '../payment.service';

declare let paypal: any;
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  user = this.logincheckService.getUser();
  paymentCustomer;
  constructor(private addService: DynamicAddService, private paymentService: PaymentService, private logincheckService: LogincheckService) { }

  ngOnInit() {
  	this.logincheckService.loginCheck();
  	this.getUser();
  	this.createViews();
  	this.createPayPal();
  	this.createVenmo();
  	this.addMethods();
  }

  getUser() {
  	this.paymentService.getPaymentUserById(this.user.payment_id).subscribe((data) => {
  		this.paymentCustomer = data;
  		console.log(this.paymentCustomer)
  		if(this.paymentCustomer.creditCards != null)
	  		for(var i = 0; i < this.paymentCustomer.creditCards.length; i++)
		  		this.addService.appendPaymentMethod("card", this.paymentCustomer.creditCards[i].cardType + " ending in " + this.paymentCustomer.creditCards[i].last4, "form", false);

  		if(this.paymentCustomer.paypalAccounts != null)
  			for(var i = 0; i < this.paymentCustomer.paypalAccounts.length; i++)
	  			this.addService.appendPaymentMethod("paypal", this.paymentCustomer.paypalAccounts[i].email, "form", false);
  		document.getElementById('list-loading-circle').style.display = 'none';
  	});
  }

  loadExternalScript(scriptUrl: string) {
	return new Promise((resolve, reject) => {
	  const scriptElement = document.createElement('script')
	  scriptElement.src = scriptUrl
	  scriptElement.onload = resolve
	  document.body.appendChild(scriptElement)
	})
  }

  closeModal() {
  	document.getElementById('payment-modal').style.display = 'none';
  	document.getElementById('payment-paypal-modal').style.display = 'none';
  	document.getElementById('payment-venmo-modal').style.display = 'none';
  }

  closeError() {
  	document.getElementById("error-modal").style.display = 'none';
  	document.getElementById("loading-circle").style.display = 'block';
  	document.getElementById("error-header-container").style.display = 'none';
  }

  toAddPayment() {
  	document.getElementById('form').style.display = 'none';
  	document.getElementById('payment-form').style.display = 'block';
  }

  toPaymentMethods() {
  	document.getElementById('payment-form').style.display = 'none';
  	document.getElementById('form').style.display = 'block';
  }

  addMethods() {
  	this.addService.appendPaymentMethod('card', 'Add credit or debit card', 'payment-form', true);
  	this.addService.appendPaymentMethod('paypal', 'Add PayPal', 'payment-form', true);
  	this.addService.appendPaymentMethod('venmo', 'Add Venmo', 'payment-form', true);
  }

  createVenmo() {
  	var venmoButton = <HTMLInputElement> document.getElementById('venmo-button');
	// Create a client.
	braintree.client.create({
	  authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
	}, function (clientErr, clientInstance) {
	  // Stop if there was a problem creating the client.
	  // This could happen if there is a network error or if the authorization
	  // is invalid.
	  if (clientErr) {
	    console.error('Error creating client:', clientErr);
	    return;
	  }

	  braintree.dataCollector.create({
	    client: clientInstance,
	    paypal: true
	  }, function (dataCollectorErr, dataCollectorInstance) {
	    if (dataCollectorErr) {
	      // Handle error in creation of data collector.
	      return;
	    }

	    // At this point, you should access the deviceData value and provide it
	    // to your server, e.g. by injecting it into your form as a hidden input.
	    console.log('Got device data:', dataCollectorInstance.deviceData);
	  });

	  braintree.venmo.create({
	    client: clientInstance,
	    // Add allowNewBrowserTab: false if your checkout page does not support
	    // relaunching in a new tab when returning from the Venmo app. This can
	    // be omitted otherwise.
	    profileId: '1953896702662410263'
	    //allowNewBrowserTab: false

	  }, function (venmoErr, venmoInstance) {
	    if (venmoErr) {
	      console.error('Error creating Venmo:', venmoErr);
	      return;
	    }

	    // Verify browser support before proceeding.
	    if (!venmoInstance.isBrowserSupported()) {
	      console.log('Browser does not support Venmo');
	      document.getElementById('add-venmo-button').style.display = 'none';
	      return;
	    }

	    displayVenmoButton(venmoInstance);

	    // Check if tokenization results already exist. This occurs when your
	    // checkout page is relaunched in a new tab. This step can be omitted
	    // if allowNewBrowserTab is false.
	    if (venmoInstance.hasTokenizationResult()) {
	      venmoInstance.tokenize(function (tokenizeErr, payload) {
	        if (tokenizeErr) {
	          handleVenmoError(tokenizeErr);
	        } else {
	          handleVenmoSuccess(payload);
	        }
	      });
	      return;
	    }
	  });
	});

	function displayVenmoButton(venmoInstance) {
	  // Assumes that venmoButton is initially display: none.
	  venmoButton.style.display = 'block';

	  venmoButton.addEventListener('click', function () {
	    venmoButton.disabled = true;

	    venmoInstance.tokenize(function (tokenizeErr, payload) {
	      venmoButton.removeAttribute('disabled');

	      if (tokenizeErr) {
	        handleVenmoError(tokenizeErr);
	      } else {
	        handleVenmoSuccess(payload);
	      }
	    });
	  });
	}

	function handleVenmoError(err) {
	  if (err.code === 'VENMO_CANCELED') {
	    console.log('App is not available or user aborted payment flow');
	  } else if (err.code === 'VENMO_APP_CANCELED') {
	    console.log('User canceled payment flow');
	  } else {
	    console.error('An error occurred:', err.message);
	  }
	}

	function handleVenmoSuccess(payload) {
	  // Send the payment method nonce to your server, e.g. by injecting
	  // it into your form as a hidden input.
	  console.log('Got a payment method nonce:', payload.nonce);
	  // Display the Venmo username in your checkout UI.
	  console.log('Venmo user:', payload.details.username);
	}
  }

  createPayPal() {
  	this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
	  	braintree.client.create({
		  authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
		}, (err, clientInstance) => {
		  if (err) {
		    console.error(err);
		    return;
		  }

	  	braintree.paypalCheckout.create({
		    client: clientInstance
		  }, (paypalCheckoutErr, paypalCheckoutInstance) => {

		    // Stop if there was a problem creating PayPal Checkout.
		    // This could happen if there was a network error or if it's incorrectly
		    // configured.
		    if (paypalCheckoutErr) {
		      console.error('Error creating PayPal Checkout:', paypalCheckoutErr);
		      return;
		    }

		    // Set up PayPal with the checkout.js library
			paypal.Button.render({
			      env: 'sandbox', // or 'sandbox'

			      style: {
			      	size: 'large'
			      },

			      payment: () => {
			        return paypalCheckoutInstance.createPayment({
			          flow: 'vault',
			          billingAgreementDescription: 'Your agreement description',
			          enableShippingAddress: true,
			          shippingAddressEditable: false,
			        });
			      },

			      onAuthorize: (data, actions) => {
			        return paypalCheckoutInstance.tokenizePayment(data, (err, payload) => {
			          // Submit `payload.nonce` to your server.
			          document.getElementById("error-modal").style.display = 'block';
			          this.paymentService.addPaymentMethodToUser(this.user.payment_id, payload.nonce).subscribe((res) => {
			        	if(res == "Already exists")
			        	{
			        		document.getElementById("loading-circle").style.display = 'none';
			        		document.getElementById("error-header-container").style.display = 'block';
			        	}
			        	else
			        	{
			        		this.closeError();
			        		this.closeModal();
			        		location.reload();
			        	}
			        });
			        });
			      },

			      onCancel: (data) => {
			        console.log('checkout.js payment cancelled', JSON.stringify(data));
			      },

			      onError: (err) => {
			        console.error('checkout.js error', err);
			      }
			    }, '#paypal-button').then(() => {
			      // The PayPal button will be rendered in an html element with the id
			      // `paypal-button`. This function will be called when the PayPal button
			      // is set up and ready to be used.
			    });
			});
		});
	});
  }

  createViews() {
  	var form = document.querySelector('#payment-card-form');
	var submit = document.querySelector('#add-card-button');

	braintree.client.create({
	  authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
	}, (err, clientInstance) => {
	  if (err) {
	    console.error(err);
	    return;
	  }

	  // Create input fields and add text styles  
	  braintree.hostedFields.create({
	    client: clientInstance,
	    styles: {
	      'input': {
	        'color': '#282c37',
	        'font-size': '16px',
	        'transition': 'color 0.1s',
	        'line-height': '3'
	      },
	      // Style the text of an invalid input
	      'input.invalid': {
	        'color': '#E53A40'
	      },
	      // placeholder styles need to be individually adjusted
	      '::-webkit-input-placeholder': {
	        'color': 'rgba(0,0,0,0.6)'
	      },
	      ':-moz-placeholder': {
	        'color': 'rgba(0,0,0,0.6)'
	      },
	      '::-moz-placeholder': {
	        'color': 'rgba(0,0,0,0.6)'
	      },
	      ':-ms-input-placeholder': {
	        'color': 'rgba(0,0,0,0.6)'
	      }

	    },
	    // Add information for individual fields
	    fields: {
	      number: {
	        selector: '#card-number',
	        placeholder: '1111 1111 1111 1111'
	      },
	      cvv: {
	        selector: '#cvv',
	        placeholder: '123'
	      },
	      expirationDate: {
	        selector: '#expiration-date',
	        placeholder: '10 / 2019'
	      }
	    }
	  }, (err, hostedFieldsInstance) => {
	    if (err) {
	      console.error(err);
	      return;
	    }

	    hostedFieldsInstance.on('validityChange', (event) => {
	      // Check if all fields are valid, then show submit button
	      var formValid = Object.keys(event.fields).every((key) => {
	        return event.fields[key].isValid;
	      });

	      if (formValid) {
	        document.getElementById('add-card-button').style.display = 'block';
	      } else {
	        document.getElementById('add-card-button').style.display = 'none';
	      }
	    });

	    hostedFieldsInstance.on('empty', (event) => {
	      //document.querySelector('header').classList.remove('header-slide');
	      document.querySelector('#card-image').className = '';
	      document.querySelector('form').className = '';
	    });

	    hostedFieldsInstance.on('cardTypeChange', (event) => {
	      // Change card bg depending on card type
	      if (event.cards.length === 1) {
	        //document.querySelector('form').className = event.cards[0].type;
	        document.querySelector('#card-image').className = event.cards[0].type;
	        //document.querySelector('header').className += 'header-slide';
	        
	        // Change the CVV length for AmericanExpress cards
	        if (event.cards[0].code.size === 4) {
	          hostedFieldsInstance.setAttribute({
	            field: 'cvv',
	            attribute: 'placeholder',
	            value: '1234'
	          });
	        } 
	      } else {
	        hostedFieldsInstance.setAttribute({
	          field: 'cvv',
	          attribute: 'placeholder',
	          value: '123'
	        });
	      }
	    });

	    submit.addEventListener('click', (event) => {
	      event.preventDefault();
	      document.getElementById("error-modal").style.display = 'block';
	      hostedFieldsInstance.tokenize((err, payload) => {
	        if (err) {
	          console.error(err);
	          return;
	        }

	        // This is where you would submit payload.nonce to your server
	        console.log(payload);
	        this.paymentService.addPaymentMethodToUser(this.user.payment_id, payload.nonce).subscribe((res) => {
	        	console.log(res);
	        	if(res == "Already exists")
	        	{
	        		document.getElementById("loading-circle").style.display = 'none';
	        		document.getElementById("error-header-container").style.display = 'block';
	        	}
	        	else
	        	{
	        		this.closeError();
	        		this.closeModal();
	        		location.reload();
	        	}
	        })
	      });
	    }, false);
	  });
	});
  }
}
