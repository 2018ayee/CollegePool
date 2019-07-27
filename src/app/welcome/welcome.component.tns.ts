import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from 'nativescript-plugin-firebase';
import { LogincheckService } from '../logincheck.service.tns';
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  isLoggingIn = true;
  email;
  password;
  confirmPassword;
  firstName;
  lastName;
  firebaseConfig = {
    apiKey: "AIzaSyBGuiYpM138Q6ayqDMRUVWJp1CE9WB09Nw",
  	authDomain: "collegepool-1552749118617.firebaseapp.com",
  	databaseURL: "https://collegepool-1552749118617.firebaseio.com",
  	projectId: "collegepool-1552749118617",
  	storageBucket: "gs://collegepool-1552749118617.appspot.com",
  	messagingSenderId: "375263680183",
  	appId: "1:375263680183:web:f2af3f2835638d7c",
  };

  constructor(private page: Page, private router: RouterExtensions, private logincheckService: LogincheckService) { }

  @ViewChild("em") em: ElementRef;
  @ViewChild("pw") pw: ElementRef;
  @ViewChild("cpw") cpw: ElementRef;
  @ViewChild("fn") fn: ElementRef;
  @ViewChild("ln") ln: ElementRef;
  @ViewChild("welcomeContainer") wc: ElementRef;
  @ViewChild("activityIndicator") ai: ElementRef;

  ngOnInit() {
    this.createViews();
  }

  createViews() {
    // setTimeout(() => {this.em.nativeElement.focus();}, 500);
    // console.log(this.logincheckService.getUserFromLocalStorage)
    // this.logincheckService.getUserFromLocalStorage();
    if (this.logincheckService.getUserFromLocalStorage() != null)
      this.router.navigate(['navigation'], { clearHistory: true });
    else {
      var activityIndicator = <ActivityIndicator>this.ai.nativeElement;
      activityIndicator.busy = false;
      this.wc.nativeElement.style.visibility = 'visible';
    }
    this.page.actionBarHidden = true;
    firebase.init(this.firebaseConfig).then(
      () => {
        console.log("firebase.init done");
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );

  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    if (!this.email || !this.password) {
      this.alert("Please provide both an email address and password");
      return;
    }

    if (this.isLoggingIn) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    var credentials: firebase.LoginOptions = {
      passwordOptions: {
        email: this.email,
        password: this.password,
      },
      type: firebase.LoginType.PASSWORD
    }
    firebase.login(credentials).then((res) => {
      console.log(res);
      this.logincheckService.loginUser(res.uid)
      firebase.firestore.collection('users').doc(res.uid).get().then(doc => {
        if (doc.data().payment_id == null)
          this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email)
      })
      this.router.navigate(['navigation'], { clearHistory: true });
    }).catch((err) => {
      console.log(err);
      this.alert("We could not find an account matching your email or password");
      return;
    })
  }

  register() {
	  if (this.password != this.confirmPassword) {
	    this.alert("Your passwords do not match");
	    return;
  	}
  	firebase.createUser({
  		email: this.email,
  		password: this.password,
  	}).then((res) => {
        firebase.updateProfile({displayName: this.firstName + ' ' + this.lastName}).then();
      	this.logincheckService.addUserToFirestore(res.uid, null, null, res.email, this.firstName, this.lastName, null, null, 0, 0)
        this.logincheckService.loginUser(res.uid)
        this.logincheckService.addUserToBraintree('test', 'test user', res.email)
      	this.router.navigate(['navigation'], {clearHistory: true});
      }).catch((err) => {
        if(err == 'Creating a user failed. com.google.firebase.auth.FirebaseAuthUserCollisionException: The email address is already in use by another account.')
          this.alert('There is already an account associated with that email')
        else if (err == 'Creating a user failed. Password should be at least 6 characters')
          this.alert('Password must be at least 6 characters')
  		console.log(err);
  		return;
      })
  }

  forgotPassword() {
    prompt({
      title: "Forgot Password",
      message: "Enter the email address you used to register for CollegePool to reset your password",
      inputType: "email",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    }).then((data) => {
      if (data.result)
        firebase.sendPasswordResetEmail(data.text).then(
          () => {
            this.alert('An email has been sent to ' + data.text + ' with details of how to recover your account')
          },
          (errorMessage) => {
            this.alert('No account could be found with your email')
          }
        );
    });
  }

  focusEmail() {
    this.em.nativeElement.focus();
  }

  focusLastName() {
    this.ln.nativeElement.focus();
  }

  focusPassword() {
    this.pw.nativeElement.focus();
  }

  focusConfirmPassword() {
    if (!this.isLoggingIn) {
      this.cpw.nativeElement.focus();
    }
  }

  alert(message: string) {
    return alert({
      title: "CollegePool",
      okButtonText: "Close",
      message: message
    });
  }

  fbLogin() {
    this.wc.nativeElement.style.visibility = 'collapse';
    var activityIndicator = <ActivityIndicator>this.ai.nativeElement;
    activityIndicator.busy = true;
    firebase.login({
      type: firebase.LoginType.FACEBOOK,
      // Optional
      facebookOptions: {
        // defaults to ['public_profile', 'email']
        scopes: ['public_profile', 'email', 'user_birthday', 'user_gender'] // note: this property was renamed from "scope" in 8.4.0
      }
    }).then(
        (res) => {
          
          firebase.firestore.collection('users').doc(res.uid).get().then(doc => {
            if(doc.exists == false) {
              this.logincheckService.addUserToFirestore(res.uid, null, null, res.email, res.additionalUserInfo.profile['first_name'], res.additionalUserInfo.profile['last_name'], null, null, 0, 0);
              this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email)
            }
            else if(doc.data().payment_id == null) {
              this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email)
            }
          })
          this.logincheckService.loginUser(res.uid)
          this.router.navigate(['navigation'], {clearHistory: true});
        },
        (errorMessage) => {
          console.log(errorMessage);
          this.wc.nativeElement.style.visibility = 'visible';
        }
    );

  }

}
