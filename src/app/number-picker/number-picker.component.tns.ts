import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";

@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent implements OnInit {

  capacity = 1;
  constructor(private params: ModalDialogParams) { }

  ngOnInit() {
  }

  close() {
  	this.params.closeCallback(this.capacity);
  }

  cancel() {
  	this.params.closeCallback();
  }

}
