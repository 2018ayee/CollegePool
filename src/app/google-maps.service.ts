import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  API_KEY = 'AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg';
  static_maps_uri = 'https://maps.googleapis.com/maps/api/staticmap?key=' + this.API_KEY + '&size=340x220&scale=2&maptype=roadmap\&markers=size:small%7Ccolor:red%7C'
  static_maps_uri_large = 'https://maps.googleapis.com/maps/api/staticmap?key=' + this.API_KEY + '&size=512x512&scale=2&maptype=roadmap\&markers=size:small%7Ccolor:red%7C'
  
  geocode_uri = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.API_KEY + '&address='
  constructor(private httpClient: HttpClient) { }

  getStaticMap(startadr, endadr) {
  	var formatted_startadr = startadr.split(' ').join('+')
  	var formatted_endadr = endadr.split(' ').join('+')
  	return this.static_maps_uri + formatted_startadr + "&markers=size:med%7C" + formatted_endadr;
  }

  getStaticMapLarge(startadr, endadr) {
  	var formatted_startadr = startadr.split(' ').join('+')
  	var formatted_endadr = endadr.split(' ').join('+')
  	return this.static_maps_uri_large + formatted_startadr + "&markers=size:med%7C" + formatted_endadr;
  }

  getGeocodeResults(address) {
  	var formatted_address = address.split(' ').join('+')
  	return this.httpClient.get(`${this.geocode_uri}` + formatted_address);
  }
}
