import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { Person } from "../person";
import { LogincheckService } from '../logincheck.service.tns';
import * as firebase from 'nativescript-plugin-firebase';


@Component({
	moduleId: module.id,
    selector: "app-settings",
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})


export class SettingsComponent implements OnInit {
	private _person: Person;

  constructor(private router: RouterExtensions, private page: Page, private logincheckService: LogincheckService) { }

  	ngOnInit() {
		this._person = new Person("Phillim", "Das", "john@company.com", "12224443333", "232 Rodman Road");
		console.log(this._person)
	}
	  get person(): Person {
        return this._person;
    }
	toPayments(){
		this.router.navigate(['payments']);
	}

	logOut() {
		firebase.logout();
		this.logincheckService.clearInfo();
		this.router.navigate(['welcome'], {clearHistory: true});
	}
}
