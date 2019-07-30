import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  // uri = 'http://localhost:4000';
  //Adam's Testing Server
  // uri = 'http://192.168.1.7:4000';
  //Phillip's Testing Server
	// uri = 'http://192.168.1.3:4000';
  //Firebase cloud functions
  uri = 'https://us-central1-collegepool-1552749118617.cloudfunctions.net';

  constructor(private http: HttpClient) { }

  addPaymentUser(id, username, name, email) {
    // console.log(`${this.uri}/addCustomer/${username}`)
  	// return this.http.get(`${this.uri}/customers/add/${username}`);
    return this.http.get(`${this.uri}/addCustomer?username=${username}`);
  }

  getPaymentUserById(id) {
    // return this.http.get(`${this.uri}/customers/${id}`);
    return this.http.get(`${this.uri}/getCustomer?id=${id}`);
  }

  addPaymentMethodToUser(id, nonce) {
  	const body = {
  		id: id,
  		nonce: nonce
  	};
  	// return this.http.post(`http://192.168.1.7:4000/customers/payment/`, body);
    return this.http.post(`${this.uri}/addPayment?`, body)
  }

  removePaymentMethodFromUser(token) {
  	return this.http.get(`${this.uri}/removePayment?token=${token}`);
  }

  getIdToken(id) {
    return this.http.get(`${this.uri}/getToken?id=${id}`);
  }
  
}
