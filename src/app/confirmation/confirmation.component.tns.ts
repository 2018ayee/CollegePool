import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private params: ModalDialogParams) { }

  ngOnInit() {
  }

  close(res) {
  	this.params.closeCallback(res);
  }

}
