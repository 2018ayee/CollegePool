import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { Router } from '@angular/router';
import { PostingService } from '../posting.service';
import { Posting } from '../posting.model';
import { DynamicAddService } from '../dynamic-add.service';
import { LogincheckService } from '../logincheck.service';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import * as firebase from 'nativescript-plugin-firebase';
import { ListView } from 'tns-core-modules/ui/list-view';

class PostItem {
    constructor(public username: String, public info: string, public profileSource: string, public mapSource: string) { }
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @ViewChild('listView') lv: ElementRef;
  // username = "2022ayee";
  //user = this.logincheckService.getUser();
  user = '';
  name = "Adam Yee";
  // rides : Posting[];
  // p : Posting[];
  blocks = 0;
  postings = new ObservableArray<PostItem>();
  p = [];
  
  constructor(private logincheckService: LogincheckService, private transferService: TransferService, private router: Router, private postingService: PostingService, private addService: DynamicAddService) { }

  ngOnInit() {
  	this.logincheckService.loginCheck();
  	this.user = this.logincheckService.getUser()
  	this.loadPostings();
  }

  loadPostings(args=null) {
    this.postings.splice(0);
    var postIds = [];
    var postingsCollection = firebase.firestore.collection('postings');
    var usersCollection = firebase.firestore.collection('users').doc(this.user);
    usersCollection.get().then(doc => {
    	postIds = doc.data().posts;
    	for(var i = 0; i < postIds.length; i++) {
    		postingsCollection.doc(postIds[i]).get().then(doc => {
          this.createPosting(doc.data());
    		})
    	}
    	if(args != null) {
	        var pullRefresh = args.object;
	        pullRefresh.refreshing = false;
	    }
	    var listView = <ListView> this.lv.nativeElement;
	    listView.scrollToIndex(postIds.length - 1);
    })
  }

  createPosting(data) {
    let info_label = "";
    if(data.capacity != "-1")
      info_label = "Offering ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress + " for " + data.price;
    else
      info_label = "Requesting ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress;
    const usersCollection = firebase.firestore.collection('users');
    usersCollection.doc(data.uid).get().then((doc) => {
      if(doc.exists) {
        var url = doc.data().profile_source;
        if(url.substring(0, 27) === 'https://graph.facebook.com/')
          url += '?height=300';
        this.postings.push(new PostItem(data.user, info_label, url, data.map_url));
        this.p.push(data)
      }
    })
  }

  refreshList(args) {
    this.loadPostings(args);
  }

  onItemTap(args) {
    this.transferService.setData({
      postInfo: {data: this.p[args.index]},
      postItem: this.postings.getItem(args.index)
    })
    this.router.navigate(['posting-info'])
  }

}
