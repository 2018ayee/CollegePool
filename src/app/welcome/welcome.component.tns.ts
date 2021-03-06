import { Component, OnInit, ElementRef, ViewChild, NgZone, ViewContainerRef } from '@angular/core';
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import * as firebase from 'nativescript-plugin-firebase';
import { messaging, Message } from "nativescript-plugin-firebase/messaging";
import { LogincheckService } from '../logincheck.service.tns';
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { TransferService } from '../datatransfer.service';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ForgetFormComponent } from '../forget-form/forget-form.component';
//import { HttpClient } from '@angular/common/http';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { pricing } from '../pricing-cloud.tns';
import { DatePipe } from '@angular/common';
//import { HomeComponent} from '../home/home.component.tns'
//import { Posting } from '../posting.model';

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
  deviceToken;
  // dialogOpen = false;
  firebaseConfig = {
    apiKey: "AIzaSyBGuiYpM138Q6ayqDMRUVWJp1CE9WB09Nw",
    authDomain: "collegepool-1552749118617.firebaseapp.com",
    databaseURL: "https://collegepool-1552749118617.firebaseio.com",
    projectId: "collegepool-1552749118617",
    storageBucket: "gs://collegepool-1552749118617.appspot.com",
    messagingSenderId: "375263680183",
    appId: "1:375263680183:web:f2af3f2835638d7c",
  };
  //p : Posting[];
  constructor(private page: Page, private router: RouterExtensions, private logincheckService: LogincheckService, private transferService: TransferService,
    private ngZone: NgZone, private modal: ModalDialogService, private vcRef: ViewContainerRef, private price: pricing, private datePipe: DatePipe,
    ) { }

  @ViewChild("em", { static: true }) em: ElementRef;
  @ViewChild("pw", { static: true }) pw: ElementRef;
  @ViewChild("cpw", { static: true }) cpw: ElementRef;
  @ViewChild("fn", { static: true }) fn: ElementRef;
  @ViewChild("ln", { static: true }) ln: ElementRef;
  @ViewChild("welcomeContainer", { static: true }) wc: ElementRef;
  @ViewChild("formLayout", { static: true }) fl: ElementRef;
  @ViewChild("activityIndicator", { static: true }) ai: ElementRef;

  ngOnInit() {
    //console.log("ngOnInit"); 
    this.registerNotifications();
    this.createViews();
    this.updatePrice();
    //this.home.loadPostings();
    
    /***
    this.price.feedCloud(time).subscribe(res => {
      console.log("response received in ngOnInit, this is the response: ");
      console.log(res);
    });
    ***/
    //console.log("current time: " + time);

  }
/******   HERE   ******/
  async createViews() {
    console.log("createViews");
    
    await firebase.init(this.firebaseConfig).then(
      () => {
        console.log("firebase.init done");
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );
    await firebase.addOnMessageReceivedCallback(async (message: any) => {
      if(message.type === "New Message") {
        console.log(message);
        this.transferService.setData(message.data.chatId);
        await this.ngZone.run(() => {this.router.navigate(['chat'], {clearHistory: true})})
      }
    })
    if (this.logincheckService.getUserFromLocalStorage() != null)
      this.router.navigate(['navigation'], { clearHistory: true });
    else {
      var activityIndicator = <ActivityIndicator>this.ai.nativeElement;
      activityIndicator.busy = false;
      this.wc.nativeElement.style.visibility = 'visible';
    }
    this.page.actionBarHidden = true;
  }

  updatePrice(){
     var time = Date.now()+5000;
    console.log(this.logincheckService.getUser());
    var userDocRef = firebase.firestore.collection('users').doc(this.logincheckService.getUser());
    userDocRef.update({
      currTime: time
    })
    // let layout = <StackLayout>this.page.getViewById('feed');
    // layout.removeChildren();
    // this.cache.placeholder = fromFile("~/img/gray_background.jpg");
    // this.cache.maxRequests = 5;

    //this.postings.splice(0);
    //let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
    //activityIndicator.busy = true;

    const currentDate = new Date();

    var posts = [];
    var postingsCollection = firebase.firestore.collection('postings');
    const query = postingsCollection.where('formattedDate', '>=', this.datePipe.transform(currentDate, 'yyyy-MM-dd'))
    query.orderBy('formattedDate', 'asc').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //console.log(doc.data().capacity);
        this.price.feedCloud(time, doc.data().unixDate, doc.id, doc.data().capacity).subscribe(res => {
          console.log("response received in updatePrice, this is the response: ");
          console.log(res);
        });
        posts.push({
          id: doc.id,
          data: doc.data()
        })
      });
     });
  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
    if(!this.isLoggingIn) {
      this.fl.nativeElement.style.marginTop = '35';
    }
    else {
      this.fl.nativeElement.style.marginTop = '100';
    }
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

  // showDialog() {
  //   this.dialogOpen = true;
  // }

  // closeDialog() {
  //   this.dialogOpen = false;
  // }

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
      console.log("Email Verified Status", res.emailVerified)
      if (res.emailVerified) {
        this.logincheckService.loginUser(res.uid)
        firebase.firestore.collection('users').doc(res.uid).get().then(doc => {
          if (doc.data().payment_id == null)
            this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email)
        })
        this.updateTokens(res.uid);
        this.router.navigate(['navigation'], { clearHistory: true });
      }
      else{
        dialogs.confirm({
          title: "Email Verification",
          message: "Your email has not been verified yet. Please check your email for a verification link. You may also resend the verification email.",
          okButtonText: "Resend Email",
          cancelButtonText: "Close"
      }).then(result => {
          console.log("Dialog result: " + result);
          if(result){
              //Do action1
              this.sendEmailVerification();
          }
      });
        // this.showDialog();
      }
    }).catch((err) => {
      console.log(err);
      this.alert("We could not find an account matching your email or password.");
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
      this.logincheckService.addUserToFirestore(res.uid, null, null, res.email, this.firstName, this.lastName, null, null, 0, 0, '~/img/sample_profile.png', this.deviceToken)
      firebase.updateProfile({ displayName: this.firstName + ' ' + this.lastName }).then();
      // this.logincheckService.loginUser(res.uid)
      this.logincheckService.addUserToBraintree('test', 'test user', res.email)
      firebase.sendEmailVerification().then(
        () => {
          console.log("Email verification sent");
          this.alert("An email verification link has been sent. Please check your email for the link.")
          this.toggleForm();
        }).catch(err => {
          console.log("Error sending email verificatiodn: " + err);
        }
        );
    }).catch((err) => {
      if (err == 'Creating a user failed. com.google.firebase.auth.FirebaseAuthUserCollisionException: The email address is already in use by another account.')
        this.alert('There is already an account associated with that email')
      else if (err == 'Creating a user failed. Password should be at least 6 characters')
        this.alert('Password must be at least 6 characters')
      console.log(err);
      return;
    })
  }

  sendEmailVerification() {
    firebase.sendEmailVerification().then(
      () => {
        console.log("Email verification sent");
        this.alert("An email verification link has been sent. Please check your email for the link.")
        // this.closeDialog();
      }).catch(err => {
        console.log("Error sending email verificatiodn: " + err);
      }
      );
  }

  forgotPassword() {

    let options = {
      context: {},
      fullscreen: true,
      viewContainerRef: this.vcRef
      // animated: true,
      // transition: { name: "slideTop" }
  };
    this.modal.showModal(ForgetFormComponent, options).then(res => {
      if(res == 'update') {
        // this.updateListView();
      }
    });
  }

  registerNotifications() {
    messaging.registerForPushNotifications({
      onPushTokenReceivedCallback: (token: string): void => {
        // console.log("Firebase plugin received a push token: " + token);
        this.deviceToken = token;
      },

      onMessageReceivedCallback: (message: Message) => {
        console.log("Push message received: " + message);
        console.log("Message data: " + message.data);
      },

      // Whether you want this plugin to automatically display the notifications or just notify the callback. Currently used on iOS only. Default true.
      showNotifications: true,

      // Whether you want this plugin to always handle the notifications when the app is in foreground. Currently used on iOS only. Default false.
      showNotificationsWhenInForeground: false
    }).then(() => console.log("Registered for push"));
  }

  updateTokens(uid) {
    const userDocument = firebase.firestore.collection('users').doc(uid);
    userDocument.get().then(async (doc) => {
      let tokens = doc.data().tokens;
      if (tokens) {
        tokens.push(this.deviceToken);
        let updatedTokens = Array.from(new Set(tokens));
        userDocument.update({
          tokens: updatedTokens
        }).catch((err) => {
          console.log(err)
        })
      }
      else {
        userDocument.update({
          tokens: [this.deviceToken]
        }).catch((err) => {
          console.log(err)
        })
      }
      const chatPromise = await this.updateChatTokens(doc.data().chats);
    }).catch((err) => { console.log(err) })
  }

  async updateChatTokens(chats) {
    let chatCollection = firebase.firestore.collection('chats');
    for (var i = 0; i < chats.length; i++) {
      const chatPromise = await chatCollection.doc(chats[i]).get().then(async (doc) => {
        const tokens = doc.data().tokens;
        tokens.push(this.deviceToken);
        const newTokens = Array.from(new Set(tokens));
        const updatePromise = await chatCollection.doc(chats[i]).update({ tokens: newTokens });
      })
    }
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
    if (!this.isLoggingIn && this.cpw) {
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
          if (doc.exists == false) {
            this.logincheckService.addUserToFirestore(res.uid, null, null, res.email, res.additionalUserInfo.profile['first_name'], res.additionalUserInfo.profile['last_name'], null, null, 0, 0, res.photoURL, this.deviceToken);
            this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email)
          }
          else if (doc.data().payment_id == null) {
            this.logincheckService.addUserToBraintree(res.displayName, res.displayName, res.email)
          }
          else {
            this.updateTokens(res.uid);
          }
        })
        this.logincheckService.loginUser(res.uid)
        this.router.navigate(['navigation'], { clearHistory: true });
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.wc.nativeElement.style.visibility = 'visible';
      }
    );

  }

}
