import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
// import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';
import { Page } from "tns-core-modules/ui/page";
import Auth from '@aws-amplify/auth';

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
    Auth.signIn("phillim", "Collegepool69*")
    .then(user => {
        console.log(user)
        console.log("redirecting")

    })

    this.router.navigate(['navigation']);
  	// window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
  }

  toSignUp(){
    this.router.navigate(['navigation']);
  	// window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/signup?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
  }
}
