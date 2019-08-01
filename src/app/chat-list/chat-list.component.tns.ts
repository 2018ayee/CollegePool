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
  userId: string;
  chatIds: [string];

  ngOnInit() {
  	this.userId = this.logincheckService.getUser();
    this.loadMessages();
  }

  loadMessages(args=null) {
  	this.messages.splice(0);
  	firebase.firestore.collection('users').doc(this.userId).get().then((doc) => {
  		this.chatIds = doc.data().chats;
    }).then((res) => {
      for(var i = 0; i < this.chatIds.length; i++) {
        firebase.firestore.collection('chats').doc(this.chatIds[i]).get().then((doc) => {
          let data = doc.data();
          let docId = doc.id;
          if(data.chats[0]) {
            let lastMsg = data.chats[data.chats.length - 1];
            if(lastMsg.userId !== this.userId) {
              firebase.firestore.collection('users').doc(lastMsg.userId).get().then((doc) => {
                let profileSource = lastMsg.pfpSource;
                if(profileSource.substring(0, 27) == 'https://graph.facebook.com/')
                  profileSource += '?height=300';
                this.messages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, lastMsg.displayName, doc.data().first_name + ': ' + lastMsg.message));
              })
            }
            else {
              var nonUserIndex = 0;
              for(var i = 0; i < data.users.length; i++)
                if(data.users[i].uid !==this.userId)
                  nonUserIndex = i;
              firebase.firestore.collection('users').doc(data.users[nonUserIndex].uid).get().then((doc) => {
                let profileSource = doc.data().profile_source;
                if(profileSource.substring(0, 27) == 'https://graph.facebook.com/')
                  profileSource += '?height=300';
                this.messages.push(new MessageItem(lastMsg, data.lastChat, docId, profileSource, 
                  doc.data().first_name + ' ' + doc.data().last_name, 'You: ' + lastMsg.message));
              })
            }
          }
        }).then((res) => {
          this.messages.sort(function (a, b) {
            if(a.lastChat < b.lastChat)
              return -1;
            else if(b.lastChat > a.lastChat)
              return 1;
            return 0;
          })
        })
      }
      if(args != null)
      {
        var pullRefresh = args.object;
        pullRefresh.refreshing = false;
      }
    })
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
    this.router.back();
  }

}
