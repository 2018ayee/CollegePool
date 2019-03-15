import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	console.log(this.router.url);
  }

  toLogIn() {
  	window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
    //window.location.href='https://collegepool.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=9pt5k8jg7mfupl900k5fq0gqi&redirect_uri=http://localhost:4200/home&state=STATE&scope=aws.cognito.signin.user.admin+openid';
  }

  toSignUp(){
  	window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/signup?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
    //window.location.href='https://collegepool.auth.us-east-2.amazoncognito.com/signup?response_type=token&client_id=9pt5k8jg7mfupl900k5fq0gqi&redirect_uri=http://localhost:4200/home&state=STATE&scope=aws.cognito.signin.user.admin+openid';
  }
}
