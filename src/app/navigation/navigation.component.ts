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
  	this.activebtn = this.transferService.getData();
  	if(this.activebtn == null)
  		this.paintActive('homenav');
  	else if(this.activebtn == 'post')
  		document.getElementById('myModal').style.display = "block";
  	else
  		this.paintActive(this.activebtn);
  	this.user = this.logincheckService.getUser();
  }

  post() {
  	this.transferService.setData('post');
  	this.router.navigateByUrl('/home');
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
  	this.transferService.setData('homenav');
	this.router.navigateByUrl('/home');
  }

  toHistory()
	{
		this.transferService.setData('historynav');
		this.router.navigateByUrl('/history');
	}

	toSettings()
	{
		this.transferService.setData('settingsnav');
		this.router.navigateByUrl('/settings');
	}

}
