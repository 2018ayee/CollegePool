import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { DynamicAddService } from '../dynamic-add.service';
import * as dropin from 'braintree-web-drop-in';
import * as braintree from 'braintree-web';
import { IPayPalConfig } from 'ngx-paypal';
import { LogincheckService } from '../logincheck.service';
import { PaymentService } from '../payment.service.tns';
import { TransferService } from '../datatransfer.service';

import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { AddPaymentComponent } from '../add-payment/add-payment.component';
import { PaymentInfoComponent } from '../payment-info/payment-info.component';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

declare let paypal: any;

class PaymentItem {
	constructor(public paymentType: string, public info: string, public idToken: string, public type: string) {}
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @ViewChild('activityIndicator') aI: ElementRef;
  @ViewChild('addContainer') aC: ElementRef;
  user = {
  	payment_id: '507305706'
  }
  paymentCustomer;
  paymentInfo;
  payments = new ObservableArray<PaymentItem>();

  constructor(private addService: DynamicAddService, private paymentService: PaymentService, private logincheckService: LogincheckService, private transferService: TransferService,
  	private vcRef: ViewContainerRef, private modal: ModalDialogService, private router: RouterExtensions) { }

  ngOnInit() {
  	this.getUser();
  }

  showModal() {
    let options = {
        context: {},
        fullscreen: true,
        viewContainerRef: this.vcRef
        // animated: true,
        // transition: { name: "slideTop" }
    };
    
    this.modal.showModal(AddPaymentComponent, options).then(res => {

    });
  }

  getUser() {
  	this.paymentService.getPaymentUserById(this.user.payment_id).subscribe((data) => {

      this.setupViews();

  		this.paymentCustomer = data;
  		// console.log(this.paymentCustomer)
  		if(this.paymentCustomer.creditCards != null)
	  		for(var i = 0; i < this.paymentCustomer.creditCards.length; i++) 
	  			this.payments.push(new PaymentItem("~/img/credit-card-icon.png", this.paymentCustomer.creditCards[i].cardType + " ending in " + this.paymentCustomer.creditCards[i].last4, this.paymentCustomer.creditCards[i].token, "Card"));
  		if(this.paymentCustomer.paypalAccounts != null)
  			for(var i = 0; i < this.paymentCustomer.paypalAccounts.length; i++)
  				this.payments.push(new PaymentItem("~/img/paypal-icon.png", this.paymentCustomer.paypalAccounts[i].email, this.paymentCustomer.paypalAccounts[i].token, "PayPal"))
  		if(this.paymentCustomer.venmoAccounts != null)
  			for(var i = 0; i < this.paymentCustomer.venmoAccounts.length; i++)
  				this.payments.push(new PaymentItem("~/img/venmo-icon.png", this.paymentCustomer.venmoAccounts[i].email, this.paymentCustomer.venmoAccounts[i].token, "Venmo"))
  		// document.getElementById('list-loading-circle').style.display = 'none';
  	});
  }

  setupViews() {
    var activityIndicator = <ActivityIndicator> this.aI.nativeElement;
    activityIndicator.busy = false;

    var addContainer = <StackLayout> this.aC.nativeElement;
    addContainer.style.visibility = 'visible';
  }

  selectPayment() {

  }

  onSelect(event) {
  	// console.log(event.index);
  	let options = {
        context: {},
        fullscreen: true,
        viewContainerRef: this.vcRef
        // animated: true,
        // transition: { name: "slideTop" }
    };

    this.transferService.setData(this.payments.getItem(event.index));
    this.router.navigate(['paymentinfo']);
    // this.modal.showModal(PaymentInfoComponent, options).then(res => {

    // });
  }

  onNavBtnTap() {
    this.router.navigate(['settings']);
  }

}
