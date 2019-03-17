import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogincheckService {
	myStorage = window.localStorage;
	//user from database
	user;
	//list of all users from database
	users;
	//user info from cognito
	userInfo = null;
  constructor(private userService: UserService, private router: Router) { }

  decodeToken(idToken)
	{
		const helper = new JwtHelperService();

		const decodedToken = helper.decodeToken(idToken);
		const expirationDate = helper.getTokenExpirationDate(idToken);
		const isExpired = helper.isTokenExpired(idToken);
		console.log(decodedToken);
		if(decodedToken == null)
			this.router.navigateByUrl('/login');
		this.userInfo =  decodedToken;
	}

	checkUser() {
		this.userService.getUsers()
		.subscribe((data: User[]) => {
			this.users = data;
			var isUser = false;
			for(var i = 0; i < this.users.length; i++) {
				if(this.userInfo['cognito:username'] == this.users[i].username)
				{
					isUser = true;
					this.user = this.users[i];
				}
			}
			if(!isUser)
			{
				console.log('hi');
				this.userService.addUser(this.userInfo.name, this.userInfo['cognito:username'], this.userInfo.address, this.userInfo.birthdate, this.userInfo.email, this.userInfo.gender, this.userInfo.phone_number)
				.subscribe(() => {
					this.userService.getUsers()
					.subscribe((data: User[]) => {
						this.users = data;
						for(var i = 0; i < this.users.length; i++) {
							if(this.userInfo['cognito:username'] == this.users[i].username)
							{
								this.user = this.users[i];
							}
						}
						this.setLocalStorage();
						this.router.navigateByUrl('/home');
					});
				});
			}
			else{
				this.setLocalStorage();
				this.router.navigateByUrl('/home');
			}

		});
	}

	setLocalStorage() {
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
	}

	getUserFromLocalStorage() {
		this.user = {
			"_id" : this.myStorage.getItem('_id'),
			"name" : this.myStorage.getItem('name'), 
			"username" : this.myStorage.getItem('username'), 
			"address": this.myStorage.getItem('address'), 
			"birthdate": this.myStorage.getItem('birthdate'),
			"email": this.myStorage.getItem('email'), 
			"gender": this.myStorage.getItem('gender'), 
			"phone_number": this.myStorage.getItem('phone_number'), 
			"rides_given": this.myStorage.getItem('rides_given'), 
			"rides_received": this.myStorage.getItem('rides_received')
		};
	}

	getUser() {
		if(this.user == null)
		{
			this.getUserFromLocalStorage();
		}
		return this.user;
	}

	loginCheck() {
		if(this.userInfo == null && window.localStorage.getItem('user') == null)
			this.router.navigateByUrl('/login');
	}
}
