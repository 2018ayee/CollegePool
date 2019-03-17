import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TransferService } from '../datatransfer.service';
import { UserService } from '../user.service';
import { Auth } from 'aws-amplify';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  profileForm;
  user;
  span;

  constructor(private logincheckService: LogincheckService, private router: Router, private transferService: TransferService, private userService: UserService) { }

  	ngOnInit() {
  		console.log(this.transferService.getData());
  		if(window.localStorage.getItem('visibility') == 'visible')
  			document.getElementById('update-dialog').style.visibility = 'visible';

  		window.localStorage.setItem('visibility', 'hidden');

  		this.span = document.getElementsByClassName("close")[0];
		this.span.onclick = function() {
		    document.getElementById('update-dialog').style.visibility = 'hidden';
		}

  		this.logincheckService.loginCheck();
  		this.user = this.logincheckService.getUser();
  		console.log(this.user);


  		var nameSplit = this.user.name.split(" ");
  		this.profileForm = new FormGroup({
	  	user: new FormGroup({
	  		firstName: new FormControl(nameSplit[0]),
	    	lastName: new FormControl(nameSplit[1]),
	    	email: new FormControl(this.user.email, Validators.compose([
				Validators.required,
				Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
	    	phone: new FormControl(this.user.phone_number)
	   	}),
	    address: new FormGroup({
		    street: new FormControl(this.user.address)
		    // city: new FormControl(''),
		    // state: new FormControl(''),
		    // zip: new FormControl('')
		  })
	  });
	}

	onSubmit() {
	  var updatedValues = this.profileForm.value;
	  console.log(updatedValues);
	  this.user.name = updatedValues.user.firstName + " " + updatedValues.user.lastName;
	  console.log(this.user.name);
	  this.user.email = updatedValues.user.email;
	  this.user.phone = updatedValues.user.phone;
	  this.user.address = updatedValues.address.street;

	  console.log(this.user);

	  this.userService.updateUser(this.user._id, this.user.name, this.user.username, this.user.address, this.user.birthdate, this.user.email, this.user.gender, this.user.phone_number, this.user.rides_given, this.user.rides_received)
	  .subscribe(() => {
	  		window.localStorage.setItem('visibility', 'visible');
	  		location.reload();
		});
	}
}
