import { Component, OnInit } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { Router } from '@angular/router';
import { PostingService } from '../posting.service';
import { Posting } from '../posting.model';
import { DynamicAddService } from '../dynamic-add.service';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  username = "2022ayee";
  user = this.logincheckService.getUser();
  name = "Adam Yee";
  rides : Posting[];
  p : Posting[];
  blocks = 0;
  constructor(private logincheckService: LogincheckService, private transferService: TransferService, private router: Router, private postingService: PostingService, private addService: DynamicAddService) { }

  ngOnInit() {
  	this.rides = [];
  	this.logincheckService.loginCheck();
  	this.loginCheck();
  	this.loadPostings();
  	this.loadViews();
  	console.log("history.component.ts");
  }

  loadViews() {
  	if(window.innerWidth < 1075)
	  		(document.getElementsByClassName('right-background')[0] as HTMLInputElement).style.visibility = "hidden";
	var feedSize = window.innerWidth - 424;
	document.getElementById('history').style.width = String(feedSize) + "px";
	

	document.getElementById('num_rides_given').innerHTML = this.user.rides_given;
	document.getElementById('num_rides_received').innerHTML = this.user.rides_received;
  }

  onResize(event) {
	  //console.log(event.target.innerWidth);
	  var feedSize = event.target.innerWidth - 424;
	  document.getElementById('history').style.width = String(feedSize) + "px";
	  //this.loadPostings();
	  if(event.target.innerWidth < 1075)
	  	(document.getElementsByClassName('right-background')[0] as HTMLInputElement).style.visibility = "hidden";
	  else
	  	(document.getElementsByClassName('right-background')[0] as HTMLInputElement).style.visibility = "visible";
	}

  loginCheck() {
  	if(this.user == null)
  		this.username = "2022ayee";
  		//this.router.navigateByUrl('/login');
  	else
  		this.username = this.user.username;
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
