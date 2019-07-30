import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import * as firebase from 'nativescript-plugin-firebase';
import { LogincheckService } from '../logincheck.service.tns';
import { TransferService } from '../datatransfer.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { SettingsformComponent } from '../settingsform/settingsform.component';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { Label } from 'tns-core-modules/ui/label';


@Component({
  selector: 'app-reauth',
  templateUrl: './reauth.component.html',
  styleUrls: ['./reauth.component.css']
})
export class ReauthComponent implements OnInit {

  constructor(private params: ModalDialogParams, private transferService: TransferService, private logincheckService: LogincheckService, 
  	private vcRef: ViewContainerRef, private modal: ModalDialogService) { }

  @ViewChild("errorMessage") em: ElementRef;
  field;
  userId;
  userEmail;
  password;

  ngOnInit() {
  	this.field = this.transferService.getData();
  	this.userId = this.logincheckService.getUser();
  	firebase.getCurrentUser().then((user) => {
  		this.userEmail = user.email;
  	})
  }

  close(res) {
  	let errorMessage = <Label> this.em.nativeElement;
	errorMessage.style.visibility = 'collapse';
	this.password = '';
    this.params.closeCallback(res);
  }

  submit(password) {
  	firebase.reauthenticate({
	    type: firebase.LoginType.PASSWORD, // or GOOGLE / FACEBOOK
	    // this is only required in type == PASSWORD
	    passwordOptions: {
	      email: this.userEmail,
	      password: this.password
	    }
	  }).then(
	      (result) => {
	        // you can now safely delete the account / change the password, etc
	        let options = {
		        context: {},
		        fullscreen: true,
		        viewContainerRef: this.vcRef
		        // animated: true,
		        // transition: { name: "slideTop" }
		    };
		    let errorMessage = <Label> this.em.nativeElement;
	        errorMessage.style.visibility = 'collapse';
		    this.transferService.setData(this.field);
		    this.password = '';
	    	this.modal.showModal(SettingsformComponent, options).then(res => {
		    	if(res == 'update') {
		    		this.close('update');
		    	}
		    });
	      },
	      (error) => {
	        let errorMessage = <Label> this.em.nativeElement;
	        errorMessage.style.visibility = 'visible';
	      }
	  );
  }
}
