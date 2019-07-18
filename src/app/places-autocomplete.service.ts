import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesAutocompleteService {

  places_uri = 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg&query='
  autocomplete_uri = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg&sessiontoken=1234567890&input='
  constructor(private httpClient: HttpClient) { }

  getAutocompleteResults(place) {
  	return this.httpClient.get(`${this.autocomplete_uri}` + place);
  }

  getPlaceResults(place) {
  	return this.httpClient.get(`${this.places_uri}` + place);
  }

  getAutocompleteResultsGeocode(place) {
  	return this.httpClient.get(`${this.autocomplete_uri}` + place + `&types=geocode`);
  }
  getAutocompleteResultsEstablishment(place) {
  	return this.httpClient.get(`${this.autocomplete_uri}` + place + `&types=establishment`);
  }
  getAutocompleteResultsAddress(place) {
  	return this.httpClient.get(`${this.autocomplete_uri}` + place + `&types=address`);
  }
  getAutocompleteResultsCity(place) {
  	return this.httpClient.get(`${this.autocomplete_uri}` + place + `&types=(cities)`);
  }
}
