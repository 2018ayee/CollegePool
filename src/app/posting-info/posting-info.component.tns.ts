import { Component, OnInit, ViewContainerRef, ViewRef, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { GoogleMapsService } from '../google-maps.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { TransferService } from '../datatransfer.service';
import { Page } from "tns-core-modules/ui/page";
import { ActionItem } from 'tns-core-modules/ui/action-bar';
import {registerElement} from "nativescript-angular/element-registry";
import {isAndroid, isIOS} from "tns-core-modules/platform";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import * as dialogs from "tns-core-modules/ui/dialogs";

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

  constructor(private mapService: GoogleMapsService, private router: RouterExtensions, private transferService: TransferService, private page: Page) { }

  ngOnInit() {
  	if(isIOS) {
  		this.bounds = GMSCoordinateBounds.alloc().init();
  	}
  	this.mapData = this.transferService.getData();
  	this.startLat = this.mapData.postInfo.data.startLat;
  	this.endLat = this.mapData.postInfo.data.endLat;
  	this.startLng = this.mapData.postInfo.data.startLng;
  	this.endLng = this.mapData.postInfo.data.endLng;
    this.info = this.mapData.postItem.info;
    this.profileSource = this.mapData.postItem.profileSource;
    this.username = this.mapData.postItem.username;

    let deleteButton = <ActionItem> this.deleteItem.nativeElement;
    firebase.getCurrentUser().then((user) => {
      this.userId = user.uid;
      if(this.userId !== this.mapData.postInfo.data.uid) {
        console.log(this.userId)
        console.log(this.mapData.postInfo.data.uid)
        deleteButton.visibility = 'collapse';
      }
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

  onReport() {

  }
}
