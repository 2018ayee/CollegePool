import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { AddCardPaymentComponent } from '../add-card-payment/add-card-payment.component';


class MethodItem {
	constructor(public paymentType: string, public info: string) {}
}

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  constructor(private vcRef: ViewContainerRef, private modal: ModalDialogService, private params: ModalDialogParams) { }

  methods = new ObservableArray<MethodItem>();

  ngOnInit() {
  	this.addMethods();
  }

  addMethods() {
  	this.methods.push(new MethodItem('~/img/credit-card-icon.png', 'Credit or Debit Card'));
  	this.methods.push(new MethodItem('~/img/paypal-icon.png', 'Paypal'));
  	this.methods.push(new MethodItem('~/img/venmo-icon.png', 'Venmo'));
  }

  openCardPayment() {
    let options = {
        context: {},
        fullscreen: true,
        viewContainerRef: this.vcRef
        // animated: true,
        // transition: { name: "slideTop" }
    };

    this.modal.showModal(AddCardPaymentComponent, options).then(res => {

    });
  }

  close(res) {
  	this.params.closeCallback(res);
  }

  onSelect(event) {
  	//event.index stores which index was tapped
  	if(event.index == 0)
  		this.openCardPayment();
  }

}
