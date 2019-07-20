import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  	/**
	* To get the server to recognize your mobile device, find your ipv4 address by running ipconfig in a terminal window
	* and add a new uri line with your ipv4 address. Do this for network_security_config.xml, user.services.tns.ts, and
	* posting.service.tns.ts.
	*/
	// Adam's testing server
	uri = 'http://192.168.1.7:4000';
	// uri = 'http://10.5.11.25:4000';
	// Phillip's Testing server
	// uri = 'http://192.168.1.3:4000';
  constructor(private http: HttpClient) { }

  getUsers() {
  	return this.http.get(`${this.uri}/users`);
  }

  getUserbyId(id) {
  	return this.http.get(`${this.uri}/users/${id}`);
  }

  addUser(name='', username='', address='', birthdate='', email='', gender='', phone_number='', rides_given="0", rides_received="0") {
  	const user = {
  		name: name,
      username: username,
      address: address,
      birthdate: birthdate,
      email: email,
      gender: gender,
      phone_number: phone_number,
      rides_given: rides_given,
      rides_received: rides_received,
      payment_id: ""
  	};
  	return this.http.post(`${this.uri}/users/add/`, user);
  }

  updateUser(id, name, username, address, birthdate, email, gender, phone_number, rides_given, rides_received, payment_id) {
  	const user = {
      name: name,
      username: username,
      address: address,
      birthdate: birthdate,
      email: email,
      gender: gender,
      phone_number: phone_number,
      rides_given: rides_given,
      rides_received: rides_received,
      payment_id: payment_id
    };
  	return this.http.post(`${this.uri}/users/update/${id}`, user);
  }

  deleteUser(id) {
  	return this.http.get(`${this.uri}/users/delete/${id}`);
  }

}
