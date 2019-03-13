import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TransferService } from '../datatransfer.service';
import { UserService } from '../user.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  userInfo = this.transferService.getData();
  profileForm;
  user;

  constructor(private router: Router, private transferService: TransferService, private userService: UserService) { }

  	ngOnInit() {
  		console.log(this.userInfo);
  		var nameSplit = this.userInfo.name.split(" ");
  		this.profileForm = new FormGroup({
	  	user: new FormGroup({
	  		firstName: new FormControl(nameSplit[0]),
	    	lastName: new FormControl(nameSplit[1]),
	    	email: new FormControl(this.userInfo.email, Validators.compose([
				Validators.required,
				Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
	    	phone: new FormControl(this.userInfo.phone_number)
	   	}),
	    address: new FormGroup({
		    street: new FormControl(this.userInfo.address)
		    // city: new FormControl(''),
		    // state: new FormControl(''),
		    // zip: new FormControl('')
		  })
	  });

  // 		Auth.currentAuthenticatedUser({
		//     bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
		// }).then(user => this.user)
		// .catch(err => console.log(err));
	}

	onSubmit() {
	  var updatedValues = this.profileForm.value;
	  this.userInfo.name = updatedValues.firstName + " " + updatedValues.lastName;
	  this.userInfo.email = updatedValues.email;
	  this.userInfo.phone = updatedValues.phone;
	  this.userInfo.address = updatedValues.street;

	  console.log(this.userInfo);

	  this.userService.updateUser(this.userInfo.id, this.userInfo.name, this.userInfo.username, this.userInfo.address, this.userInfo.birthdate, this.userInfo.email, this.userInfo.gender, this.userInfo.phone_number, this.userInfo.rides_given, this.userInfo.rides_received);
	}
}
