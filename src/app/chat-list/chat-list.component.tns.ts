import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import * as firebase from 'nativescript-plugin-firebase';
import { RouterExtensions } from 'nativescript-angular/router';
import { LogincheckService } from '../logincheck.service.tns';
import { ChatMessage } from '../models/chat-message.model';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { ListView } from 'tns-core-modules/ui/list-view';

class MessageItem {
	constructor(public chatMessage: ChatMessage, public lastChat: string, public chatId: string, public pfpSource: string, 
    public displayName: string, public message: string) {}
}

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions, private logincheckService: LogincheckService,
  	private vcRef: ViewContainerRef) { }

  messages = new ObservableArray<MessageItem>();
  refreshMessages = new ObservableArray<MessageItem>();
  userId: string;
  chatIds: [string];
  firstLoad = true;

  async ngOnInit() {
  	this.userId = this.logincheckService.getUser();
    // const loadPromise = await this.loadMessages();
    firebase.firestore.collection('users').doc(this.userId).get().then(async (doc) => {
      this.chatIds = doc.data().chats;
      for(var i = 0; i < this.chatIds.length; i++) {
        const unsubscribe = await firebase.firestore.collection('chats').doc(this.chatIds[i]).onSnapshot({includeMetadataChanges: true}, async doc => {
          if(!this.firstLoad)
            await this.refreshList(null);
        })
      }
    })
    this.loadMessages();
  }

  formatTime(date, time) {
    var dateSplit = date.split('/');
    var timeSplit = time.split(':');
    var formattedTime = '';
    if(timeSplit[1].length === 1) {
      timeSplit[1] = '0' + timeSplit[1];
    }
    var hours = parseInt(timeSplit[0]);
    if(hours > 12) {
      formattedTime = dateSplit[1] + '/' + dateSplit[2] + ', ' + (hours - 12) + ':' + timeSplit[1] + ' PM';
    }
    else {
      if(hours === 0)
        timeSplit[0] = '12';
      formattedTime = dateSplit[1] + '/' + dateSplit[2] + ', ' + timeSplit[0] + ':' + timeSplit[1] + ' AM';
    }
    return formattedTime;
  }

  async loadMessages(args=null) {
  	await firebase.firestore.collection('users').doc(this.userId).get().then((doc) => {
  		this.chatIds = doc.data().chats;
    }).then(async (res) => {
      for(var i = 0; i < this.chatIds.length; i++) {
        const chatPromise = await firebase.firestore.collection('chats').doc(this.chatIds[i]).get().then(async (doc) => {
          let data = doc.data();
          let docId = doc.id;
          var chatName = 'You, ';
          var nonUserIndex = 0;
          for(var i = 0; i < data.users.length; i++) {
            if(data.users[i].uid !==this.userId) {
              nonUserIndex = i;
              if(i === data.users.length - 1)
                chatName += 'and ' + data.users[i].displayName;
              else
                chatName += data.users[i].displayName + ', ';
            }
          }
          if(data.chats[0]) {
            let lastMsg = data.chats[data.chats.length - 1];
            const addPromise = await this.addMessage(lastMsg, data, docId, chatName, nonUserIndex); 
          }
        })
      }
      if(args != null)
      {
        var pullRefresh = args.object;
        pullRefresh.refreshing = false;
      }
      this.refreshMessages.sort(function (a, b) {
        if(a.lastChat > b.lastChat)
          return -1;
        else if(b.lastChat < a.lastChat)
          return 1;
        return 0;
      })
      this.messages.splice(0);
      for(var i = 0; i < this.refreshMessages.length; i++) {
        this.messages.push(this.refreshMessages.getItem(i));
      }
      this.refreshMessages.splice(0);
    })
    this.firstLoad = false;
  }

  async addMessage(lastMsg, data, docId, chatName, nonUserIndex) {
    if(lastMsg.imgSource !== "") {
      lastMsg.message = "Sent a photo";
    }
    lastMsg.time = this.formatTime(lastMsg.date, lastMsg.time);
    if(lastMsg.userId !== this.userId) {
      const userPromise = await firebase.firestore.collection('users').doc(lastMsg.userId).get().then((doc) => {
        let profileSource = doc.data().profile_source;
        if(data.users.length === 2)
          this.refreshMessages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, lastMsg.displayName, doc.data().first_name + ': ' + lastMsg.message));
        else {
          this.refreshMessages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, chatName, doc.data().first_name + ': ' + lastMsg.message));
        }
        return true;
      })
      return this.refreshMessages;
    }
    else {
      const userPromise = await firebase.firestore.collection('users').doc(data.users[nonUserIndex].uid).get().then((doc) => {
        let profileSource = doc.data().profile_source;
        if(data.users.length === 2)
          this.refreshMessages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, 
            doc.data().first_name + ' ' + doc.data().last_name, 'You: ' + lastMsg.message));
        else {
          this.refreshMessages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, 
            chatName, 'You: ' + lastMsg.message));
        }
        return true;
      })
      return this.refreshMessages;
    }
  }

  refreshList(args) {
    this.loadMessages(args);
  }

  onItemTap(args) {
  	let chatId = this.messages.getItem(args.index).chatId;
  	this.transferService.setData(chatId);
  	this.router.navigate(['chat'])
  }

  onNavBtnTap() {
    if(this.router.canGoBack)
      this.router.back();
    else
      this.router.navigate(['navigation'], {clearHistory: true})
  }

}
