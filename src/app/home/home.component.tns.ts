import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { TransferService } from '../datatransfer.service';
import { DynamicAddService } from '../dynamic-add.service.tns';
import {Page} from "tns-core-modules/ui/page";
import { getFrameById } from "tns-core-modules/ui/frame";
import { UserService } from '../user.service.tns';
import { PostingService } from '../posting.service.tns';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";


import { Posting } from '../posting.model';
import { User } from '../user.model';

import { AddModalComponent } from '../add-modal/add-modal.component';

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('Fab', () => require('nativescript-floatingactionbutton').Fab);

@Component({
  selector: 'app-home',
  providers: [DynamicAddService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  blocks = 1;
  p : Posting[];

  constructor(private transferService: TransferService, private addService: DynamicAddService, private page: Page, 
  	private userService: UserService, private postingService: PostingService, private modal: ModalDialogService, private vcRef: ViewContainerRef) { }

  ngOnInit() {
  	this.loadPostings();
    this.transferService.setData([{"index": this.blocks, "id": "xd", "user": "test", "startadr": "here", "endadr": "there", "date": "anytime", "cost": "whatever", "capacity": "3", "comments": "", "buttonType": "Connect"}]);
    this.addService.appendComponentToBody(this.page.getViewById('feed'));
    this.blocks++;
    this.transferService.setData([{"index": this.blocks, "id": "xd", "user": "test", "startadr": "here", "endadr": "there", "date": "anytime", "cost": "whatever", "capacity": "3", "comments": "", "buttonType": "Connect"}]);
    this.addService.appendComponentToBody(this.page.getViewById('feed'));
    this.blocks++;
    this.transferService.setData([{"index": this.blocks, "id": "xd", "user": "test", "startadr": "here", "endadr": "there", "date": "anytime", "cost": "whatever", "capacity": "3", "comments": "", "buttonType": "Connect"}]);
    this.addService.appendComponentToBody(this.page.getViewById('feed'));
    this.blocks++;
    this.transferService.setData([{"index": this.blocks, "id": "xd", "user": "test", "startadr": "here", "endadr": "there", "date": "anytime", "cost": "whatever", "capacity": "3", "comments": "", "buttonType": "Connect"}]);
    this.addService.appendComponentToBody(this.page.getViewById('feed'));
    this.blocks++;
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
        });
    }
  showSideDrawer() {
  	//const drawer = <RadSideDrawer>this.sd.nativeView;
  	//console.dir(drawer);
  	//console.dir(this.page);
  	// drawer.showDrawer();

  }

  loadPostings() {
  	this.postingService.getPostings()
		.subscribe((data: Posting[]) => {
			this.p = data;
			this.blocks = 0;
			for(var i = 0; i < this.p.length; i++) {
				this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
			}
		});
  }

  createPosting(id, user, startadr, endadr, date, cost, capacity, comments) {
		this.transferService.setData([{"index": this.blocks, "id": id, "user": user, "startadr": startadr, "endadr": endadr, "date": date, "cost": cost, "capacity": capacity, "comments": comments, "buttonType": "Connect"}]);
		this.addService.appendComponentToBody(this.page.getViewById('feed'));
	  this.blocks++;
	}

  viewAdd() {

  }
}
