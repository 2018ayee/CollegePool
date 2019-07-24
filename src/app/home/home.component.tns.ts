import { Component, OnInit, ViewContainerRef, ViewRef, ViewChild, ElementRef } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

import { TransferService } from '../datatransfer.service';
import { DynamicAddService } from '../dynamic-add.service.tns';
import {Page} from "tns-core-modules/ui/page";
import { getFrameById } from "tns-core-modules/ui/frame";
import { UserService } from '../user.service.tns';
import { PostingService } from '../posting.service.tns';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import * as application from "tns-core-modules/application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";

import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { ListView } from "tns-core-modules/ui/list-view";

import { Posting } from '../posting.model';
import { User } from '../user.model';

import { AddModalComponent } from '../add-modal/add-modal.component';

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('Fab', () => require('nativescript-floatingactionbutton').Fab);
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

class PostItem {
    constructor(public username: String, public info: string) { }
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
  	private userService: UserService, private postingService: PostingService, private modal: ModalDialogService, private vcRef: ViewContainerRef) { }

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
  	this.postingService.getPostings()
		.subscribe((data: Posting[]) => {
			this.p = data;
			this.blocks = 0;
			for(var i = this.p.length - 1; i >= 0; i--) {
          this.createPosting(this.p[i]);
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

  createPosting(data) {
    let info_label = "";
    // this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
    if(data.capacity != "-1")
      info_label = "Offering ride leaving " + data.date + " from " + data.startadr + " to " + data.endadr + " for " + data.cost;
    else
      info_label = "Requesting ride leaving " + data.date + " from " + data.startadr + " to " + data.endadr;
    this.postings.push(new PostItem(data.user, info_label));
  }

  refreshList(args) {
    this.loadPostings(args);
  }

  onItemTap(args) {
    console.log(args);
  }
}
