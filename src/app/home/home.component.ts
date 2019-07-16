import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostingService } from '../posting.service';
import { UserService } from '../user.service';
import { Posting } from '../posting.model';
import { User } from '../user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TransferService } from '../datatransfer.service';
import { DynamicAddService } from '../dynamic-add.service';
// import { Auth } from 'aws-amplify';
// import { CognitoAuth } from 'amazon-cognito-auth-js';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	blocks = 1;
	span;
	idToken = this.getParameterByName("id_token");
	//userInfo = this.decodeToken(this.idToken);
	p : Posting[];
	users : User[];
	user;

	constructor(private logincheckService: LogincheckService, private transferService: TransferService, private router: Router, 
		private postingService: PostingService, private userService: UserService, private addService: DynamicAddService) { }

	ngOnInit() {

		this.logincheckService.loginCheck();

		this.user = this.logincheckService.getUser();

		console.log(this.user);

	    this.loadViews();

		this.loadPostings();
	}

	loadViews() {

		document.getElementById('num_rides_given').innerHTML = this.user.rides_given;
	    document.getElementById('num_rides_received').innerHTML = this.user.rides_received;
	    document.getElementById('username').innerHTML = this.user.name;

		//document.getElementById("defaultTab").click();
	    document.getElementById("defaultModalTab").click();
	    var size = "" + (window.innerWidth - 600) + "px";
	    //console.log(size);
	    var tabcontents = document.getElementsByClassName('tabcontent')
	    for(var x = 0; x < tabcontents.length; x++)
	    {
	        (tabcontents[x] as HTMLInputElement).style.width = size;
	    }

	    // Get the modal
	    var modal = document.getElementById('myModal');

	    // Get the button that opens the modal
	    //var btn = document.getElementById("Post");

	    // Get the <span> element that closes the modal
	    this.span = document.getElementsByClassName("close")[0];

	    // When the user clicks on the button, open the modal 
	    // btn.onclick = function() {
	    //     modal.style.display = "block";
	    // }

	    // When the user clicks on <span> (x), close the modal
	    this.span.onclick = function() {
	        modal.style.display = "none";
	    }

	    // When the user clicks anywhere outside of the modal, close it
	    window.onclick = function(event) {
	        if (event.target == modal) {
	            modal.style.display = "none";
	        }
	    }

	    if(window.innerWidth < 1075)
	  		(document.getElementsByClassName('right-background')[0] as HTMLInputElement).style.visibility = "hidden";
	    var feedSize = window.innerWidth - 424;

	    if(this.transferService.getData() == 'post')
	    	document.getElementById('myModal').style.display = "block";
	  	document.getElementById('Feed').style.width = String(feedSize) + "px";
	}

	onResize(event) {
	  //console.log(event.target.innerWidth);
	  var feedSize = event.target.innerWidth - 424;
	  document.getElementById('Feed').style.width = String(feedSize) + "px";
	  //this.loadPostings();
	  if(event.target.innerWidth < 1075)
	  	(document.getElementsByClassName('right-background')[0] as HTMLInputElement).style.visibility = "hidden";
	  else
	  	(document.getElementsByClassName('right-background')[0] as HTMLInputElement).style.visibility = "visible";
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
				this.createPosting(this.p[i]._id, this.p[i].user, this.p[i].startadr, this.p[i].endadr, this.p[i].date, this.p[i].cost, this.p[i].capacity, this.p[i].comments);
			}
		});
	}

	createPosting(id, user, startadr, endadr, date, cost, capacity, comments) {
		this.transferService.setData([{"index": this.blocks, "id": id, "user": user, "startadr": startadr, "endadr": endadr, "date": date, "cost": cost, "capacity": capacity, "comments": comments, "buttonType": "Connect"}]);
		this.addService.appendComponentToBody();
	    this.blocks++;
	}

	decodeToken(idToken)
	{
		const helper = new JwtHelperService();

		const decodedToken = helper.decodeToken(idToken);
		const expirationDate = helper.getTokenExpirationDate(idToken);
		const isExpired = helper.isTokenExpired(idToken);
		console.log(decodedToken);
		return decodedToken;
	}

	getParameterByName(name) {
	    var url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	changeTab(evt, tab){
		// Declare all variables
	    var i, tabcontent, tablinks;

	    // Get all elements with class="tabcontent" and hide them
	    tabcontent = document.getElementsByClassName("tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
	        (tabcontent[i] as HTMLElement).style.display = "none";
	    }

	    // Get all elements with class="tablinks" and remove the class "active"
	    tablinks = document.getElementsByClassName("tablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        tablinks[i].className = tablinks[i].className.replace(" active", "");
	    }

	    // Show the current tab, and add an "active" class to the link that opened the tab
	    document.getElementById(tab).style.display = "block";
	    evt.currentTarget.className += " active";
	}

	changeModalTab(evt, tab){
	    // Declare all variables
	    var i, tabcontent, tablinks;

	    // Get all elements with class="tabcontent" and hide them
	    tabcontent = document.getElementsByClassName("modaltabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
	        tabcontent[i].style.display = "none";
	    }

	    // Get all elements with class="tablinks" and remove the class "active"
	    tablinks = document.getElementsByClassName("modaltablinks");
	    for (i = 0; i < tablinks.length; i++) {
	        tablinks[i].className = tablinks[i].className.replace(" active", "");
	    }

	    // Show the current tab, and add an "active" class to the link that opened the tab
	    document.getElementById(tab).style.display = "block";
	    evt.currentTarget.className += " active";
	}

	submit(type){
	    this.span.click();
	    if(type == 'offer')
	    {
	        var departureDate = (document.getElementById("departureOffer") as HTMLInputElement).value;
	        var pickup = (document.getElementById("pickupOffer") as HTMLInputElement).value;
	        var destination = (document.getElementById("destinationOffer") as HTMLInputElement).value;
	        var price = (document.getElementById("priceOffer") as HTMLInputElement).value;
	        var capacity = (document.getElementById("capacityOffer") as HTMLInputElement).value;
	        var comments = (document.getElementById("commentsOffer") as HTMLInputElement).value;
	        this.addPost(departureDate, pickup, destination, comments, price, capacity);
	    }
	    else{
	        var departureDate = (document.getElementById("departureRequest") as HTMLInputElement).value;
	        var pickup = (document.getElementById("pickupRequest") as HTMLInputElement).value;
	        var destination = (document.getElementById("destinationRequest") as HTMLInputElement).value;
	        var comments = (document.getElementById("commentsOffer") as HTMLInputElement).value;
	        this.addPost(departureDate, pickup, destination, comments);
	    }
	}

	filter(newsType){
	    var requestContent = (document.getElementsByClassName("request") as HTMLCollectionOf<HTMLInputElement>);
	    var offerContent = (document.getElementsByClassName("offer") as HTMLCollectionOf<HTMLInputElement>);
	    if(newsType == "offer"){
	        for (var i = 0; i < requestContent.length; i++) {
	            (requestContent[i] as HTMLInputElement).style.display = "none";
	        }
	        for (var i = 0; i < offerContent.length; i++) {
	            (offerContent[i] as HTMLInputElement).style.display = "block";
	        }
	    }
	    else if(newsType == "request"){
	        for (var i = 0; i < requestContent.length; i++) {
	            (requestContent[i] as HTMLInputElement).style.display = "block";
	        }
	        for (var i = 0; i < offerContent.length; i++) {
	            (offerContent[i] as HTMLInputElement).style.display = "none";
	        }
	    }
	    else if(newsType == "all"){
	        for (var i = 0; i < requestContent.length; i++) {
	            (requestContent[i] as HTMLInputElement).style.display = "block";
	        }
	        for (var i = 0; i < offerContent.length; i++) {
	            (offerContent[i] as HTMLInputElement).style.display = "block";
	        }
	    }
	}

	addPost(date, pickup, destination, comments, price="", capacity="-1") {
		this.postingService.addPosting(this.user.username, pickup, destination, date, price, capacity, comments).subscribe(() => {
			this.loadPostings();
		});
	}

	toHistory()
	{
		this.transferService.setData(this.user);
		this.router.navigateByUrl('/history');
	}

	toSettings()
	{
		this.transferService.setData(this.user);
		this.router.navigateByUrl('/settings');
	}
}
