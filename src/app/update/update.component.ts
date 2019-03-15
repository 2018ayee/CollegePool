import { Component, OnInit } from '@angular/core';
import { LogincheckService } from '../logincheck.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private logincheckService: LogincheckService) { }

  ngOnInit() {
  	this.logincheckService.loginCheck();
  }

}
