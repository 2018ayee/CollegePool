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
import { ImageSource, fromFile, fromResource, fromBase64, fromNativeSource } from "tns-core-modules/image-source";
import { Folder, path, knownFolders } from "tns-core-modules/file-system";
import { Cache } from "tns-core-modules/ui/image-cache";


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
  //user = this.logincheckService.getUser();
  user = '';
  name = "Adam Yee";
  blocks = 0;
  postings = new ObservableArray<PostItem>();
  p = [];
  ids = [];
  // cache = new Cache();

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
          this.createPosting(doc.data(), doc.id);
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

  createPosting(data, id) {
    // this.cache.placeholder = fromFile("~/img/gray_background.jpg");
    // this.cache.maxRequests = 5;
    let info_label = "";
    if(data.capacity != "-1")
      info_label = "Offering ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress + " for " + data.price;
    else
      info_label = "Requesting ride leaving " + data.date + " from " + data.startAddress + " to " + data.endAddress;
    const usersCollection = firebase.firestore.collection('users');
    usersCollection.doc(data.uid).get().then((doc) => {
      if(doc.exists) {
        var url = doc.data().profile_source;
        // if(url.substring(0, 27) === 'https://graph.facebook.com/')
        //   url += '?height=300';
        this.postings.push(new PostItem(data.user, info_label, url, data.map_url));
        this.p.push(data)
        this.ids.push(id)
      }
    })
  }

  refreshList(args) {
    this.loadPostings(args);
  }

  // addCache(url) {
  //   let cachedImageSource;
  //   const myImage = this.cache.get(url);
  //   if (myImage) {
  //       // If present -- use it.
  //       cachedImageSource = fromNativeSource(myImage);
  //       return cachedImageSource;
  //   } else {
  //       // If not present -- request its download + put it in the cache.
  //       this.cache.push({
  //           key: url,
  //           url: url,
  //           completed: (image, key) => {
  //               if (url === key) {
  //                   cachedImageSource = fromNativeSource(image);
  //                   return cachedImageSource;
  //               }
  //           }
  //       });
  //   }
  // }

  onItemTap(args) {
    this.transferService.setData({
      postInfo: {id: this.ids[args.index], data: this.p[args.index]},
      postItem: this.postings.getItem(args.index)
    })
    this.router.navigate(['posting-info'])
  }

}
