import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { RouterExtensions } from 'nativescript-angular/router';
import {Page} from 'tns-core-modules/ui/page';
import { ActionBar } from 'tns-core-modules/ui/action-bar';
import * as dom from 'nativescript-dom';
import { Button } from 'tns-core-modules/ui/button';
import { TabView } from "tns-core-modules/ui/tab-view";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { ListView } from "tns-core-modules/ui/list-view";
import * as application from "tns-core-modules/application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.tns.html',
  styleUrls: ['./navigation.component.tns.css']
})
export class NavigationComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions, private page: Page) { }

  @ViewChild('tabView') tv: ElementRef;
  @ViewChild('actionBar') ab: ElementRef;
  user;
  activebtn;
  tabSelectedIndex = 0;
  homeTab = {iconSource: 'res://home_highlighted'};
  searchTab = {iconSource: 'res://search'};
  historyTab = {iconSource: 'res://history'};
  settingsTab = {iconSource: 'res://settings'};

  // @ViewChild('listView') lv: ElementRef;
  // listView = <ListView> this.lv.nativeElement;

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
    // console.log(this.tabSelectedIndex)

    // var justSet = false;

    // if(isAndroid)
    //   application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
    //     console.log(this.tabSelectedIndex)
    //   if (this.tabSelectedIndex === 0 && !justSet) {
    //     application.android.foregroundActivity.finish();
    //   }
    //   else {
    //     this.tv.nativeElement.selectedIndex = 0;
    //     justSet = true;
    //     setTimeout(() => {justSet = false}, 500);
    //   }
    // });
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

  home() {
    console.log(this.tabSelectedIndex);
    if(this.tabSelectedIndex == 0)
    {
      let listView = <ListView> this.page.getViewById('listView');
      listView.scrollToIndex(0);
    }
  }

  toHome() {
  	// this.transferService.setData('homenav');
	  // this.router.navigate(['home']);
    this.homeTab = {iconSource: 'res://home_highlighted'};
    this.searchTab = {iconSource: 'res://search'};
    this.historyTab = {iconSource: 'res://history'};
    this.settingsTab = {iconSource: 'res://settings'};
    this.tabSelectedIndex = 0;
  }

  toSearch()
	{
		// this.transferService.setData('historynav');
		// this.router.navigate(['history']);
    this.homeTab = {iconSource: 'res://home'};
    this.searchTab = {iconSource: 'res://search_highlighted'};
    this.historyTab = {iconSource: 'res://history'};
    this.settingsTab = {iconSource: 'res://settings'};
    this.tabSelectedIndex = 1;
	}

	toHistory()
	{
		// this.transferService.setData('settingsnav');
		// this.router.navigate(['settings']);
    this.homeTab = {iconSource: 'res://home'};
    this.searchTab = {iconSource: 'res://search'};
    this.historyTab = {iconSource: 'res://history_highlighted'};
    this.settingsTab = {iconSource: 'res://settings'};
    this.tabSelectedIndex = 2;
	}

  toSettings()
  {
    // this.transferService.setData('searchnav');
    // this.router.navigate(['search']);
    this.homeTab = {iconSource: 'res://home'};
    this.searchTab = {iconSource: 'res://search'};
    this.historyTab = {iconSource: 'res://history'};
    this.settingsTab = {iconSource: 'res://settings_highlighted'};
    this.tabSelectedIndex = 3;
  }

}
