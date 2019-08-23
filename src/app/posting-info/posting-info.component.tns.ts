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

  @ViewChild("deleteItem", { static: true }) deleteItem: ElementRef;
  @ViewChild("buttonContainer", { static: true }) buttonContainer: ElementRef;
  @ViewChild("infoContainer", { static: true }) infoContainer: ElementRef;
  @ViewChild("activityIndicator", { static: true }) ai: ElementRef;
  @ViewChild("layout", { static: true }) layout: ElementRef;
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
  status;
  capacity;
  date;
  price;
  hasText;
  comment;

  chatUsers = [];
  currentUser;

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
    // console.log("Mapdata", this.mapData.postItem)
    this.status = this.mapData.postItem.status;
    this.capacity = this.mapData.postItem.capacity;
    this.date = this.mapData.postItem.date;
    this.price = this.mapData.postItem.price;
    this.hasText = this.mapData.postItem.hasText;
    this.comment = this.mapData.postItem.comment;
    firebase.firestore.collection('users').doc(this.userId).get().then((doc) => {
      this.currentUser = doc.data();
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

  showText(args){
    var layout = args.object;
    let textLabel1 = layout.getViewById('text-label-1');
    let textLabel2 = layout.getViewById('text-label-2');
    let commentLabel = layout.getViewById('post-info');
    if(textLabel1.visibility==='visible'){
      textLabel1.set("visibility", "collapse");
      commentLabel.set("visibility", "visible");
      textLabel2.set("visibility", "visible");
    }
    else{
      textLabel1.set("visibility", "visible");
      commentLabel.set("visibility", "collapse");
      textLabel2.set("visibility", "collapse");
    }
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
  if(this.router.canGoBack)
    this.router.back();
  else
    this.router.navigate(['navigation'], {clearHistory: true})
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
        }).then(async (res) => {
          await chatDocument.get().then(async (doc) => {
            let users = doc.data().users;
            for(var i = 0; i < users.length; i++) {
              let chatUsers = users;
              await this.removeChat(chatUsers, i);
            }
            chatDocument.delete();
            this.deleteFiles();
            this.onNavBtnTap();
          })
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

  async removeChat(users, index) {
    let id = users[index].uid;
    await firebase.firestore.collection('users').doc(users[index].uid).get().then(async (doc) => {
      let userChats = doc.data().chats;
      const index = userChats.indexOf(this.mapData.postInfo.id);
      if (index > -1) {
         userChats.splice(index, 1);
      }
      await firebase.firestore.collection('users').doc(id).update({
        chats: userChats
      }).then((res) => {
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
          let tokens: [string] = doc.data().tokens;
          var users: [{uid: string, displayName: string}] = doc.data().users;
          var userTokens: [string] = this.currentUser.tokens;
          var newTokens = tokens.concat(userTokens);
          users.push({uid: this.userId, displayName: this.currentUserName})
          chatDocument.update({
            users: users,
            tokens: Array.from(new Set(newTokens))
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
              const userTokens = this.currentUser.tokens;
              const otherUserTokens = doc.data().tokens;
              const newTokens = userTokens.concat(otherUserTokens);
              firebase.firestore.collection('chats').doc(this.mapData.postInfo.id).update({
                tokens: Array.from(new Set(newTokens))
              })
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
