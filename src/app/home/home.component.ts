import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	blocks = 1;
	span;
	userInfo;
	constructor(private router: Router) { }

	ngOnInit() {

		// window.addEventListener("resize", onWindowResize());
	    document.getElementById("defaultTab").click();
	    document.getElementById("defaultModalTab").click();
	    var size = "" + (window.innerWidth - 600) + "px";
	    console.log(size);
	    var tabcontents = document.getElementsByClassName('tabcontent')
	    for(var x = 0; x < tabcontents.length; x++)
	    {
	        (tabcontents[x] as HTMLInputElement).style.width = size;
	    }

	    // Get the modal
	    var modal = document.getElementById('myModal');

	    // Get the button that opens the modal
	    var btn = document.getElementById("Post");

	    // Get the <span> element that closes the modal
	    this.span = document.getElementsByClassName("close")[0];

	    // When the user clicks on the button, open the modal 
	    btn.onclick = function() {
	        modal.style.display = "block";
	    }

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

		var idToken = this.getParameterByName("id_token");
		this.userInfo = this.decodeToken(idToken);

		(document.getElementById("username") as HTMLInputElement).innerHTML = this.userInfo.name;
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
	// window.onresize = function(event){
	//     console.log("resize")
	//     var size = "" + (window.innerWidth - 600) + "px";
	//     console.log(size);
	//     var tabcontents = document.getElementsByClassName('tabcontent')
	//     for(var x = 0; x < tabcontents.length; x++)
	//     {
	//         tabcontents[x].style.width = size;
	//     }
	// }

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

	addPost(date, pickup, destination, comments, price="", capacity="") {
	    var div = document.createElement("div");
	    div.id = "feed"+this.blocks;
	    div.className = "feed1";
	    div.style.display = "all";
	    div.style.marginTop = "50px";
	    div.style.marginBottom = "50px";
	    //div.style.paddingLeft = "20%";
	    //div.style.width = "40%";
	    document.getElementById('bigfeed').appendChild(div);
	    
	    var divtext = document.createElement("div");
	    document.getElementById('feed'+this.blocks).appendChild(divtext);
	    divtext.id = "text"+this.blocks;
	    
	    var img = document.createElement("IMG");
	    document.getElementById('text'+this.blocks).appendChild(img);
	    img.id = "pfp"+this.blocks;
	    document.getElementById("pfp");
	    img.className = "pfp";
	    (img as HTMLInputElement).src = "src/img/sample_profile.jpg";
	    
	    var header1 = document.createElement("h1");
	    document.getElementById('text'+this.blocks).appendChild(header1);
	    header1.id = "name"+this.blocks;
	    header1.innerHTML = "Adam Yee";
	    header1.className = "header";
	    
	    var p1 = document.createElement('p');
	    document.getElementById('text'+this.blocks).appendChild(p1);
	    p1.id = "details"+this.blocks;
	    p1.innerHTML = "Leaving " + date + " from " + pickup + " to " + destination + " for " + price;
	    p1.className = "details";
	    
	    var map1 = document.createElement("IMG")
	    document.getElementById('text'+this.blocks).appendChild(map1);
	    map1.id = "map"+this.blocks;
	    map1.className = "destination";
	    (map1 as HTMLInputElement).src = "src/img/virginia_map.jpg";

	    var buttonhouse1 = document.createElement("div");
	    document.getElementById('text'+this.blocks).appendChild(buttonhouse1);
	    buttonhouse1.id = "buttonhouse"+this.blocks;
	    buttonhouse1.className = "buttonhouse";
	    
	    var connect = document.createElement("button");
	    document.getElementById('buttonhouse'+this.blocks).appendChild(connect);
	    connect.id = "connect"+this.blocks;
	    connect.className = "buttons";
	    connect.innerHTML = "Connect";
	    this.blocks++;
	}

	toHistory()
	{
		this.router.navigateByUrl('/history');
	}

	toSettings()
	{
		this.router.navigateByUrl('/settings');
	}
}
