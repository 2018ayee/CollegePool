import { Component, OnInit } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { LogincheckService } from  '../logincheck.service';
import {Page} from 'tns-core-modules/ui/page';
import * as dom from 'nativescript-dom';
import { Button } from 'tns-core-modules/ui/button';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.tns.html',
  styleUrls: ['./navigation.component.tns.css']
})
export class NavigationComponent implements OnInit {

  constructor(private transferService: TransferService, private router: RouterExtensions, private logincheckService: LogincheckService, private page: Page) { }

  user;
  activebtn;
  ngOnInit() {
  	// this.activebtn = this.transferService.getData();
  	// if(this.activebtn == null)
  	// {
  	// 	this.activebtn = this.router.url + 'nav';
  	// 	this.paintActive(this.activebtn);
  	// }
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
