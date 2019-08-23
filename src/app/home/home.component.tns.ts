import { Component, OnInit, ViewContainerRef, ViewRef, ViewChild, ElementRef } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

import { TransferService } from '../datatransfer.service';
import { DynamicAddService } from '../dynamic-add.service.tns';
import {Page} from "tns-core-modules/ui/page";
import { getFrameById } from "tns-core-modules/ui/frame";
import { UserService } from '../user.service.tns';
import { LogincheckService } from '../logincheck.service.tns'
import { PostingService } from '../posting.service.tns';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { GoogleMapsService } from '../google-maps.service';
import * as application from "tns-core-modules/application";
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";
import * as firebase from 'nativescript-plugin-firebase';
import { RouterExtensions } from 'nativescript-angular/router';
import { DatePipe } from '@angular/common';

import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { ListView } from "tns-core-modules/ui/list-view";

import { Posting } from '../posting.model';
import { User } from '../user.model';

import { AddModalComponent } from '../add-modal/add-modal.component';
import { Cache } from "tns-core-modules/ui/image-cache";
import { ImageSource, fromFile, fromResource, fromBase64, fromNativeSource } from "tns-core-modules/image-source";
import { Folder, path, knownFolders } from "tns-core-modules/file-system";

import { pricing } from '../pricing-cloud.tns';

class PostItem {
    constructor(public username: String, public info: string, public profileSource: string, 
      public mapSource: string, public price: string, public status: string, public capacity: string,
      public date: string) { }
} 

@Component({
  selector: 'app-home',
  providers: [DynamicAddService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  blocks = 1;
  p : Posting[];
  postings = new ObservableArray<PostItem>();
  // cache = new Cache();
  

  @ViewChild('listView', { static: true }) lv: ElementRef;
  @ViewChild('activityIndicator', { static: true }) ai: ElementRef;
  

  constructor(private transferService: TransferService, private addService: DynamicAddService, private page: Page, 
  	private userService: UserService, private postingService: PostingService, private modal: ModalDialogService, private vcRef: ViewContainerRef,
    private mapService: GoogleMapsService, private router: RouterExtensions, private datePipe: DatePipe, private price: pricing,
    private user: LogincheckService) { }

  ngOnInit() {
  	this.loadPostings();
  }

  onBackButtonTap() {
    application.android.foregroundActivity.finish();
  }

  showModal() {
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
            // animated: true,
            // transition: { name: "slideTop" }
        };
        this.modal.showModal(AddModalComponent, options).then(res => {
            // console.log(res);
            if(res == 'posted')
              this.loadPostings();
        });
    }
  showSideDrawer() {
  	//const drawer = <RadSideDrawer>this.sd.nativeView;
  	//console.dir(drawer);
  	//console.dir(this.page);
  	// drawer.showDrawer();

  }

  loadPostings(args=null) {
    //console.log("loadPostings");
    var time = Date.now()+5000;
    console.log(this.user.getUser());
    var userDocRef = firebase.firestore.collection('users').doc(this.user.getUser());
    userDocRef.update({
      currTime: time
    })
    // let layout = <StackLayout>this.page.getViewById('feed');
    // layout.removeChildren();
    // this.cache.placeholder = fromFile("~/img/gray_background.jpg");
    // this.cache.maxRequests = 5;

    this.postings.splice(0);
    let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
    activityIndicator.busy = true;

    const currentDate = new Date();

    var posts = [];
    var postingsCollection = firebase.firestore.collection('postings');
    const query = postingsCollection.where('formattedDate', '>=', this.datePipe.transform(currentDate, 'yyyy-MM-dd'))
    query.orderBy('formattedDate', 'asc').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        //console.log(doc.data().capacity);
        this.price.feedCloud(time, doc.id, doc.data().capacity).subscribe(res => {
          console.log("response received in loadPostings, this is the response: ");
          console.log(res);
        });
        posts.push({
          id: doc.id,
          data: doc.data()
        })
      });
      this.p = posts;
      for(var i = 0; i < posts.length; i++) {
        this.postings.push(new PostItem(posts[i].user, '', '', '~/img/gray_background.jpg','', '', '', '',));
        this.createPosting(posts[i].data, i);
      }
      activityIndicator.busy = false;
      if(args != null)
      {
        var pullRefresh = args.object;
        pullRefresh.refreshing = false;
      }
    });

  }

 //  createPosting(id, user, startadr, endadr, date, cost, capacity, comments) {
	// 	this.transferService.setData([{"index": this.blocks, "id": id, "user": user, "startadr": startadr, "endadr": endadr, "date": date, "cost": cost, "capacity": capacity, "comments": comments, "buttonType": "Connect"}]);
	// 	this.addService.appendComponentToBody(this.page.getViewById('feed'));
	//   this.blocks++;
	// }

  createPosting(data, i: number) {
    let date = data.date.split(" ")
    date = date[1]+" "+date[2]+" "+date[3];
    let info_label = data.startAddress + " to " + data.endAddress;
    let dat = date;
    let price;
    let type;
    let cap;
    // this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
    if(data.capacity >"0"){
      cap = 2+"/"+ data.capacity+" Seats Left";
      // info_label+= ", "+2+"/"+ data.capacity+" Seats Remaining";
      price = data.price
      type = '~/img/steering-wheel-2.png'
    }
    else{
      // info_label += "\nEnding At: " + data.endAddress + + "\nRiders: "+ data.capacity;
       cap = "Riders: "+ Math.abs(data.capacity)
      // info_label+= ","+ " 2 "+"Riders";
      type = '~/img/passenger-2.png'
    }
    const usersCollection = firebase.firestore.collection('users');
    usersCollection.doc(data.uid).get().then((doc) => {
      if(doc.exists) {
        var url = doc.data().profile_source;
        // if(url.substring(0, 27) === 'https://graph.facebook.com/')
        //   url += '?height=300';
        // var mapUrl = this.mapService.getStaticMap(data.startAddress + " " + data.startFormatted, data.endAddress + " " + data.endFormatted);
        // console.log(mapUrl)
        // this.addCache(url, 'pfp', data.user, info_label, url, data.map_url, i).then((res) => {
        //   console.log(res)
        //   this.addCache(data.map_url, 'map', data.user, info_label, url, data.map_url, i).then((res) =>{
        //     console.log(res)
        //   })
        // });
        this.postings.setItem(i, new PostItem(data.user, info_label, url, data.map_url, price, type, cap, dat));
      }
    })
  }

  // addCache(url, img_type, user, info, pfp_url, map_url, i) {
  //   return new Promise<any>((resolve, reject) => {
  //     let cachedImageSource;
  //     const myImage = this.cache.get(url);
  //     if (myImage) {
  //       // If present -- use it.
  //       cachedImageSource = fromNativeSource(myImage);
  //       console.log(myImage)
  //       if(img_type === 'pfp')
  //         this.postings.setItem(i, new PostItem(user, info, cachedImageSource, map_url));
  //       else if (img_type === 'map')
  //         this.postings.setItem(i, new PostItem(user, info, this.postings.getItem(i).profileSource, cachedImageSource));
  //       resolve({message: 'Retrieved from cache', cacheURL: cachedImageSource});
  //     } 
  //     else {
  //       // If not present -- request its download + put it in the cache.
  //       this.cache.push({
  //           key: url,
  //           url: url,
  //           completed: (image, key) => {
  //               if (url === key) {
  //                   cachedImageSource = fromNativeSource(image);
  //                   if(img_type === 'pfp')
  //                     this.postings.setItem(i, new PostItem(user, info, cachedImageSource, map_url));
  //                   else if (img_type === 'map')
  //                     this.postings.setItem(i, new PostItem(user, info, this.postings.getItem(i).profileSource, cachedImageSource));
  //               }
  //               resolve({message: 'Added to cache', cacheURL: cachedImageSource});
  //           }
  //       });
  //     }
  //   })
  // }

  refreshList(args) {
    this.loadPostings(args);
  }

  toViewImage(src) {
    this.transferService.setData(src);
    this.router.navigate(['view-image']);
  }
  
  toMessages()
  {
    this.router.navigate(['chat-list'])
  }


  onItemTap(args) {
    console.log(this.postings.getItem(args.index));
    this.transferService.setData({
      postInfo: this.p[args.index],
      postItem: this.postings.getItem(args.index)
    })
    this.router.navigate(['posting-info'])
  }
}
