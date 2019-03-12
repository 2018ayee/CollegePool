import { Component, OnInit } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { Router } from '@angular/router';
import { PostingService } from '../posting.service';
import { Posting } from '../posting.model';
import { DynamicAddService } from '../dynamic-add.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  userInfo = this.transferService.getData();
  username = "Adam Yee";
  rides : Posting[];
  p : Posting[];
  blocks = 0;
  constructor(private transferService: TransferService, private router: Router, private postingService: PostingService, private addService: DynamicAddService) { }

  ngOnInit() {
  	this.rides = [];
  	this.loginCheck();
  	this.loadPostings();
  }

  loginCheck() {
  	if(this.userInfo == null)
  		this.username = "Adam Yee";
  		//this.router.navigateByUrl('/login');
  	else
  		this.username = this.userInfo.name;
  }	

  cleanFeed()
	{
		var myNode = document.getElementById("bigfeed");
		while (myNode.firstChild) {
		    myNode.removeChild(myNode.firstChild);
		}
	}

	loadPostings()
	{
		this.cleanFeed();
		this.postingService.getPostings()
		.subscribe((data: Posting[]) => {
			this.p = data;
			this.blocks = 0;
			for(var i = 0; i < this.p.length; i++) {
				if(this.p[i].user == this.username)
				{
					this.rides.push(this.p[i]);
					this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
				}
			}
		});
	}

	createPosting(id, user, startadr, endadr, date, cost, capacity, comments) {
		this.transferService.setData([{"index": this.blocks, "id": id, "user": user, "startadr": startadr, "endadr": endadr, "date": date, "cost": cost, "capacity": capacity, "comments": comments, "buttonType": "Update"}]);
		this.addService.appendComponentToBody();
	    this.blocks++;
	}

}
