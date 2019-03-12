import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../datatransfer.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  id;
  buttonType;

  info = this.transferService.getData()[0];
  constructor(private transferService: TransferService, private router: Router) {
  }

  ngOnInit() {
  	this.id = this.info.id;
  	this.buttonType = this.info.buttonType;
  	this.create();
  }

  create() {
  	console.log(this.info);
  	console.log(this.info.index);
	var div = document.createElement("div");
    div.id = "feed"+ this.info.index;
    div.className = "feed1";
    div.style.display = "all";
    div.style.marginTop = "50px";
    div.style.marginBottom = "50px";
    //div.style.paddingLeft = "20%";
    //div.style.width = "40%";
    document.getElementById('bigfeed').appendChild(div);
    
    var divtext = document.createElement("div");
    document.getElementById('feed'+ this.info.index).appendChild(divtext);
    divtext.id = "text"+ this.info.index;
    
    var img = document.createElement("IMG");
    document.getElementById('text'+ this.info.index).appendChild(img);
    img.id = "pfp"+ this.info.index;
    document.getElementById("pfp");
    img.className = "pfp";
    (img as HTMLInputElement).src = "src/img/sample_profile.jpg";
    
    var header = document.createElement("h1");
    document.getElementById('text'+ this.info.index).appendChild(header);
    header.id = "name"+ this.info.index;
    header.innerHTML = this.info.user;
    header.className = "header";
    
    var p = document.createElement('p');
    document.getElementById('text'+ this.info.index).appendChild(p);
    p.id = "details"+ this.info.index;
    p.innerHTML = "Leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr + " for " + this.info.cost;
    p.className = "details";
    
    var map = document.createElement("IMG")
    document.getElementById('text'+ this.info.index).appendChild(map);
    map.id = "map"+ this.info.index;
    map.className = "destination";
    (map as HTMLInputElement).src = "src/img/virginia_map.jpg";

    var buttonhouse = document.createElement("div");
    document.getElementById('text'+ this.info.index).appendChild(buttonhouse);
    buttonhouse.id = "buttonhouse"+ this.info.index;
    buttonhouse.className = "buttonhouse";
    
    var connect = document.createElement("button");
    document.getElementById('buttonhouse'+ this.info.index).appendChild(connect);
    connect.id = this.buttonType + this.info.index;
    connect.className = "buttons";
    connect.innerHTML = this.info.buttonType;
    connect.addEventListener("click", (e:Event) => this.clicked(this.info.buttonType));
  }
  clicked(buttonType){
  	this.transferService.setData(this.info);
  	if(buttonType == "Connect")
		this.router.navigateByUrl('/connect');
	else
		this.router.navigateByUrl('/update');
  }

}
