import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
// import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { LogincheckService } from '../logincheck.service.tns';
import * as firebase from 'nativescript-plugin-firebase';
import { messaging } from "nativescript-plugin-firebase/messaging";
import { logout as fbLogout } from 'nativescript-facebook';
import * as imagepicker from "nativescript-imagepicker";
import * as fs from "tns-core-modules/file-system";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import * as bghttp from 'nativescript-background-http';
import { ImageCropper } from 'nativescript-imagecropper';
import * as imageSource from "tns-core-modules/image-source";
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { TransferService } from '../datatransfer.service';
import { post } from 'selenium-webdriver/http';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { SettingsformComponent } from '../settingsform/settingsform.component';
import { ReauthComponent } from '../reauth/reauth.component';
import { SetupItemViewArgs } from "nativescript-angular/directives";


class Label {
    constructor(public label: String, public value: string, public firstName: string, public lastName: string) { }
}

@Component({
	moduleId: module.id,
    selector: "app-settings",
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  constructor(private router: RouterExtensions, private page: Page, private logincheckService: LogincheckService, private transferService: TransferService,
  	private vcRef: ViewContainerRef, private modal: ModalDialogService) { }

  @ViewChild("activityIndicator") ai: ElementRef;
  @ViewChild("settingsContainer") sc: ElementRef;

  profile = "~/img/sample_profile.png";
  userId;
  fields;
  imageCropper: ImageCropper;
  imageSource: imageSource.ImageSource;
  buttons;
  paymentList;
  logoutList;
  user;
  token;

  ngOnInit() {
	this.imageCropper = new ImageCropper();
	this.loadViews();

		let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
	    activityIndicator.style.visibility = 'collapse'
	}

	loadViews(){
		this.paymentList = new ObservableArray<String>();
		this.paymentList.push('Payment methods');
		this.logoutList = new ObservableArray<String>();
		this.logoutList.push('Log out');
		this.buttons = new ObservableArray<String>();
		this.buttons.push('Payment methods');
		this.buttons.push('Log out');

		this.userId = this.logincheckService.getUser();
		const userDocument = firebase.firestore.collection('users').doc(this.userId);
		this.fields = new ObservableArray<Label>();
		this.updateListView();
		firebase.getCurrentUser().then((user) => {
			this.user = user;
			if(user.photoURL != null) {
				this.profile = user.photoURL;
				if(user.photoURL.substring(0, 27) == 'https://graph.facebook.com/')
					this.profile += '?height=300';
			}
		})
	}

	setupItemView(args: SetupItemViewArgs) {
		args.view.context.payments = (args.index == 0);
		args.view.context.logout = (args.index == 1);
		args.view.context.even = (args.index % 2 === 0);
		args.view.context.odd = (args.index % 2 === 1);
	}

	updateListView(){
		this.fields.splice(0);
		const userDocument = firebase.firestore.collection('users').doc(this.userId);
		userDocument.get().then(doc => {
			let vals = doc.data()
			// console.log("fields", vals)
			this.fields.push(new Label("Name", vals.first_name + " " + vals.last_name, vals.first_name, vals.last_name));
			this.fields.push(new Label("Email", vals.email, vals.first_name, vals.last_name));
			if(vals.phone_number == "" || vals.phone_number == null){
				this.fields.push(new Label("Phone Number", "None", vals.first_name, vals.last_name));
			}
			else{
				this.fields.push(new Label("Phone Number", vals.phone_number, vals.first_name, vals.last_name));
			}
			if(this.user.providers[1].id == 'password') {
				this.fields.push(new Label("Password", "********", vals.first_name, vals.last_name))
			}
		})
	}
	toPayments(){
		this.router.navigate(['payments']);
	}

	showModal(args) {
		let label = this.fields._array[args.index]
		this.transferService.setData(label);
		let options = {
	        context: {},
	        fullscreen: true,
	        viewContainerRef: this.vcRef
	        // animated: true,
	        // transition: { name: "slideTop" }
	    };
	    if(args.index == 3) {
	    	this.modal.showModal(ReauthComponent, options).then(res => {
		    	if(res == 'update') {
		    		this.updateListView();
		    	}
		    });
	    }
	    else {
		    this.modal.showModal(SettingsformComponent, options).then(res => {
		    	if(res == 'update') {
		    		this.updateListView();
		    	}
		    });
		}
	}

	route(args) {
		if(args.index == 0) {
			this.toPayments();
		}
		else if(args.index == 1) {
			this.logOut();
		}
	}

	onItemTap(args) {
		let label = this.fields._array[args.index]
		this.router.navigate(['settingsform']);
		this.transferService.setData(label);
	  }

	async logOut() {
		var activityIndicator = <ActivityIndicator> this.ai.nativeElement;
		activityIndicator.busy = true;
		activityIndicator.style.visibility = 'visible';
		var settingsContainer = <StackLayout> this.sc.nativeElement;
		settingsContainer.style.visibility = 'collapse';

		const tokenPromise = await messaging.getCurrentPushToken().then(token => {
			this.token = token
			return token;
		});
		let userDoc = firebase.firestore.collection('users').doc(this.userId);
		
		userDoc.get().then(async (doc) => {
			let index = doc.data().tokens.indexOf(this.token);
			if(index > -1) {
				const newTokens = doc.data().tokens;
				newTokens.splice(index, 1);
				console.log(newTokens)
				userDoc.update({tokens: newTokens});
			}
			const chatPromise = await this.updateChatTokens(doc.data().chats);
			firebase.logout();
			fbLogout(() => {

			});
			this.logincheckService.clearInfo();
			activityIndicator.busy = false;
			activityIndicator.style.visibility = 'collapse';
			settingsContainer.style.visibility = 'visible';
			this.router.navigate(['welcome'], {clearHistory: true});
		})

	}

	async updateChatTokens(chats) {
		let chatCollection = firebase.firestore.collection('chats');
		for(var i = 0; i < chats.length; i++) {
			const chatPromise = await chatCollection.doc(chats[i]).get().then(async (doc) => {
				let index = doc.data().tokens.indexOf(this.token);
				if(index > -1) {
					const newTokens = doc.data().tokens;
					newTokens.splice(index, 1);
					const updatePromise = await chatCollection.doc(chats[i]).update({tokens: newTokens});
				}
			})
		}
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
							activityIndicator.style.visibility = 'visible';
      						var settingsContainer = <StackLayout> this.sc.nativeElement;
      						settingsContainer.style.visibility = 'collapse';

				            firebase.storage.uploadFile({
							    // the full path of the file in your Firebase storage (folders will be created)
							    remoteFullPath: 'users/' + this.userId + '/uploads/profile_picture.jpg',
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
											    remoteFullPath: 'users/' + this.userId + '/uploads/profile_picture.jpg'
											  }).then(
											      (url) => {
											        firebase.updateProfile({
													    photoURL: url
													  }).then(
													      () => {
													        // called when update profile was successful
													        activityIndicator.busy = false;
															settingsContainer.style.visibility = 'visible';
															activityIndicator.style.visibility = 'collapse';
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
            })
	    }).catch((err) => {
	    	console.log(err)
	    })
	}
}
