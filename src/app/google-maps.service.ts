import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  static_maps_uri = 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg&size=340x220&scale=2&maptype=roadmap\&markers=size:mid%7Ccolor:red%7C';
  static_maps_uri_large = 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg&size=512x512&scale=2&maptype=roadmap\&markers=size:mid%7Ccolor:red%7C'
  constructor(private httpClient: HttpClient) { }

  getStaticMap(startadr, endadr) {
  	var formatted_startadr = startadr.split(' ').join('+')
  	var formatted_endadr = endadr.split(' ').join('+')
  	return this.static_maps_uri + formatted_startadr + "%7C" + formatted_endadr;
  }

  getStaticMapLarge(startadr, endadr) {
  	var formatted_startadr = startadr.split(' ').join('+')
  	var formatted_endadr = endadr.split(' ').join('+')
  	return this.static_maps_uri_large + formatted_startadr + "%7C" + formatted_endadr;
  }
}
