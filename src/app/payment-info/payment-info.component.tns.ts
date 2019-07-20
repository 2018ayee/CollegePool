import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { PaymentService } from '../payment.service.tns';

// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { isAndroid, isIOS, device, screen } from 'tns-core-modules/platform';
import { android as androidApp, ios as iosApp } from "tns-core-modules/application";
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';


@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  constructor(private transferService: TransferService, private paymentService: PaymentService, private router: RouterExtensions,
  	private vcRef: ViewContainerRef, private modal: ModalDialogService) { }

  @ViewChild('activityIndicator') aI: ElementRef;
  @ViewChild('infoContainer') iC: ElementRef;
  

  paymentInfo = {
  	paymentType: "loading",
  	info: "loading",
  	idToken: "loading",
  	type: "loading"
  }

  ngOnInit() {
  	this.paymentInfo = this.transferService.getData();
  	// console.log(this.paymentInfo);
  }

  remove() {
  	let options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef,
        animated: true,
        // transition: { name: "slideTop" }
    };
    
    this.modal.showModal(ConfirmationComponent, options).then(result => {
    	if(result == "delete") {
    		var infoContainer = <StackLayout> this.iC.nativeElement;
    		infoContainer.style.visibility = "collapse";
    		this.showBusy();
    		this.paymentService.removePaymentMethodFromUser(this.paymentInfo.idToken).subscribe((res) => {
			  	this.router.navigate(['payments']);
		  	});
    	}
    });
  }

  onNavBtnTap() {
  	this.router.navigate(['payments']);
  }

  showBusy() {
  	var activityIndicator = <ActivityIndicator> this.aI.nativeElement;
  	activityIndicator.busy = true;
  }

}
