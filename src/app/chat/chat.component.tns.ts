import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import * as firebase from 'nativescript-plugin-firebase';
import { RouterExtensions } from 'nativescript-angular/router';
import { LogincheckService } from '../logincheck.service.tns';
import { ChatMessage } from '../models/chat-message.model';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { ListView } from 'tns-core-modules/ui/list-view';
import { isAndroid } from 'tns-core-modules/platform';
import * as app from "tns-core-modules/application";
declare var android: any;


class ChatItem {
	constructor(public chatMessage: ChatMessage, public visibility: string) {}
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions, private logincheckService: LogincheckService,
  	private vcRef: ViewContainerRef) { }

  @ViewChild("messageList") lv: ElementRef;
  chatId: string;
  messages = new ObservableArray<ChatItem>();
  message: string;
  userId: string;
  chatName: string;
  displayName: string;
  pfpSource: string;
  list: ListView;
  lastIndex;
  currentUser: any;

  ngOnInit() {
  	if(isAndroid) {
  		var window = app.android.startActivity.getWindow();
        window.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
  	}
  	this.list = this.lv.nativeElement;

  	this.chatId = this.transferService.getData();
  	this.userId = this.logincheckService.getUser();
  	firebase.getCurrentUser().then((user) => {
  		this.displayName = user.displayName;
  		this.pfpSource = user.photoURL;
  	})
  	this.retrieveChats();
  	this.chatName = "John Doe"
  	// console.log(this.chatId);
  }

  sendMessage() {
  	var today = new Date();
  	var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  	var time = today.getHours() + ":" + today.getUTCMinutes() + ":" + today.getSeconds();
  	const chat : ChatMessage = {
  		userId: this.userId,
  		displayName: this.displayName,
  		message: this.message,
  		pfpSource: this.pfpSource,
  		imgSource: "",
  		time: time,
  		date: date
  	}
  	const messageDocument = firebase.firestore.collection('chats').doc(this.chatId);
  	messageDocument.get().then((doc) => {
  		var updatedChats : [ChatMessage] = doc.data().chats;
  		updatedChats.push(chat);
  		messageDocument.update({
  			chats: updatedChats,
  			lastChat: date + ' ' + time
  		})
  	})
  	this.message = '';
  }

  retrieveChats() {
  	this.messages.splice(0);
  	const messageDocument = firebase.firestore.collection('chats').doc(this.chatId);
  	messageDocument.get().then((doc) => {
  		let data = doc.data();
  		this.lastIndex = data.chats.length;
  		for(var i = 0; i < data.chats.length; i++) {
  			if(data.chats[i].userId === this.userId)
  				this.messages.push(new ChatItem(data.chats[i], "collapse"));
  			else
  				this.messages.push(new ChatItem(data.chats[i], "visible"));
  		}
  		this.list.scrollToIndex(data.chats.length - 1);
  		if(data.users.length === 2) {
  			if(data.users[0].uid === this.userId)
  				this.chatName = data.users[1].displayName;
  			else
  				this.chatName = data.users[0].displayName;
  		}
  		else {
  			this.chatName = "Group chat";
  		}
  	})

  	const unsubscribe = messageDocument.onSnapshot(doc => {
  		let data = doc.data();
  		for(var i = this.lastIndex; i < data.chats.length; i++) {
  			if(data.chats[i].userId === this.userId)
  				this.messages.push(new ChatItem(data.chats[i], "collapse"));
  			else
  				this.messages.push(new ChatItem(data.chats[i], "visible"));
  		}
  		this.lastIndex = data.chats.length;
  	})
  }

  align(item) {
  	if(item.chatMessage.userId === this.userId)
  		return "right";
  	else
  		return "left";
  }

  setupItemView(args) {
  	args.view.context.mine = (this.messages.getItem(args.index).chatMessage.userId === this.userId);
	args.view.context.theirs = (this.messages.getItem(args.index).chatMessage.userId !== this.userId);
	args.view.context.even = (args.index % 2 === 0);
	args.view.context.odd = (args.index % 2 === 1);
  }

  onNavBtnTap() {
  	if(this.router.canGoBack())
  		this.router.back();
  	else
  		this.router.navigate(['home']);
  }

}
