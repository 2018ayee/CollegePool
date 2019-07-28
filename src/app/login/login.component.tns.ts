import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
// import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';
import { Page } from "tns-core-modules/ui/page";
// import Auth from '@aws-amplify/auth';
// const firebase = require("nativescript-plugin-firebase");
import * as firebase from 'nativescript-plugin-firebase';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: RouterExtensions, private page: Page) { }

  ngOnInit() {
  	this.page.actionBarHidden = true;
    var firebaseConfig = {
      apiKey: "AIzaSyBGuiYpM138Q6ayqDMRUVWJp1CE9WB09Nw",
      authDomain: "collegepool-1552749118617.firebaseapp.com",
      databaseURL: "https://collegepool-1552749118617.firebaseio.com",
      projectId: "collegepool-1552749118617",
      storageBucket: "collegepool-1552749118617.appspot.com",
      messagingSenderId: "375263680183",
      appID: "collegepool-1552749118617",
    };

    firebase.init(firebaseConfig).then(
      () => {
        console.log("firebase.init done");
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );
    // firebase.auth().createUserWithEmailAndPassword('admin', 'kyvern123').catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });

  }

  toLogIn() {
    // Auth.signIn("phillim", "Collegepool69*")
    // .then(user => {
    //     console.log(user)
    //     console.log("redirecting")

    // })

    var credentials : firebase.LoginOptions = {
      passwordOptions: {
        email: 'adam.yee@gmail.com',
        password: 'kyvern123',
      },
      type: firebase.LoginType.PASSWORD
    }
    firebase.login(credentials).catch((err) => {
      console.log(err);
    })
    firebase.getCurrentUser().then((res) => {
      console.log(res);
    })

    this.router.navigate(['navigation']);
  	// window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
  }

  toSignUp(){
    firebase.createUser({
      email: 'adam.yee@gmail.com',
      password: 'kyvern123'
    }).catch((err) => {
      console.log(err);
    })
    // this.afAuth.auth.createUserWithEmailAndPassword('adam.yee@gmail.com', 'kyvern123');
    this.router.navigate(['navigation']);
  	// window.location.href='https://collegepooling.auth.us-east-2.amazoncognito.com/signup?response_type=token&client_id=4sslmmgv9pn5lb5087aaj5r599&redirect_uri=http://localhost:4200/loginroute&state=STATE&scope=aws.cognito.signin.user.admin+openid';
  }
}
