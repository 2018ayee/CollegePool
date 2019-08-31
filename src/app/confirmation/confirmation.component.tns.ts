import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private params: ModalDialogParams, private router: RouterExtensions) { }

  ngOnInit() {
  }

  close(res) {
    console.log("res", res)
    if(res==="delete"){
      this.router.navigate(['navigation'], {clearHistory: true})
    }
    else{
      this.params.closeCallback(res);
    }
  }

}
