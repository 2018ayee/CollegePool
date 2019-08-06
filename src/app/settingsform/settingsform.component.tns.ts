import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { Page } from "tns-core-modules/ui/page";
// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import * as firebase from 'nativescript-plugin-firebase';
import { LogincheckService } from '../logincheck.service.tns';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Label } from 'tns-core-modules/ui/label';
import { TextField } from 'tns-core-modules/ui/text-field';

@Component({
  selector: 'app-settingsform',
  templateUrl: './settingsform.component.html',
  styleUrls: ['./settingsform.component.css']
})
export class SettingsformComponent implements OnInit {

  constructor(private transferService: TransferService, private logincheckService: LogincheckService, 
    private page: Page, private router: RouterExtensions, private params: ModalDialogParams) { }

  @ViewChild("errorMessage", { static: true }) em: ElementRef;
  @ViewChild("secondVal", { static: true }) sv: ElementRef;
  userId;
  field;
  label;
  value;
  secondValue;
  keyboard;
  maxlength;
  isSecure = false;
  errorText;
  returnKey = "done"
  hint;
  secondHint;
  ngOnInit() {
    // this.page.actionBarHidden = true;
    this.field = this.transferService.getData();
    this.label = this.field.label;
    this.value = this.field.value;
    if(this.field.value == "None") {
      this.value = '';
    }
    if(this.label=="Name"){
      // this.keyboard = "";
      this.maxlength = 30;
      this.returnKey = "next";
      this.value = this.field.firstName;
      this.secondValue = this.field.lastName;
      this.hint = "First name";
      this.secondHint = "Last name";
      let secondValue = <TextField> this.sv.nativeElement;
      secondValue.style.visibility = "visible";
    }
    else if(this.label=="Email"){
      this.keyboard = "email";
      this.maxlength = 30;
      this.errorText = "Invalid email"
      this.hint = "Email"
    }
    else if(this.label=="Phone Number"){
      this.keyboard = "phone";
      this.maxlength = 10;
      this.errorText = "Invalid phone number"
      this.hint = "xxx-xxx-xxxx"
    }
    else if(this.label=="Password") {
      this.value = '';
      this.maxlength = 30;
      this.isSecure = true;
      this.label = "Enter new password";
      this.hint = "New password";
      this.secondHint = "Re-enter new password";
      this.errorText = "Password must be at lest 6 characters long";
      let secondValue = <TextField> this.sv.nativeElement;
      secondValue.style.visibility = "visible";
    }
  }

  submitData(result) {
    this.userId = this.logincheckService.getUser();
    const userDocument = firebase.firestore.collection('users').doc(this.userId);
    if (this.label == "Name") {
      firebase.updateProfile({
        displayName: this.value + " " + this.secondValue
      }).then(() => {
        console.log("Profile updated")
      }).catch((err) => {
        console.log(err)
      })

      // console.log("name", name)
      userDocument.update({
        first_name: this.value,
        last_name: this.secondValue
      })

      var postingsCollection = firebase.firestore.collection('postings');
      var chatsCollection = firebase.firestore.collection('chats');
      userDocument.get().then(doc => {
        let postIds = doc.data().posts;
        let chatIds = doc.data().chats;
        // console.log("postids", postIds)
        for(var i = 0; i < postIds.length; i++) {
          postingsCollection.doc(postIds[i]).update({
            user: this.value + " " + this.secondValue
          })
        }

        for(var j = 0; j < chatIds.length; j++) {
          chatsCollection.doc(chatIds[j]).get().then((doc) => {
            let users = doc.data().users;
            for(var k = 0; k < users.length; k++) {
              if(users[k].uid === this.userId) {
                users[k].displayName = this.value + " " + this.secondValue;
              }
            }
            chatsCollection.doc(chatIds[j]).update({
              users: users
            })
          })
        }
        
      });

      this.params.closeCallback("update")
    }

    else if(this.label == "Email") {
      firebase.updateEmail(result).then(() => {
        userDocument.update({
          email: result,
        }).then(() => {
          this.params.closeCallback("update")
        })
      }).catch(
          (error) => {
            this.showError();
          }
        );
    }
    else if(this.label == "Phone Number") {
      userDocument.update({
        phone_number: result,
      }).then((res) => {
        this.params.closeCallback("update")
      }).catch((err) => {
        this.showError();
      })
    }
    else if(this.label == "Enter new password") {
      if(this.value != this.secondValue) {
        this.errorText = "Passwords do not match";
        this.showError();
      }
      else {
        firebase.updatePassword(this.value).then((res) => {
          this.params.closeCallback("update")
        }).catch((err) => {
          this.errorText = "Password must be at lest 6 characters long";
          this.showError();
        })
      }
    }
  }

  close(res) {
    this.params.closeCallback(res);
  }

  showError() {
    let errorMessage = <Label> this.em.nativeElement;
    errorMessage.style.visibility = "visible";
  }
}
