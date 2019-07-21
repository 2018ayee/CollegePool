import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as dropin from 'braintree-web-drop-in';
import * as braintree from 'braintree-web';
import { Button } from 'tns-core-modules/ui/button';
import { TextField } from 'tns-core-modules/ui/text-field';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { PaymentService } from '../payment.service';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
// import { NgxBraintreeModule } from 'ngx-braintree';
import { Observable } from 'tns-core-modules/data/observable';
import { Braintree, BrainTreeOptions } from 'nativescript-braintree';
import { RouterExtensions } from 'nativescript-angular/router';

// require("nativescript-nodeify");
// import * as Nodeify from 'nativescript-nodeify';
// const braintree = require('braintree-web');

@Component({
  selector: 'app-add-card-payment',
  templateUrl: './add-card-payment.component.html',
  styleUrls: ['./add-card-payment.component.css']
})
export class AddCardPaymentComponent implements OnInit {

  constructor(private params: ModalDialogParams, private paymentService: PaymentService, private router: RouterExtensions) { }

  // @ViewChild("dropinContainter") container: ElementRef;
  @ViewChild("submitButton") sB: ElementRef;
  @ViewChild("expirationDate") expirationText: ElementRef;
  @ViewChild("cardNumber") numberText: ElementRef;
  @ViewChild("cvv") cvvText: ElementRef;
  @ViewChild("form") formLayout: ElementRef;
  @ViewChild("cardImage") cardLayout: ElementRef;

  user = {
  	payment_id: '507305706'
  }
  opts :BrainTreeOptions = {
	amount: null,
	collectDeviceData: true,
	requestThreeDSecureVerification: false,
  }
  clientToken = '';

  // token = this.paymentService.getIdToken(this.user.payment_id);
  ngOnInit() {
 //  	braintree.client.create({
	//   authorization: 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz'
	// }, function (clientErr, clientInstance) {
	//   // Stop if there was a problem creating the client.
	//   // This could happen if there is a network error or if the authorization
	//   // is invalid.
	//   if (clientErr) {
	//     console.error('Error creating client:', clientErr);
	//     return;
	//   }
	// });

  }

  createViews() {
  	var form = <StackLayout> this.formLayout.nativeElement;
	var submit = <Button> this.sB.nativeElement;
	var expirationDate = <StackLayout> this.expirationText.nativeElement;
	var cardNumber = <StackLayout> this.numberText.nativeElement;
	var cvv = <StackLayout> this.cvvText.nativeElement;
	var cardImage = <StackLayout> this.cardLayout.nativeElement;

	submit.isEnabled = false;

  }

  close() {
  	this.params.closeCallback();
  }

  getClientToken() {
  	const token = new Observable();
  	token.set('Authorization', 'sandbox_9qsbyyq8_wmc3v88r36cbxjjz');
  	return token;
  }

  createPurchaseFunction(nonce: string, chargeAmount: number) {
  	return this.paymentService.addPaymentMethodToUser(this.user.payment_id, nonce);
  }

  onPaymentStatus(event) {

  }

}
