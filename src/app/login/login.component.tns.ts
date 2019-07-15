import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';
import { Page } from "tns-core-modules/ui/page";

import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

// Amplify.configure({
//   Auth: {
//     // REQUIRED - Amazon Cognito Identity Pool ID,
//     // identityPoolId: "us-east-2:f0bb0da8-544c-41aa-9cae-289f5aec7336",
//     // REQUIRED - Amazon Cognito Region
//     region: "us-east-2",
//     // OPTIONAL - Amazon Cognito User Pool ID
//     userPoolId: "us-east-2_1PnaMFKRK",
//     //userPoolWebClientId: "2o6dsp7lolkgu660olfeq5igt3"
//   }
// });
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: RouterExtensions, private page: Page) { }

  ngOnInit() {
  	this.page.actionBarHidden = true;
  }

  toLogIn() {
    this.router.navigate(['navigation']);
  	// window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
  }

  toSignUp(){
    this.router.navigate(['navigation']);
  	// window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/signup?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
  }
}
