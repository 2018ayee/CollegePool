import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router) { }

  	ngOnInit() {
  		// @Input('userInfo') userInfo: String;
  		// console.log(userInfo);
	}
}
