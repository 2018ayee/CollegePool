import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class pricing {

  // API_KEY = 'AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg';
  // static_maps_uri = 'https://maps.googleapis.com/maps/api/staticmap?key=' + this.API_KEY + '&size=340x220&scale=2&maptype=roadmap\&markers=size:small%7Ccolor:red%7C'
  // static_maps_uri_large = 'https://maps.googleapis.com/maps/api/staticmap?key=' + this.API_KEY + '&size=512x512&scale=2&maptype=roadmap\&markers=size:small%7Ccolor:red%7C'
  
  // geocode_uri = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.API_KEY + '&address='
  // distance_uri = 'https://maps.googleapis.com/maps/api/distancematrix/json?key='+this.API_KEY+'&units=imperial'//&origins=Washington,DC&destinations=New+York+City,NY' 
  driver_uri = 'https://us-central1-collegepool-1552749118617.cloudfunctions.net/getDriverPay?time=';
  rider_uri = 'https://us-central1-collegepool-1552749118617.cloudfunctions.net/getRiderPrice?time=';
  no_update_rider_uri = 'https://us-central1-collegepool-1552749118617.cloudfunctions.net/getRiderPriceNoDbUpdate?';
  constructor(private httpClient: HttpClient) { };

 
  feedCloud(time, utime, id, d_or_r){ //keep in mind that the DRIVER should display the rider price
    if(d_or_r>0)
      return this.httpClient.get(`${this.rider_uri}`+time+"&id="+id+"&utime="+utime, {responseType: 'text'}) 
    else
      return this.httpClient.get(`${this.driver_uri}`+time+"&id="+id, {responseType: 'text'});//.pipe(map((response: any)=>response.json()));
    //return this.distance_uri;
  }
  noUpdate(distance, riders, capacity, current_time, post_time, departure_time){
    return this.httpClient.get(`${this.no_update_rider_uri}`+'distance='+distance+'&riders='+riders+'&capacity='+capacity+'&time='+current_time+'&ptime='+post_time+'&utime='+departure_time, {responseType: 'text'})
  }
}
