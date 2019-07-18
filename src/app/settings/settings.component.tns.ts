import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})


export class SettingsComponent implements OnInit {


  constructor(private router: RouterExtensions, private page: Page) { }

  	ngOnInit() {

	  }
	toPayments(){
		this.router.navigate(['payments']);
	}
}
