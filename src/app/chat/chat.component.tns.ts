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
	constructor(public chatMessage: ChatMessage, public visibility: string, public mineContinuation: boolean, public theirsContinuation: boolean) {}
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
  message: string = '';
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

  async sendMessage() {
    if(this.message.replace(/\s+/g, '').length === 0) {
      return false;
    }
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
  	const messagePromise = await messageDocument.get().then((doc) => {
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
  	const messageDocument = firebase.firestore.collection('chats').doc(this.chatId);
  	messageDocument.get().then((doc) => {
  		let data = doc.data();
  		this.lastIndex = data.chats.length;
      this.messages.splice(0);
  		for(var i = 0; i < data.chats.length; i++) {
  			if(data.chats[i].userId === this.userId) {
          this.updateContinuations(data, i, true, "collapse");
        }
  			else {
          this.updateContinuations(data, i, false, "visible");
        }
  		}
  		this.list.scrollToIndex(data.chats.length - 1);
  		if(data.users.length === 2) {
  			if(data.users[0].uid === this.userId)
  				this.chatName = data.users[1].displayName;
  			else {
          this.chatName = data.users[0].displayName;
        }
  		}
  		else {
        var chatName = 'You, ';
        for(var i = 0; i < data.users.length; i++) {
          if(data.users[i].id != this.userId) {
            if(i === data.users.length - 1)
              chatName += 'and ' + data.users[i].displayName;
            else
              chatName += data.users[i].displayName + ', ';
          }
        }
  			this.chatName = 'Group chat';
  		}
  	})

  	const unsubscribe = messageDocument.onSnapshot(doc => {
  		let data = doc.data();
  		for(var i = this.lastIndex; i < data.chats.length; i++) {
  			if(data.chats[i].userId === this.userId) {
          this.updateContinuations(data, i, true, "collapse");
          this.list.scrollToIndex(this.messages.length - 1);
        }
  			else {
          this.updateContinuations(data, i, false, "visible");
        }
  		}
  		this.lastIndex = data.chats.length;
  	})
  }

  updateContinuations(data, index, isMine, visibility) {
    //Update time to a readable format for the user
    var chatTime = data.chats[index].time;
    var dateSplit = data.chats[index].date.split('/');
    var timeSplit = chatTime.split(':');
    if(timeSplit[1].length === 1) {
      timeSplit[1] = '0' + timeSplit[1];
    }
    var hours = parseInt(timeSplit[0]);
    if(hours > 12) {
      data.chats[index].time = dateSplit[1] + '/' + dateSplit[2] + ', ' + (hours - 12) + ':' + timeSplit[1] + ' PM';
    }
    else {
      data.chats[index].time = dateSplit[1] + '/' + dateSplit[2] + ', ' + timeSplit[0] + ':' + timeSplit[2] + ' AM';
    }

    //Push the message item
    this.messages.push(new ChatItem(data.chats[index], visibility, false, false));

    //Check for continuation messages and update items accordingly
    var i = index - 1;
    while(i >= 0 && data.chats[i].userId === data.chats[index].userId) {
      var msg = this.messages.getItem(i);
      msg.visibility = 'collapse';
      if(isMine) {
        msg.mineContinuation = true;
      }
      else {
        msg.theirsContinuation = true;
      }
      this.messages.setItem(i, msg);
      i = i - 1;
    }
  }

  align(item) {
  	if(item.chatMessage.userId === this.userId)
  		return "right";
  	else
  		return "left";
  }

  alignReverse(item) {
    if(item.chatMessage.userId === this.userId)
      return "left";
    else
      return "right";
  }

  setupItemView(args) {
  	args.view.context.mine = (this.messages.getItem(args.index).chatMessage.userId === this.userId);
  	args.view.context.theirs = (this.messages.getItem(args.index).chatMessage.userId !== this.userId);
    args.view.context.mineContinuation = (this.messages.getItem(args.index).mineContinuation);
    args.view.context.theirsContinuation = (this.messages.getItem(args.index).theirsContinuation);
    args.view.context.mineContinuationGrid = (this.messages.getItem(args.index).mineContinuation);
    args.view.context.theirsContinuationGrid = (this.messages.getItem(args.index).theirsContinuation);

    args.view.context.grid = (!this.messages.getItem(args.index).theirsContinuation && !this.messages.getItem(args.index).mineContinuation);
    args.view.context.mineTime = (!this.messages.getItem(args.index).mineContinuation && this.messages.getItem(args.index).chatMessage.userId === this.userId);
    args.view.context.theirsTime = (!this.messages.getItem(args.index).theirsContinuation && this.messages.getItem(args.index).chatMessage.userId !== this.userId);
    
    args.view.context.time = (!args.view.context.mineTime && !args.view.context.theirsTime)    
    args.view.context.even = (args.index % 2 === 0);
  	args.view.context.odd = (args.index % 2 === 1);
  }

  onNavBtnTap() {
  	if(this.router.canGoBack())
  		this.router.back();
  	else
  		this.router.navigate(['home']);
  }

  onTextTap() {
    this.list.scrollToIndex(this.messages.length - 1);
  }

}
