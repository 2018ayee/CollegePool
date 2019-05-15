import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  addPaymentUser(id, username, name, email) {
  	console.log('adding to braintree');
  	const user = {
  		id: id,
  		username: username,
  		name: name,
  		email: email
  	};
  	return this.http.post(`${this.uri}/customers/add/`, user);
  }
}
