import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { Person } from "../person";
import { LogincheckService } from '../logincheck.service.tns';
import * as firebase from 'nativescript-plugin-firebase';
import { logout as fbLogout } from 'nativescript-facebook';
import * as imagepicker from "nativescript-imagepicker";
import * as fs from "tns-core-modules/file-system";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import * as bghttp from 'nativescript-background-http';
import { ImageCropper } from 'nativescript-imagecropper';
import * as imageSource from "tns-core-modules/image-source";
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

@Component({
	moduleId: module.id,
    selector: "app-settings",
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})



export class SettingsComponent implements OnInit {
	private _person: Person;

  constructor(private router: RouterExtensions, private page: Page, private logincheckService: LogincheckService) { }

  @ViewChild("activityIndicator") ai: ElementRef;
  @ViewChild("settingsContainer") sc: ElementRef;
  ngOnInit() {
	this.imageCropper = new ImageCropper();
	this.userId = this.logincheckService.getUser();
	firebase.getCurrentUser().then((user) => {
		console.log(user)
		console.log("useremail", user.email)
		if(user.photoURL != null) {
			this.profile = user.photoURL;
			if(user.photoURL.substring(0, 27) == 'https://graph.facebook.com/')
				this.profile += '?height=300';
		}
	})
	// this._person = new Person("Phillim", "Das", "jon@company.com", "12224443333", "232 Rodman Road");
}

	//   get person(): Person {
    //     return this._person;
    // }
  	profile = "~/img/sample_profile.png";
  	userId;
  	imageCropper: ImageCropper;
  	imageSource: imageSource.ImageSource;


	toPayments(){
		this.router.navigate(['payments']);
	}

	logOut() {
		firebase.logout();
		fbLogout(() => {

		});
		this.logincheckService.clearInfo();
		this.router.navigate(['welcome'], {clearHistory: true});
	}
	uploadPfp() {
		var imageCropper = new ImageCropper();
		let context = imagepicker.create({
		    mode: "single" // use "multiple" for multiple selection
		});
		context
	    .authorize()
	    .then(function() {
	        return context.present();
	    })
	    .then((selection: any) => {
	    	selection.forEach((selected) => {
            	let imgSource = new imageSource.ImageSource();
                imgSource.fromAsset(selected).then((source) => {
                	this.imageCropper
                    .show(source, { width: 300, height: 300 })
                    .then(args => {
                        // console.dir(args);
                        if (args.image !== null) {
                            // this.croppedImage.imageSource =
                            //     args.image;
                            let folder = fs.knownFolders.temp();
				            var path = fs.path.join(folder.path, "profile_picture.png");
				            var saved = args.image.saveToFile(path,'png');

				            var activityIndicator = <ActivityIndicator> this.ai.nativeElement;
      						activityIndicator.busy = true;
      						var settingsContainer = <StackLayout> this.sc.nativeElement;
      						settingsContainer.style.visibility = 'collapse';

				            firebase.storage.uploadFile({
							    // the full path of the file in your Firebase storage (folders will be created)
							    remoteFullPath: this.userId + '/uploads/profile_picture.jpg',
							    // option 1: a file-system module File object
							    localFile: fs.File.fromPath(path),
							    // option 2: a full file path (ignored if 'localFile' is set)
							    localFullPath: path,
							    // get notified of file upload progress
							    onProgress: (status) => {
							      console.log("Uploaded fraction: " + status.fractionCompleted);
							      console.log("Percentage complete: " + status.percentageCompleted);
							    }
							  }).then(
							      (uploadedFile) => {
							        console.log("File uploaded: " + JSON.stringify(uploadedFile));
							          		firebase.storage.getDownloadUrl({
											    // the full path of an existing file in your Firebase storage
											    remoteFullPath: this.userId + '/uploads/profile_picture.jpg'
											  }).then(
											      (url) => {
											        firebase.updateProfile({
													    photoURL: url
													  }).then(
													      () => {
													        // called when update profile was successful
													        activityIndicator.busy = false;
													        settingsContainer.style.visibility = 'visible';
													        this.profile = url;
													      },
													      (errorMessage) => {
													        console.log(errorMessage);
													      }
													  );
													  const userDocument = firebase.firestore.collection('users').doc(this.userId);
													  userDocument.update({
													  	profile_source: url
													  })
											      },
											      function (error) {
											        console.log("Error: " + error);
											      }
											  );
							      },
							      (error) => {
							        console.log("File upload error: " + error);
							      }
								).catch((err) => {
							        // process error
							        console.log(err);
							    });
	                        }
	                    })
                    .catch((e) => {
                        console.dir(e);
                    });
                }).catch((err) => {
                	console.log(err);
                })
            }).catch((err) => {
            	console.log(err)
            });
	    }).catch((err) => {
	    	console.log(err)
	    })
	}
}
