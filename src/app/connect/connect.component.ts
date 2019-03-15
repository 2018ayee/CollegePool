import { Component, OnInit } from '@angular/core';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private logincheckService: LogincheckService) { }

  ngOnInit() {
  	this.logincheckService.loginCheck();
  }

}
