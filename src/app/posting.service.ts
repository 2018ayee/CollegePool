import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostingService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getPostings() {
  	return this.http.get(`${this.uri}/postings`);
  }

  getPostingbyId(id) {
  	return this.http.get(`${this.uri}/postings/${id}`);
  }

  addPosting(user, startadr, endadr, date, cost, capacity, comments) {
    cost = require("../../backend/data/pricing")({start: startadr, end: endadr});
    console.log("reached!");
    console.log(cost);
  	const posting = {
  		user : user,
  		startadr : startadr,
  		endadr : endadr,
  		date : date,
  		cost : cost,
  		capacity : capacity,
  		comments : comments
  	};
  	return this.http.post(`${this.uri}/postings/add/`, posting);
  }

  updatePosting(id, user, startadr, endadr, date, cost, capacity, comments) {
  	const posting = {
  		user : user,
  		startadr : startadr,
  		endadr : endadr,
  		date : date,
  		cost : cost,
  		capacity : capacity,
  		comments : comments
  	};
  	return this.http.post(`${this.uri}/postings/update/${id}`, posting);
  }

  deletePosting(id) {
  	return this.http.get(`${this.uri}/postings/delete/${id}`);
  }

}
