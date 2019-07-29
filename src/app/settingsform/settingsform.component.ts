import { Component, OnInit } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { Page } from "tns-core-modules/ui/page";
// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import * as firebase from 'nativescript-plugin-firebase';
import { LogincheckService } from '../logincheck.service.tns';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  selector: 'app-settingsform',
  templateUrl: './settingsform.component.html',
  styleUrls: ['./settingsform.component.css']
})
export class SettingsformComponent implements OnInit {

  constructor(private transferService: TransferService, private logincheckService: LogincheckService, 
    private page: Page, private router: RouterExtensions) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.field = this.transferService.getData();
    this.label = this.field.label;
    this.value = this.field.value;
    if(this.label=="Name"){
      // this.keyboard = "";
      this.maxlength = 30;
    }
    else if(this.label=="Email"){
      this.keyboard = "email";
      this.maxlength = 30;
    }
    else if(this.label=="Phone Number"){
      this.keyboard = "phone";
      this.maxlength = 10;
    }
  }
  userId;
  field;
  label;
  value;
  keyboard;
  maxlength;

  submitData(result) {
    this.userId = this.logincheckService.getUser();
    const userDocument = firebase.firestore.collection('users').doc(this.userId);
    if (this.label == "Name") {
      
      firebase.updateProfile({
        displayName: result
      }).then(() =>
        console.log("Succ"), () => console.log("Fail"));

      let name = result.split(" ")
      // console.log("name", name)
      userDocument.update({
        first_name: name[0],
        last_name: name[1]
      })

      var postingsCollection = firebase.firestore.collection('postings');
      userDocument.get().then(doc => {
        let postIds = doc.data().posts;
        // console.log("postids", postIds)
        for(var i = 0; i < postIds.length; i++) {
          postingsCollection.doc(postIds[i]).update({
            user: result
          })
        }
      });
    }

    else if(this.label == "Email"){
      userDocument.update({
        email: result,
      })
      firebase.updateEmail(result).then(() =>
      console.log("Email Succ")).catch(
        (error) => console.log("Email Failed. Error: ", error)
      );
    }
    else if(this.label =="Phone Number"){
      userDocument.update({
        phone_number: result,
      })
    }

    this.router.navigateByUrl('navigation');
    // this.transferService.setData(result);
    // this.router.back();

  }

  close(res) {
    // this.params.closeCallback(res);
    this.router.back();
    // this.router.navigateByUrl('/settings');
    // this.router.navigate(['navigation'], { clearHistory: true });
    // this.router.navigate(['navigation',]);
  }

}
