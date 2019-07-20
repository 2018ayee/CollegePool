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

@Component({
  selector: 'app-add-card-payment',
  templateUrl: './add-card-payment.component.html',
  styleUrls: ['./add-card-payment.component.css']
})
export class AddCardPaymentComponent implements OnInit {

  constructor(private params: ModalDialogParams, private paymentService: PaymentService) { }

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
  ngOnInit() {
  	// this.createViews();
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
