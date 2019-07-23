import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { LogincheckService } from '../logincheck.service.tns';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})


export class SettingsComponent implements OnInit {


  constructor(private router: RouterExtensions, private page: Page, private logincheckService: LogincheckService) { }

  	ngOnInit() {

	  }
	toPayments(){
		this.router.navigate(['payments']);
	}

	logOut() {
		this.logincheckService.clearInfo();
		this.router.navigate(['welcome']);
	}
}
