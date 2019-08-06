import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { DynamicAddService } from '../dynamic-add.service';
import * as dropin from 'braintree-web-drop-in';
import * as braintree from 'braintree-web';
import { Braintree, BrainTreeOptions } from 'nativescript-braintree';
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
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as firebase from 'nativescript-plugin-firebase';

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
  @ViewChild('paymentsContainer') pC: ElementRef;
  user = {
  	payment_id: '507305706'
  }
  opts :BrainTreeOptions = {
    amount: null,
    collectDeviceData: true,
    requestThreeDSecureVerification: false,
  }
  clientToken = '';
  paymentCustomer;
  paymentInfo;
  payments = new ObservableArray<PaymentItem>();

  constructor(private addService: DynamicAddService, private paymentService: PaymentService, private logincheckService: LogincheckService, private transferService: TransferService,
  	private vcRef: ViewContainerRef, private modal: ModalDialogService, private router: RouterExtensions) { }

  ngOnInit() {
    firebase.getCurrentUser().then(user => {
      firebase.firestore.collection('users').doc(user.uid).get().then(doc => {
        this.user.payment_id = doc.data().payment_id;
        this.getUser();
      })
    })
  	
  }

  showModal() {
    let braintree = new Braintree();
    // this.createViews();

    braintree.startPayment(this.clientToken, this.opts);

    braintree.on("success", (res) => {
        let output = res.object.get("output");
        // console.dir(output);

        var addContainer = <StackLayout> this.aC.nativeElement;
        var paymentsContainer = <StackLayout> this.pC.nativeElement;
        var activityIndicator = <ActivityIndicator> this.aI.nativeElement;
        paymentsContainer.style.visibility = 'collapse';
        addContainer.style.visibility = 'collapse';
        activityIndicator.busy = true;

        this.paymentService.addPaymentMethodToUser(this.user.payment_id, output.nonce).subscribe((res: any) => {
          if(res.message == 'Success') {
            dialogs.alert({
                title: "Added method",
                message: "Payment method added successfully",
                okButtonText: "Close"
            }).then(() => {
            });

            this.getUser();
          }
          else if(res.message == 'Already exists') {
            addContainer.style.visibility = 'visible';
            paymentsContainer.style.visibility = 'visible';
            activityIndicator.busy = false;
            dialogs.alert({
                title: "Could not add method",
                message: "Payment method already exists, please try another one.",
                okButtonText: "Close"
            }).then(() => {
            });
          }
          // this.router.navigate(['payments']);
        })
        // this.paymentService.addPaymentMethodToUser(this.user.payment_id, output.nonce).subscribe((res) => {
        //   this.router.navigate(['payments']);
        // });
    })
     
    braintree.on("cancel", function (res) {
        let output = res.object.get("output");
        // console.dir(output);
    })
     
    braintree.on("error", function (res) {
        let output = res.object.get("output");
        // console.dir(output);
    })
    // let options = {
    //     context: {},
    //     fullscreen: true,
    //     viewContainerRef: this.vcRef
    //     // animated: true,
    //     // transition: { name: "slideTop" }
    // };
    
    // this.modal.showModal(AddPaymentComponent, options).then(res => {

    // });
  }

  getUser() {
    this.payments.splice(0);

    var addContainer = <StackLayout> this.aC.nativeElement;
    var paymentsContainer = <StackLayout> this.pC.nativeElement;
    addContainer.style.visibility = 'collapse';
    paymentsContainer.style.visibility = 'collapse';

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
  				this.payments.push(new PaymentItem("~/img/venmo-icon.png", this.paymentCustomer.venmoAccounts[i].venmoUserId, this.paymentCustomer.venmoAccounts[i].token, "Venmo"))
  		// document.getElementById('list-loading-circle').style.display = 'none';
  	});
    this.paymentService.getIdToken(this.user.payment_id).subscribe((res: any) => {
      this.clientToken = res.clientToken;
    });
  }

  setupViews() {
    var activityIndicator = <ActivityIndicator> this.aI.nativeElement;
    activityIndicator.busy = false;

    var addContainer = <StackLayout> this.aC.nativeElement;
    addContainer.style.visibility = 'visible';

    var paymentsContainer = <StackLayout> this.pC.nativeElement;
    paymentsContainer.style.visibility = 'visible';
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
    this.router.back();
  }
}
