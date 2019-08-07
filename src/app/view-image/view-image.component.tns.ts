import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions) { }
  @ViewChild("activityIndicator", { static: true }) ai: ElementRef;
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

  onImageLoaded() {
  	let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
  	activityIndicator.busy = false;
  }
}
