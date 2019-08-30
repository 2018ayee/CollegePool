import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import * as firebase from 'nativescript-plugin-firebase';
import { RouterExtensions } from 'nativescript-angular/router';
import * as imagepicker from "nativescript-imagepicker";
import * as imageSource from "tns-core-modules/image-source";
import * as fs from "tns-core-modules/file-system";
import { LogincheckService } from '../logincheck.service.tns';
import { ChatMessage } from '../models/chat-message.model';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { ListView } from 'tns-core-modules/ui/list-view';
import { isAndroid } from 'tns-core-modules/platform';
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout';
import * as app from "tns-core-modules/application";
declare var android: any;


class ChatItem {
	constructor(public chatMessage: ChatMessage, public visibility: string, public formattedTime: string, public mineContinuation: boolean, public theirsContinuation: boolean) {}
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions, private logincheckService: LogincheckService,
  	private vcRef: ViewContainerRef) { }

  @ViewChild("messageList", { static: true }) lv: ElementRef;
  @ViewChild("chatContainer", { static: true }) cc: ElementRef;
  @ViewChild("activityIndicator", { static: true }) ai: ElementRef;
  chatId: string;
  messages = new ObservableArray<ChatItem>();
  allMessages = new ObservableArray<ChatItem>();
  message: string = '';
  userId: string;
  chatName: string;
  displayName: string;
  pfpSource: string;
  list: ListView;
  lastIndex;
  currentUser: any;
  numShown = 20;
  chats;
  loading = false;

  ngOnInit() {
    let chatContainer = <GridLayout> this.cc.nativeElement;
    chatContainer.visibility = 'collapse';
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
  	this.chatName = ""
  	// setTimeout(() => {
   //    this.list.scrollToIndex(this.messages.length - 1);
   //  }, 1000)
  }

  async sendMessage(imgSrc = null) {
    if(this.message.replace(/\s+/g, '').length === 0 && !imgSrc) {
      return false;
    }

  	var today = new Date();
  	var date = new Date(today.getTime() - (today.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
    var unformattedDate = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  	var time = today.getHours() + ":" + today.getUTCMinutes() + ":" + today.getSeconds();
    var chat: ChatMessage;
    if(imgSrc) {
    	chat = {
    		userId: this.userId,
    		displayName: this.displayName,
    		message: "",
    		pfpSource: this.pfpSource,
    		imgSource: imgSrc,
    		time: time,
    		date: unformattedDate
    	}
    }
    else {
      chat = {
        userId: this.userId,
        displayName: this.displayName,
        message: this.message,
        pfpSource: this.pfpSource,
        imgSource: "",
        time: time,
        date: unformattedDate
      }
    }
    this.message = '';
  	const messageDocument = firebase.firestore.collection('chats').doc(this.chatId);
  	const messagePromise = await messageDocument.get().then((doc) => {
  		var updatedChats : [ChatMessage] = doc.data().chats;
  		updatedChats.push(chat);
  		messageDocument.update({
  			chats: updatedChats,
  			lastChat: date + ' ' + time
  		})
  	})
  	
  }

  async retrieveChats() {
  	const messageDocument = firebase.firestore.collection('chats').doc(this.chatId);
  	const docPromise = await messageDocument.get().then(async (doc) => {
  		let data = doc.data();
      this.chats = doc.data();
  		this.lastIndex = data.chats.length;
      this.messages.splice(0);
      this.allMessages.splice(0);
      data.chats.reverse();
  		for(var i = 0; i < data.chats.length; i++) {
        if(i >= this.numShown) {
          break;
        }
  			if(data.chats[i].userId === this.userId) {
          await this.updateContinuations(data, i, true, "collapse");
        }
  			else {
          await this.updateContinuations(data, i, false, "visible");
        }
  		}
      this.numShown = this.messages.length;

  		// this.list.scrollToIndex(data.chats.length - 1);
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

  	const unsubscribe = messageDocument.onSnapshot(async doc => {
      console.log('called')
  		let data = doc.data();
      data.chats.reverse();
      let temp_count = this.numShown;
  		for(var i = data.chats.length - this.chats.chats.length - 1; i >= 0; i--) {
  			if(data.chats[i].userId === this.userId) {
          await this.addNewMessage(data, i, true, "collapse");
          this.list.scrollToIndex(this.messages.length - 1);
        }
  			else {
          await this.addNewMessage(data, i, false, "visible");
        }
        this.numShown += 1;
  		}
      this.chats = data;
  		this.lastIndex = data.chats.length;
  	})

    let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
    activityIndicator.busy = false;
    let chatContainer = <GridLayout> this.cc.nativeElement;
    chatContainer.visibility = 'visible';
    this.list.scrollToIndex(this.messages.length - 1);
  }

  async addNewMessage(data, index, isMine, visibility) {
    var chatTime = data.chats[index].time;
    var dateSplit = data.chats[index].date.split('/');
    var timeSplit = chatTime.split(':');
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

    const pfpPromise = await firebase.firestore.collection('users').doc(data.chats[index].userId).get().then((doc) => {
      data.chats[index].pfpSource = doc.data().profile_source;

      this.messages.push(new ChatItem(data.chats[index], visibility, formattedTime, false, false));
      this.allMessages.push(new ChatItem(data.chats[index], visibility, formattedTime, false, false));


      var i = this.messages.length - 2;
      while(i >= 0 && this.messages.getItem(i).chatMessage.userId === this.messages.getItem(this.messages.length - 1).chatMessage.userId) {
        if(this.isTimeOver(this.messages.getItem(i).chatMessage, this.messages.getItem(this.messages.length - 1).chatMessage))
          return;
        var msg = this.messages.getItem(i);
        msg.visibility = 'collapse';
        if(isMine) {
          msg.mineContinuation = true;
        }
        else {
          msg.theirsContinuation = true;
        }
        this.messages.setItem(i, msg);

        this.allMessages.setItem(i, msg);
        i = i - 1;
      }

    })
  }

  async updateContinuations(data, index, isMine, visibility) {
    //Update time to a readable format for the user
    var chatTime = data.chats[index].time;
    var dateSplit = data.chats[index].date.split('/');
    var timeSplit = chatTime.split(':');
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

    const pfpPromise = await firebase.firestore.collection('users').doc(data.chats[index].userId).get().then((doc) => {
      data.chats[index].pfpSource = doc.data().profile_source;

        //Push the message item
      this.messages.unshift(new ChatItem(data.chats[index], visibility, formattedTime, false, false));
      this.allMessages.unshift(new ChatItem(data.chats[index], visibility, formattedTime, false, false));

      //Check for continuation messages and update items accordingly
      var i = 1;
      while(i < this.messages.length && this.messages.getItem(i).chatMessage.userId === this.messages.getItem(0).chatMessage.userId) {
        if(this.isTimeOver(this.messages.getItem(0).chatMessage, this.messages.getItem(i).chatMessage))
          return;
        var msg = this.messages.getItem(0);
        msg.visibility = 'collapse';
        if(isMine) {
          msg.mineContinuation = true;
        }
        else {
          msg.theirsContinuation = true;
        }
        this.messages.setItem(0, msg);

        this.allMessages.setItem(0, msg);
        i = i + 1;
      }

      // var i = index - 1;
      // while(i >= 0 && data.chats[i].userId === data.chats[index].userId) {
      //   if(this.isTimeOver(data.chats[i], data.chats[index]))
      //     return;
      //   if(i >= this.messages.length) {
      //     var msg = this.messages.getItem(this.messages.length + i - data.chats.length);
      //     msg.visibility = 'collapse';
      //     if(isMine) {
      //       msg.mineContinuation = true;
      //     }
      //     else {
      //       msg.theirsContinuation = true;
      //     }
      //     this.messages.setItem(this.messages.length + i - data.chats.length, msg)
      //   }
      //   else {
      //     var msg = this.messages.getItem(i);
      //     msg.visibility = 'collapse';
      //     if(isMine) {
      //       msg.mineContinuation = true;
      //     }
      //     else {
      //       msg.theirsContinuation = true;
      //     }
      //     this.messages.setItem(i, msg);
      //   }

      //   this.allMessages.setItem(i, msg);
      //   i = i - 1;
      // }
    })

    
    // this.list.scrollToIndex(this.messages.length - 1);
  }

  openImages() {
    var localPath;
    var counter = 1;
    let context = imagepicker.create({
        mode: "single" // use "multiple" for multiple selection
    });
    context
    .authorize()
    .then(() => {
        return context.present();
    })
    .then((selection) => {
        selection.forEach((selected) => {
            // process the selected image
            let imgSource = new imageSource.ImageSource();
            imgSource.fromAsset(selected).then((source) => {
               const b64 = source.toBase64String('jpeg', 100);
               const fileSize = b64.replace(/\=/g, "").length * 0.75;
               if (fileSize > 5) {
                  // If file is greater than 1 MB
                  source.loadFromBase64(b64);
               }

               const imgHash = Math.random().toString().slice(2,11);
               let folder = fs.knownFolders.temp();
               var path = fs.path.join(folder.path, imgHash + ".png");
               let saved = source.saveToFile(path, "jpeg", 100);

               firebase.storage.uploadFile({
                  // the full path of the file in your Firebase storage (folders will be created)
                  remoteFullPath: 'chats/' + this.chatId + '/images/' + this.userId + '/IMG_' + imgHash + '.png',
                  // option 1: a file-system module File object
                  localFile: fs.File.fromPath(path),
                  // option 2: a full file path (ignored if 'localFile' is set)
                  localFullPath: path,
                  // get notified of file upload progress
                  onProgress: (status) => {
                    console.log("Uploaded fraction: " + status.fractionCompleted);
                    console.log("Percentage complete: " + status.percentageCompleted);
                  }
               }).then((uploadedFile) => {
                  console.log("File uploaded: " + JSON.stringify(uploadedFile));
                  firebase.storage.getDownloadUrl({
                    remoteFullPath: 'chats/' + this.chatId + '/images/' + this.userId + '/IMG_' + imgHash + '.png'
                  }).then((url) => {
                    this.sendMessage(url);
                  })
               })
            });
        });
    }).catch((e) => {
        // process error
        console.log(e);
    });
  }

  isTimeOver(chat1, chat2) {
    const time1 = chat1.time;
    const time2 = chat2.time;
    const date1 = chat1.date;
    const date2 = chat2.date;

    const time1Split = time1.split(':');
    const time2Split = time2.split(':');

    var time1TotalSeconds = parseInt(time1Split[0]) * 3600 + parseInt(time1Split[1]) * 60 + parseInt(time1Split[2]);
    var time2TotalSeconds = parseInt(time2Split[0]) * 3600 + parseInt(time2Split[1]) * 60 + parseInt(time2Split[2]);
    if(time2TotalSeconds - time1TotalSeconds > (60 * 3) || date2 > date1) {
      return true;
    }
    return false;
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

  textVisibility(item) {
    if(item.chatMessage.message === "") {
      return "collapse";
    }
    else {
      return "visible";
    }
  }

  imgVisibility(item) {
    if(item.chatMessage.imgSource === "") {
      return "collapse";
    }
    else {
      return "visible";
    }
  }

  setupItemView(args) {
  	args.view.context.mine = (this.messages.getItem(args.index).chatMessage.userId === this.userId);
  	args.view.context.theirs = (this.messages.getItem(args.index).chatMessage.userId !== this.userId);
    args.view.context.mineContinuation = (this.messages.getItem(args.index).mineContinuation);
    args.view.context.theirsContinuation = (this.messages.getItem(args.index).theirsContinuation);
    args.view.context.mineContinuationGrid = (this.messages.getItem(args.index).mineContinuation);
    args.view.context.theirsContinuationGrid = (this.messages.getItem(args.index).theirsContinuation);

    args.view.context.grid = (!args.view.context.theirsContinuation && !args.view.context.mineContinuation);
    args.view.context.mineTime = (!args.view.context.mineContinuation && args.view.context.mine);
    args.view.context.theirsTime = (!args.view.context.theirsContinuation && args.view.context.theirs);

    args.view.context.theirsImg = args.view.context.theirsContinuation;
    args.view.context.img = !args.view.context.theirsImg;
    
    args.view.context.time = (!args.view.context.mineTime && !args.view.context.theirsTime)    
    args.view.context.even = (args.index % 2 === 0);
  	args.view.context.odd = (args.index % 2 === 1);
  }

  onNavBtnTap() {
  	if(this.router.canGoBack())
  		this.router.back();
  	else
  		this.router.navigate(['chat-list'], {clearHistory: true});
  }

  onTextTap() {
    this.list.scrollToIndex(this.messages.length - 1);
  }

  toViewImage(imgSource) {
    this.transferService.setData(imgSource);
    this.router.navigate(['view-image']);
  }

  loadMoreData(args) {
    //On scroll to the top, load more chat messages
    setTimeout(async () => {
      let listView = <ListView> this.lv.nativeElement;
      const num = this.numShown;
      let temp_messages = this.messages;
      listView.items = temp_messages;
      if(args.index === 0 && num < this.chats.chats.length && !this.loading) {
        this.loading = true;
        for(var i = num; i < num + 10; i++) {
          if(i < this.chats.chats.length) {
            // this.messages.unshift(this.allMessages.getItem(this.allMessages.length - i - 1));
            if(this.chats.chats[i].userId === this.userId) {
              await this.updateContinuations(this.chats, i, true, "collapse");
            }
            else {
              await this.updateContinuations(this.chats, i, false, "visible");
            }
            this.numShown += 1;
            listView.scrollToIndex(this.messages.length - num);
          }
        }
        listView.items = this.messages;
        this.loading = false;
      }
    }, 500);
  }

  toInfo() {
    this.transferService.setData(this.chatId);
    this.router.navigate(['chat-info']);
  }

}
