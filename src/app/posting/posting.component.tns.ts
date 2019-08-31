import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../datatransfer.service';
import { Page } from 'tns-core-modules/ui/page';
import { Label } from 'tns-core-modules/ui/label';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  id;
  buttonType;

  info = this.transferService.getData()[0];

  infoText = "Leaving " +  this.info.date + " from " + this.info.startadr + " to " + this.info.endadr + " for " + this.info.cost;
  constructor(private transferService: TransferService, private router: Router, private page: Page) {
  }

  ngOnInit() {
  	// this.id = this.info.id;
  	// this.buttonType = this.info.buttonType;
    // const name_label = <Label>this.page.getViewById('post-name');
    // name_label.text = this.info.user;
    // name_label.id = 'post-name' + this.info.index;
    // const info_label = <Label>this.page.getViewById('post-info');
    // if(this.info.capacity > 0)
    //   info_label.text = "Offering ride leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr + " for " + this.info.cost;
    // else
    //   info_label.text = "Requesting ride leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr;
    // info_label.id = 'post-info' + this.info.index;
    // // console.log("created post");
  	// // this.create();
  }

  create() {
  	// console.log(this.info);
  	// console.log(this.info.index);
	  // var div = document.createElement("div");
    // div.id = "feed"+ this.info.index;
    // div.className = "posting-block";
    // div.style.display = "all";
    // div.style.margin = "auto";
    // div.style.marginTop = "0.5em";
    // div.style.marginBottom = "0.5em";

    // //div.style.paddingLeft = "20%";
    // //div.style.width = "40%";
    // document.getElementById('bigfeed').appendChild(div);
    
    // var divtext = document.createElement("div");
    // document.getElementById('feed'+ this.info.index).appendChild(divtext);
    // divtext.id = "text"+ this.info.index;
    
    // var img = document.createElement("IMG");
    // document.getElementById('text'+ this.info.index).appendChild(img);
    // img.id = "pfp"+ this.info.index;
    // document.getElementById("pfp");
    // img.className = "pfp";
    // (img as HTMLInputElement).src = "src/img/sample_profile.jpg";
    
    // var header = document.createElement("h1");
    // document.getElementById('text'+ this.info.index).appendChild(header);
    // header.id = "name"+ this.info.index;
    // header.innerHTML = this.info.user;
    // header.className = "header";
    
    // var p = document.createElement('p');
    // document.getElementById('text'+ this.info.index).appendChild(p);
    // p.id = "details"+ this.info.index;
    // p.innerHTML = "Leaving " + this.info.date + " from " + this.info.startadr + " to " + this.info.endadr + " for " + this.info.cost;
    // p.className = "details";
    
    // var map = document.createElement("IMG")
    // document.getElementById('text'+ this.info.index).appendChild(map);
    // map.id = "map"+ this.info.index;
    // map.className = "destination";
    // (map as HTMLInputElement).src = "src/img/virginia_map.jpg";
    
    // var connect = document.createElement("button");
    // document.getElementById('text'+ this.info.index).appendChild(connect);
    // connect.id = this.buttonType + this.info.index;
    // connect.className = "posting-button";
    // connect.innerHTML = this.info.buttonType;
    // connect.style.marginRight = "1em";
    // connect.addEventListener("click", (e:Event) => this.clicked(this.info.buttonType));
  }
  clicked(buttonType){
  	this.transferService.setData(this.info);
  	if(buttonType == "Connect")
		this.router.navigateByUrl('/connect');
	else
		this.router.navigateByUrl('/update');
  }

}
