import { Component, OnInit } from '@angular/core';
import { DynamicAddService } from '../dynamic-add.service';
import * as dropin from 'braintree-web-drop-in';
import * as braintree from 'braintree-web';
import { IPayPalConfig } from 'ngx-paypal';

declare let paypal: any;
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  
  constructor(private addService: DynamicAddService) { }

  ngOnInit() {
  	this.createViews();
  	this.createPayPal();
  	this.addMethods();
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
  	this.addService.appendPaymentMethod('card', 'Add credit or debit card', 'payment-form');
  	this.addService.appendPaymentMethod('paypal', 'Add PayPal', 'payment-form');
  	this.addService.appendPaymentMethod('venmo', 'Add Venmo', 'payment-form');
  }

  createPayPal() {
  	this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
	  	braintree.client.create({
		  authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
		}, function (err, clientInstance) {
		  if (err) {
		    console.error(err);
		    return;
		  }

	  	braintree.paypalCheckout.create({
		    client: clientInstance
		  }, function (paypalCheckoutErr, paypalCheckoutInstance) {

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

			      payment: function () {
			        return paypalCheckoutInstance.createPayment({
			          flow: 'vault',
			          billingAgreementDescription: 'Your agreement description',
			          enableShippingAddress: true,
			          shippingAddressEditable: false,
			        });
			      },

			      onAuthorize: function (data, actions) {
			        return paypalCheckoutInstance.tokenizePayment(data, function (err, payload) {
			          // Submit `payload.nonce` to your server.
			        });
			      },

			      onCancel: function (data) {
			        console.log('checkout.js payment cancelled', JSON.stringify(data));
			      },

			      onError: function (err) {
			        console.error('checkout.js error', err);
			      }
			    }, '#paypal-button').then(function () {
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
	}, function (err, clientInstance) {
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
	  }, function (err, hostedFieldsInstance) {
	    if (err) {
	      console.error(err);
	      return;
	    }

	    hostedFieldsInstance.on('validityChange', function (event) {
	      // Check if all fields are valid, then show submit button
	      var formValid = Object.keys(event.fields).every(function (key) {
	        return event.fields[key].isValid;
	      });

	      if (formValid) {
	        document.getElementById('add-card-button').style.display = 'block';
	      } else {
	        document.getElementById('add-card-button').style.display = 'none';
	      }
	    });

	    hostedFieldsInstance.on('empty', function (event) {
	      //document.querySelector('header').classList.remove('header-slide');
	      document.querySelector('#card-image').className = '';
	      document.querySelector('form').className = '';
	    });

	    hostedFieldsInstance.on('cardTypeChange', function (event) {
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

	    submit.addEventListener('click', function (event) {
	      event.preventDefault();

	      hostedFieldsInstance.tokenize(function (err, payload) {
	        if (err) {
	          console.error(err);
	          return;
	        }

	        // This is where you would submit payload.nonce to your server
	        console.log(payload);
	      });
	    }, false);
	  });
	});
  }
}
