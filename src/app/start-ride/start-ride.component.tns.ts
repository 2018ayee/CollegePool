import { Component, OnInit } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { GoogleMapsService } from '../google-maps.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { TransferService } from '../datatransfer.service';
import {isAndroid, isIOS} from "tns-core-modules/platform";

@Component({
  selector: 'app-start-ride',
  templateUrl: './start-ride.component.html',
  styleUrls: ['./start-ride.component.css']
})

declare var com:any;
declare var GMSCoordinateBounds: any;
declare var GMSCameraUpdate: any;

export class StartRideComponent implements OnInit {

  latitude =  37;
  longitude = -122;
  startLat = 38.025952;
  endLat = 38.9071923;
  startLng = -78.5191194;
  endLng = -77.0368707;
  mapView: MapView;
  bounds;
  mapData;

  constructor(private mapService: GoogleMapsService, private router: RouterExtensions, private transferService: TransferService) { }

  ngOnInit() {
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

}
