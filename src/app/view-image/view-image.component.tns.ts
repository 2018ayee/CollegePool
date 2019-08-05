import { Component, OnInit } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions) { }

  imgSource;

  ngOnInit() {
  	this.imgSource = this.transferService.getData();
  	console.log(this.imgSource);
  }

  onNavBtnTap() {
  	if(this.router.canGoBack) {
  		this.router.back();
  	}
  	else {
  		this.router.navigate(['navigation']);
  	}
  }
}
