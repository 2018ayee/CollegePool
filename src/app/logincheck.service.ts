import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogincheckService {

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
				this.userService.addUser(this.userInfo.name, this.userInfo['cognito:username'], this.userInfo.address, this.userInfo.birthdate, this.userInfo.email, this.userInfo.gender, this.userInfo.phone_number);
				this.user = {"name" : this.userInfo.name, "username" : this.userInfo['cognito:username'], "address": this.userInfo.address,
				"email": this.userInfo.email, "gender": this.userInfo.gender, "phone_number": this.userInfo.phone_number, "rides_given": "0", "rides_received": "0"};
			}
			this.router.navigateByUrl('/home');
		});
	}

	getUser() {
		return this.user;
	}

	loginCheck() {
		if(this.userInfo == null)
			this.router.navigateByUrl('/login');
	}
}
