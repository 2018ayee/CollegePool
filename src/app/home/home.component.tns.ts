import { Component, OnInit, ViewContainerRef, ViewRef, ViewChild, ElementRef } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

import { TransferService } from '../datatransfer.service';
import { DynamicAddService } from '../dynamic-add.service.tns';
import {Page} from "tns-core-modules/ui/page";
import { getFrameById } from "tns-core-modules/ui/frame";
import { UserService } from '../user.service.tns';
import { PostingService } from '../posting.service.tns';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { GoogleMapsService } from '../google-maps.service';
import * as application from "tns-core-modules/application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";
import * as firebase from 'nativescript-plugin-firebase';
import { RouterExtensions } from 'nativescript-angular/router';

import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { ListView } from "tns-core-modules/ui/list-view";

import { Posting } from '../posting.model';
import { User } from '../user.model';

import { AddModalComponent } from '../add-modal/add-modal.component';

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('Fab', () => require('nativescript-floatingactionbutton').Fab);
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

class PostItem {
    constructor(public username: String, public info: string, public profileSource: string, public mapSource: string) { }
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

  @ViewChild('listView') lv: ElementRef;
  

  constructor(private transferService: TransferService, private addService: DynamicAddService, private page: Page, 
  	private userService: UserService, private postingService: PostingService, private modal: ModalDialogService, private vcRef: ViewContainerRef,
    private mapService: GoogleMapsService, private router: RouterExtensions) { }

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
    // let layout = <StackLayout>this.page.getViewById('feed');
    // layout.removeChildren();
    this.postings.splice(0);
  // 	this.postingService.getPostings()
		// .subscribe((data: Posting[]) => {
		// 	this.p = data;
		// 	this.blocks = 0;
		// 	for(var i = this.p.length - 1; i >= 0; i--) {
  //         this.createPosting(this.p[i]);
  //     }
  //     if(args != null)
  //     {
  //       var pullRefresh = args.object;
  //       pullRefresh.refreshing = false;
  //     }
		// });
    var posts = [];
    var postingsCollection = firebase.firestore.collection('postings');
    postingsCollection.orderBy('formattedDate', 'asc').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        posts.push({
          id: doc.id,
          data: doc.data()
        })
      });
      this.p = posts;
      for(var i = 0; i < posts.length; i++) {
        this.postings.push(new PostItem(posts[i].user, '', '', '~/img/gray_background.jpg'));
        this.createPosting(posts[i].data, i);
      }
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
    let info_label = "";
    // this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
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
        // var mapUrl = this.mapService.getStaticMap(data.startAddress + " " + data.startFormatted, data.endAddress + " " + data.endFormatted);
        // console.log(mapUrl)
        this.postings.setItem(i, new PostItem(data.user, info_label, url, data.map_url));
      }
    })
  }

  refreshList(args) {
    this.loadPostings(args);
  }

  onItemTap(args) {
    // console.log(args);
    this.transferService.setData({
      postInfo: this.p[args.index],
      postItem: this.postings.getItem(args.index)
    })
    this.router.navigate(['posting-info'])
  }
}
