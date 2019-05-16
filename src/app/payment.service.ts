import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  addPaymentUser(id, username, name, email) {
  	return this.http.get(`${this.uri}/customers/add/${username}`);
  }

  getPaymentUserById(id) {
    return this.http.get(`${this.uri}/customers/${id}`);
  }

  addPaymentMethodToUser(id, nonce) {
  	const body = {
  		id: id,
  		nonce: nonce
  	};
  	return this.http.post(`${this.uri}/customers/payment/`, body);
  }

  removePaymentMethodFromUser(token) {
  	return this.http.get(`${this.uri}/customers/payment/remove/${token}`);
  }
}
