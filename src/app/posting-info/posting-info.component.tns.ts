import { Component, OnInit, ViewContainerRef, ViewRef, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { GoogleMapsService } from '../google-maps.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { TransferService } from '../datatransfer.service';
import { Page } from "tns-core-modules/ui/page";
import { ActionItem } from 'tns-core-modules/ui/action-bar';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import {registerElement} from "nativescript-angular/element-registry";
import {isAndroid, isIOS} from "tns-core-modules/platform";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { LogincheckService } from '../logincheck.service.tns';
import { ChatMessage } from '../models/chat-message.model';

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
declare var com:any;
declare var GMSCoordinateBounds: any;
declare var GMSCameraUpdate: any;

@Component({
  selector: 'app-posting-info',
  templateUrl: './posting-info.component.html',
  styleUrls: ['./posting-info.component.css']
})
export class PostingInfoComponent implements OnInit {

  @ViewChild("deleteItem") deleteItem: ElementRef;
  @ViewChild("buttonContainer") buttonContainer: ElementRef;
  @ViewChild("infoContainer") infoContainer: ElementRef;
  @ViewChild("activityIndicator") ai: ElementRef;
  @ViewChild("layout") layout: ElementRef;
  mapView: MapView;
  latitude =  37;
  longitude = -122;

  startLat;
  endLat;
  startLng;
  endLng;
  bounds;
  mapData;
  userId;
  profileSource;
  info;
  username;
  buttonText;
  currentUserName;

  chatUsers = [];

  constructor(private mapService: GoogleMapsService, private router: RouterExtensions, private transferService: TransferService, private page: Page,
    private logincheckService: LogincheckService) { }

  ngOnInit() {
  	this.loadViews();
  }

  loadViews() {
    let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
    let infoContainer = <StackLayout> this.infoContainer.nativeElement;
    let deleteButton = <ActionItem> this.deleteItem.nativeElement;
    let chatButton = <StackLayout> this.buttonContainer.nativeElement;

    infoContainer.visibility = 'collapse';
    chatButton.visibility = 'collapse';
    this.userId = this.logincheckService.getUser();
    this.mapData = this.transferService.getData();
    firebase.firestore.collection('users').doc(this.userId).get().then((doc) => {
      if(doc.data().chats.includes(this.mapData.postInfo.id)) {
        this.buttonText = 'View chat';
        activityIndicator.busy = false;
        infoContainer.visibility = 'visible';
        chatButton.visibility = 'visible';
      }
      else {
        firebase.firestore.collection('chats').doc(this.mapData.postInfo.data.uid).get().then((doc) => {
          if(!doc.exists && this.userId === this.mapData.postInfo.data.uid)
            chatButton.visibility = 'collapse';
          else
            chatButton.visibility = 'visible';
          activityIndicator.busy = false;
          infoContainer.visibility = 'visible';
        })
        this.buttonText = 'Join chat';
      }
    })

    if(isIOS) {
      this.bounds = GMSCoordinateBounds.alloc().init();
    }
    
    this.startLat = this.mapData.postInfo.data.startLat;
    this.endLat = this.mapData.postInfo.data.endLat;
    this.startLng = this.mapData.postInfo.data.startLng;
    this.endLng = this.mapData.postInfo.data.endLng;
    this.info = this.mapData.postItem.info;
    this.profileSource = this.mapData.postItem.profileSource;
    this.username = this.mapData.postItem.username;

    
    if(this.userId !== this.mapData.postInfo.data.uid) {
      deleteButton.visibility = 'collapse';
    }

    firebase.getCurrentUser().then((user) => {
      this.currentUserName = user.displayName;
    })
  }

  onMapReady(event) {
  	this.mapView = event.object;

	// this.latitude = (this.startLat + this.endLat) / 2.0;
	// this.longitude = (this.startLng + this.endLng) / 2.0;
  	this.addMarker(this.startLat, this.startLng, this.mapData.postInfo.data.startAddress, this.mapData.postInfo.data.startFormatted, 0);
	  this.addMarker(this.endLat, this.endLng, this.mapData.postInfo.data.endAddress, this.mapData.postInfo.data.endFormatted, 1);

  	if(isAndroid) {
    		var builder = new com.google.android.gms.maps.model.LatLngBounds.Builder();
  		this.mapView.findMarker(function (marker) { builder.include(marker.android.getPosition()); return false});
  		var bounds = builder.build();
  		var cu = com.google.android.gms.maps.CameraUpdateFactory.newLatLngBounds(bounds, 150);
  		this.mapView.gMap.animateCamera(cu);
  	}
  	else if(isIOS) {
  		var update = GMSCameraUpdate.fitBoundsWithPadding(bounds, 150); this.mapView.gMap.moveCamera(update);
  	}

  }

  addMarker(lat, lng, title, snippet, index) {
  	var marker = new Marker();
    marker.position = Position.positionFromLatLng(lat, lng);
    marker.title = title;
    marker.snippet = snippet;
    marker.userData = {index: index};
    this.mapView.addMarker(marker);
    if(isIOS)
    	this.bounds = this.bounds.includingCoordinate(marker.position);
  }

  onNavBtnTap() {
  	this.router.navigate(['navigation'], {clearHistory: true});
  }

  deleteFiles() {
    firebase.storage.deleteFile({
      // the full path of an existing file in your Firebase storage
      remoteFullPath: 'postings/' + this.mapData.postInfo.id + '/maps/large_map.png'
    }).then(
        () => {
          console.log("File deleted.");
        },
        (error) => {
          console.log("File deletion Error: " + error);
        }
    );
    firebase.storage.deleteFile({
      // the full path of an existing file in your Firebase storage
      remoteFullPath: 'postings/' + this.mapData.postInfo.id + '/maps/small_map.png'
    }).then(
        () => {
          console.log("File deleted.");
        },
        (error) => {
          console.log("File deletion Error: " + error);
        }
    );
  }

  promptDelete() {
    dialogs.confirm({
        title: "Confirm delete",
        message: "Are you sure you want to delete this post?",
        okButtonText: "Confirm",
        cancelButtonText: "Cancel",
    }).then(result => {
        // result argument is boolean
        if(result)
          this.onDelete();
    });
  }

  onDelete() {
    var postingDocument = firebase.firestore.collection('postings').doc(this.mapData.postInfo.id);
    var userDocument = firebase.firestore.collection('users').doc(this.mapData.postInfo.data.uid);
    var chatDocument = firebase.firestore.collection('chats').doc(this.mapData.postInfo.id);
    postingDocument.delete().then((res) => {
      userDocument.get().then((doc) => {
        let userPosts = doc.data().posts;
        const index = userPosts.indexOf(this.mapData.postInfo.id, 0);
        if (index > -1) {
           userPosts.splice(index, 1);
        }

        userDocument.update({
          posts: userPosts
        }).then((res) => {
          // chatDocument.get().then((doc) => {
          //   let data = doc.data();
          //   if(data) {
          //     for(var i = 0; i < data.users.length; i++) {
          //       // this.chatUsers.push(data.users[i].uid);
          //       firebase.firestore.collection('users').doc(data.users[i].uid).get().then((doc) => {
          //         const id = data.users[i].uid;
          //         let uidChats = doc.data().chats;
          //         let index = uidChats.indexOf(this.mapData.postInfo.id);
          //         if(index > -1) {
          //           uidChats.splice(index, 1);
          //         }
          //         firebase.firestore.collection('users').doc(id).update({
          //           chats: uidChats
          //         })
          //       })
          //     }
          //     chatDocument.delete().then((res) => {
          //       this.deleteFiles();
          //       this.onNavBtnTap();
          //     })
          //   }
          //   else {
          //     this.deleteFiles();
          //     this.onNavBtnTap();
          //   }
          // })
          this.deleteFiles();
          this.onNavBtnTap();
        }).catch((err) => {
          console.log(err);
        })
      }).catch((err) => {
        console.log(err);
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  removeChat(index) {
    console.log(index);
    firebase.firestore.collection('users').doc(this.chatUsers[index]).get().then((doc) => {
      let userChats = doc.data().chats;
      const index = userChats.indexOf(this.mapData.postInfo.id);
      if (index > -1) {
         userChats.splice(index, 1);
      }
      firebase.firestore.collection('users').doc(this.chatUsers[index]).update({
        chats: userChats
      }).then((res) => {
        if(index === this.chatUsers[index].length - 1) {
          this.deleteFiles();
          this.onNavBtnTap();
        }
      })
    })
  }

  onReport() {

  }

  onConnectTap() {
    let gridContainer = <GridLayout> this.layout.nativeElement;
    let activityIndicator = <ActivityIndicator> this.ai.nativeElement;

    gridContainer.visibility = 'collapse';
    activityIndicator.busy = true;

    if(this.buttonText === 'View chat') {
      this.transferService.setData(this.mapData.postInfo.id);
      gridContainer.visibility = 'visible';
      activityIndicator.busy = false;
      this.router.navigate(['chat']);
    }
    else if(this.buttonText === 'Join chat') {
      const chatDocument = firebase.firestore.collection('chats').doc(this.mapData.postInfo.id);
      const userDocument = firebase.firestore.collection('users').doc(this.userId);
      chatDocument.get().then((doc) => {
        if(doc.exists) {
          //chat exists, so add user to the chat room and navigate there
          var users: [{uid: string, displayName: string}] = doc.data().users;
          users.push({uid: this.userId, displayName: this.currentUserName})
          chatDocument.update({
            users: users
          }).then((res) => {
            userDocument.get().then((doc) => {
              var userChats = doc.data().chats;
              userChats.push(this.mapData.postInfo.id);
              userDocument.update({
                chats: userChats
              }).then((res) => {
                //finally after everything else has updated, send user to chat component
                this.transferService.setData(this.mapData.postInfo.id);
                this.buttonText = 'View chat';
                gridContainer.visibility = 'visible';
                activityIndicator.busy = false;
                this.router.navigate(['chat']);
              })
            })
          })
        }
        else {
          //chat does not exist, so create and add both post user and current user
          firebase.firestore.collection('chats').doc(this.mapData.postInfo.id).set({
            users: [{uid: this.mapData.postInfo.data.uid, displayName: this.mapData.postItem.username}, {uid: this.userId, displayName: this.currentUserName}],
            chats: [],
            expired: false,
          }).then((res) => {
            firebase.firestore.collection('users').doc(this.mapData.postInfo.data.uid).get().then((doc) => {
              var userChats = doc.data().chats;
              userChats.push(this.mapData.postInfo.id);
              firebase.firestore.collection('users').doc(this.mapData.postInfo.data.uid).update({
                chats: userChats
              }).then((res) => {
                userDocument.get().then((doc) => {
                  var userChats = doc.data().chats;
                  userChats.push(this.mapData.postInfo.id);
                  userDocument.update({
                    chats: userChats
                  }).then((res) => {
                    //finally after everything else has updated, send user to chat component
                    this.transferService.setData(this.mapData.postInfo.id);
                    this.buttonText = 'View chat';
                    gridContainer.visibility = 'visible';
                    activityIndicator.busy = false;
                    this.router.navigate(['chat']);
                  })
                })
              })
            })
          })
        }
      })
    }
  }
}
