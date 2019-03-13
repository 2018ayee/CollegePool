import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getUsers() {
  	return this.http.get(`${this.uri}/users`);
  }

  getUserbyId(id) {
  	return this.http.get(`${this.uri}/users/${id}`);
  }

  addUser(name, username, address, birthdate, email, gender, phone_number, rides_given="0", rides_received="0") {
  	const user = {
  		name: name,
      username: username,
      address: address,
      birthdate: birthdate,
      email: email,
      gender: gender,
      phone_number: phone_number,
      rides_given: rides_given,
      rides_received: rides_received
  	};
  	return this.http.post(`${this.uri}/users/add/`, user);
  }

  updateUser(id, name, username, address, birthdate, email, gender, phone_number, rides_given, rides_received) {
  	const user = {
      name: name,
      username: username,
      address: address,
      birthdate: birthdate,
      email: email,
      gender: gender,
      phone_number: phone_number,
      rides_given: rides_given,
      rides_received: rides_received
    };
  	return this.http.post(`${this.uri}/users/update/${id}`, user);
  }

  deleteUser(id) {
  	return this.http.get(`${this.uri}/users/delete/${id}`);
  }

}
