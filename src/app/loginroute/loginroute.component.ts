import { Component, OnInit } from '@angular/core';
import { LogincheckService } from '../logincheck.service';
import { TransferService } from '../datatransfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginroute',
  templateUrl: './loginroute.component.html',
  styleUrls: ['./loginroute.component.css']
})
export class LoginrouteComponent implements OnInit {

  constructor(private logincheckService: LogincheckService, private transferService: TransferService, private router: Router) { }
  idToken = this.getParameterByName("id_token");
  ngOnInit() {
  	if(this.idToken == null || this.idToken == '')
  		this.router.navigateByUrl('/login');

  	this.logincheckService.decodeToken(this.idToken);
  	this.logincheckService.checkUser();

  }

	getParameterByName(name) {
	    var url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
}
