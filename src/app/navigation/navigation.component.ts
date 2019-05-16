import { Component, OnInit } from '@angular/core';
import { TransferService } from '../datatransfer.service';
import { Router } from '@angular/router';
import { LogincheckService } from  '../logincheck.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private transferService: TransferService, private router: Router, private logincheckService: LogincheckService) { }

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
  	var route = this.router.url + 'nav';
  	this.activebtn = route.substring(1);
  	console.log(this.activebtn);
  	this.paintActive(this.activebtn);
  	if(this.activebtn == 'post')
  		document.getElementById('myModal').style.display = "block";
  	this.user = this.logincheckService.getUser();
  }

  post() {
  	if(this.activebtn == 'homenav')
  		document.getElementById('myModal').style.display = "block";
  	else
  	{
	  	this.transferService.setData('post');
	  	this.router.navigateByUrl('/home');
	  }
  }

  logout() {
    this.logincheckService.clearInfo();
    this.router.navigateByUrl('/login');
  }

  dropMenu() {
    const menu = document.getElementById('dropdown-menu');
    const caret = document.getElementById('dropdown-caret');
    if(menu.style.display == 'block'){
      caret.style.display = 'none';
      menu.style.display = 'none';
    }
    else{
      caret.style.display = 'block';
      menu.style.display = 'block';
    }
  }

  paintActive(btn) {
  	var navcontents = document.getElementsByClassName('navigation')
    for(var x = 0; x < navcontents.length; x++)
    {
        (navcontents[x] as HTMLInputElement).className = 'navigation';
    }
    document.getElementById(btn).classList.add('active');

  }

  toHome() {
    document.getElementById('dropdown-menu').style.display = 'none';
    document.getElementById('dropdown-caret').style.display = 'none';
  	this.transferService.setData('homenav');
	  this.router.navigateByUrl('/home');
  }

  toHistory()
	{
    document.getElementById('dropdown-menu').style.display = 'none';
    document.getElementById('dropdown-caret').style.display = 'none';
		this.transferService.setData('historynav');
		this.router.navigateByUrl('/history');
	}

	toSettings()
	{
    document.getElementById('dropdown-menu').style.display = 'none';
    document.getElementById('dropdown-caret').style.display = 'none';
		this.transferService.setData('settingsnav');
		this.router.navigateByUrl('/settings');
	}

  toPayments()
  {
    document.getElementById('dropdown-menu').style.display = 'none';
    document.getElementById('dropdown-caret').style.display = 'none';
    this.transferService.setData('settingsnav');
    this.router.navigateByUrl('/payments');
  }

}
