import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TransferService } from '../datatransfer.service';
import { UserService } from '../user.service';
import { Auth } from 'aws-amplify';
import { LogincheckService } from '../logincheck.service';
import {MatButtonModule} from '@angular/material/button';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})


export class SettingsComponent implements OnInit {

  profileForm;
  user;
  span;
  myStorage = window.localStorage;


    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

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
	  		this.myStorage.setItem('_id', this.user._id);
		this.myStorage.setItem('name', this.user.name);
		this.myStorage.setItem('username', this.user.username);
		this.myStorage.setItem('address', this.user.address);
		this.myStorage.setItem('birthdate', this.user.birthdate);
		this.myStorage.setItem('email', this.user.email);
		this.myStorage.setItem('gender', this.user.gender);
		this.myStorage.setItem('phone_number', this.user.phone_number);
		this.myStorage.setItem('rides_given', this.user.rides_given);
		this.myStorage.setItem('rides_received', this.user.rides_received);
	  		location.reload();
		});
	}
}
