import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class notifs {
	notif_uri = 'https://us-central1-collegepool-1552749118617.cloudfunctions.net/generalNotification?';
	constructor(private httpClient: HttpClient) { };
	feedCloud(chat_id, user_id, title, body, type){
		return this.httpClient.get(`${this.notif_uri}`+'chat_id='+chat_id+'&user_id='+user_id+'&title='+title+'&body='+body+'&type='+type, {responseType: 'text'})
	}
}