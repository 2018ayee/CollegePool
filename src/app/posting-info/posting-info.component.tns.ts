import { Component, OnInit, ViewContainerRef, ViewRef, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { GoogleMapsService } from '../google-maps.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { TransferService } from '../datatransfer.service';
import { Page } from "tns-core-modules/ui/page";
import {registerElement} from "nativescript-angular/element-registry";
import {isAndroid, isIOS} from "tns-core-modules/platform";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

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

  // @ViewChild("mapView") mapView: ElementRef;
  mapView: MapView;
  latitude =  37;
  longitude = -122;

  startLat;
  endLat;
  startLng;
  endLng;
  bounds;
  mapData;

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
  	this.router.backToPreviousPage();
  }
}
