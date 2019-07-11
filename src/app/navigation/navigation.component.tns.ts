import { Component, OnInit } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { RouterExtensions } from 'nativescript-angular/router';
import {Page} from 'tns-core-modules/ui/page';
import * as dom from 'nativescript-dom';
import { Button } from 'tns-core-modules/ui/button';
import { TabView } from "tns-core-modules/ui/tab-view";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.tns.html',
  styleUrls: ['./navigation.component.tns.css']
})
export class NavigationComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions, private page: Page) { }

  user;
  activebtn;
  tabSelectedIndex;
  homeTab = {iconSource: 'res://home_highlighted'};
  searchTab = {iconSource: 'res://search'};
  historyTab = {iconSource: 'res://history'};
  settingsTab = {iconSource: 'res://settings'};

  ngOnInit() {
  	this.activebtn = this.transferService.getData();
  	if(this.activebtn == "homenav") {
      this.homeTab = {iconSource: 'res://home_highlighted'};
      this.searchTab = {iconSource: 'res://search'};
      this.historyTab = {iconSource: 'res://history'};
      this.settingsTab = {iconSource: 'res://settings'};
      this.tabSelectedIndex = 0;
  	} else if(this.activebtn == "searchnav") {
      this.homeTab = {iconSource: 'res://home'};
      this.searchTab = {iconSource: 'res://search_highlighted'};
      this.historyTab = {iconSource: 'res://history'};
      this.settingsTab = {iconSource: 'res://settings'};
      this.tabSelectedIndex = 1;
    }
    else if(this.activebtn == "historynav") {
      this.homeTab = {iconSource: 'res://home'};
      this.searchTab = {iconSource: 'res://search'};
      this.historyTab = {iconSource: 'res://history_highlighted'};
      this.settingsTab = {iconSource: 'res://settings'};
      this.tabSelectedIndex = 2;
    }
    else if(this.activebtn == "settingsnav") {
      this.homeTab = {iconSource: 'res://home'};
      this.searchTab = {iconSource: 'res://search'};
      this.historyTab = {iconSource: 'res://history'};
      this.settingsTab = {iconSource: 'res://settings_highlighted'};
      this.tabSelectedIndex = 3;
    }
  	// else if(this.activebtn == 'post')
  	// 	document.getElementById('myModal').style.display = "block";
  	// else
  	// 	this.paintActive(this.activebtn);
  	//var route = this.router.router + 'nav';
  	//this.activebtn = route.substring(1);
  	//console.log(this.activebtn);
  	//this.paintActive(this.activebtn);
  	//this.user = this.logincheckService.getUser();
  }
  paintActive(btn) {
  	const navcontents = dom.getElementsByClassName('navigation')
    for(var x = 0; x < navcontents.length; x++)
    {
        navcontents[x].className = 'navigation';
    }
    const button = <Button>this.page.getViewById(btn);
    button.className += ' active';

  }

  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        if (args.oldIndex !== -1) {
            const newIndex = args.newIndex;
            if (newIndex === 0) {
                this.toHome();
            } else if (newIndex === 1) {
                this.toSearch();
            } else if (newIndex === 2) {
                this.toHistory();
            } else if (newIndex === 3) {
                this.toSettings();
            }
        }
    }

  toHome() {
  	this.transferService.setData('homenav');
	  this.router.navigate(['home']);
  }

  toHistory()
	{
		this.transferService.setData('historynav');
		this.router.navigate(['history']);
	}

	toSettings()
	{
		this.transferService.setData('settingsnav');
		this.router.navigate(['settings']);
	}

  toSearch()
  {
    this.transferService.setData('searchnav');
    this.router.navigate(['search']);
  }

}
