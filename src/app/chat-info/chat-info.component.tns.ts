import { Component, OnInit, ViewRef, ViewChild, ElementRef } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { TransferService } from '../datatransfer.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { ListView } from "tns-core-modules/ui/list-view";
import * as firebase from 'nativescript-plugin-firebase';

class UserItem {
	constructor(public userId: string, public profileSource: string, public username: string) {}
}

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.css']
})

export class ChatInfoComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions) { }

  @ViewChild('listView', { static: true }) lv: ElementRef;
  @ViewChild('activityIndicator', { static: true }) ai: ElementRef;
  users = new ObservableArray<UserItem>();
  chatId;
  groupTitle = "Group";
  postInfo;
  map_url;

  ngOnInit() {
  	this.createViews();
  }

  createViews() {
  	this.chatId = this.transferService.getData();

  	let postDocument = firebase.firestore.collection('postings').doc(this.chatId);
  	postDocument.get().then((doc) => {
  		this.map_url = doc.data().map_url;
  		this.postInfo = doc.data();
  	})

  	let chatDocument = firebase.firestore.collection('chats').doc(this.chatId);
  	chatDocument.get().then(async (doc) => {
  		let users = doc.data().users;
  		for(var i = 0; i < users.length; i++) {
  			let username = users[i].displayName;
  			await firebase.firestore.collection('users').doc(users[i].uid).get().then((doc) => {
  				this.users.push(new UserItem(doc.id, doc.data().profile_source, username))
  			})
  		}
  		let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
  		activityIndicator.busy = false;
  		let listView = <ListView> this.lv.nativeElement;
  		listView.visibility = 'visible';
  	})
  }

  onItemTap(args) {

  }

  onNavBtnTap() {
  	this.router.back();
  }

  async viewPost() {
	let date = this.postInfo.date.split(" ")
    date = date[1]+" "+date[2]+" "+date[3];
    let info_label = this.postInfo.startAddress + " to " + this.postInfo.endAddress;
    let dat = date;
    let price;
    let type;
    let cap;
    let hasText;
    let comment;
    if(this.postInfo.comments==''){
      hasText = false;
    }
    else{
      hasText = true;
    }
    // this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
    if(this.postInfo.capacity != "-1"){
      //cap = 2+"/"+ this.postInfo.capacity+" Seats Left";
      cap = this.postInfo.riders+"/"+ this.postInfo.capacity+" Filled";
      // info_label+= ", "+2+"/"+ this.postInfo.capacity+" Seats Remaining";
      price = this.postInfo.price
      type = '~/img/steering-wheel-2.png'
      comment = "Driver's Note: " + this.postInfo.comments;
    }
    else{
      // info_label += "\nEnding At: " + this.postInfo.endAddress + + "\nRiders: "+ this.postInfo.capacity;
       cap = "Riders: "+ "2";
      // info_label+= ","+ " 2 "+"Riders";
      type = '~/img/passenger-2.png'
      comment = "Riders's Note: " + this.postInfo.comments;
    }
  	// var info_label;
  	// if(this.postInfo.capacity != "-1")
    //   info_label = "Offering ride leaving " + this.postInfo.date + " from " + this.postInfo.startAddress + " to " + this.postInfo.endAddress + " for " + this.postInfo.price;
    // else
    //   info_label = "Requesting ride leaving " + this.postInfo.date + " from " + this.postInfo.startAddress + " to " + this.postInfo.endAddress;
	let profileSource;
	
  	await firebase.firestore.collection('users').doc(this.postInfo.uid).get().then((doc) => {
		  profileSource = doc.data().profile_source;
  	})

  	this.transferService.setData({
		  postInfo: {id: this.chatId, data: this.postInfo},
      postItem: {profileSource: profileSource, status: type, capacity: cap, date: dat, price: price, 
        username: this.postInfo.user, info:info_label, hasText: hasText, comment: comment}
	  });
  	this.router.navigate(['posting-info']);
  }

  toViewImage() {
  	this.transferService.setData(this.map_url);
    this.router.navigate(['view-image']);
  }

}
