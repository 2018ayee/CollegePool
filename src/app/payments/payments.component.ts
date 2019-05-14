import { Component, OnInit } from '@angular/core';
import { DynamicAddService } from '../dynamic-add.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private addService: DynamicAddService) { }

  ngOnInit() {
  	this.addMethods();
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
}
