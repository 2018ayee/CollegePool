import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { User } from './user.model';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import * as firebase from 'nativescript-plugin-firebase';
import * as appSettings from 'tns-core-modules/application-settings';
import { RouterExtensions } from 'nativescript-angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogincheckService {
	//myStorage = window.localStorage;
	myStorage = null;
	//user from database
	user;
	//list of all users from database
	users;
	//user info from cognito
	userInfo = null;
	uid;
  constructor(private userService: UserService, private paymentService: PaymentService, private router: RouterExtensions) { }

  addUserToFirestore(uid, address, birthdate, email, first_name, last_name, gender, phone_number, rides_given, rides_received) {
  	const usersCollection = firebase.firestore.collection('users');
  	usersCollection.doc(uid).set({
  		address: address,
  		birthdate: birthdate,
  		email: email,
  		first_name: first_name,
  		last_name: last_name,
  		gender: gender,
  		phone_number: phone_number,
  		rides_given: rides_given,
  		rides_received: rides_received,
  		posts: []
  	});
  }

  decodeToken(token) {

  }

  checkUser() {

  }

  clearInfo() {
  	this.user = null;
  	this.userInfo = null;
  	this.users = null;
  	this.uid = null;
  	appSettings.clear();
  }
  
  addUserToBraintree(username, name, email) {
  	this.paymentService.addPaymentUser(this.uid, username, name, email).subscribe((data: any) => {
  		firebase.firestore.collection('users').doc(this.uid).update({
  			payment_id: data.customer.id
  		})
  	})
  	// this.paymentService.getPaymentUserById('258703956').subscribe((data: any) => {
  	// 	console.log(data);
  	// })
  	console.log('added to braintree');
  }

  loginUser(uid) {
  	appSettings.setString("uid", uid);
  	this.uid = uid;
  }

  loginCheck() {
	if(this.getUser == null)
		this.router.navigate(['welcome'])
  }

  getUserFromLocalStorage() {
	return appSettings.getString("uid");
  }

  getUser() {
	if(this.uid == null)
	{
		this.uid = this.getUserFromLocalStorage();
	}
	return this.uid;
  }

}
