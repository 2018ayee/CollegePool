import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { PostingService } from '../posting.service.tns';
// import { DatePicker } from "tns-core-modules/ui/date-picker";
// import { Switch } from "tns-core-modules/ui/switch";
// import { Page } from "tns-core-modules/ui/page";
// import { Label } from "tns-core-modules/ui/label";
// import { Color } from "tns-core-modules/color";
// import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  constructor(private postingService: PostingService) { }

  @ViewChild('drivingLabel', { static: true }) dl: ElementRef;
  @ViewChild('ridingLabel', { static: true }) rl: ElementRef;
  startAddress;
  endAddress;
  date = "now";
  price = "$15";
  capacity = "-1";
  user = {
  	username: "2022ayee"
  };
  isDriving = false;

  API_KEY = "AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg";
  // googlePlacesAutocomplete = new GooglePlacesAutocomplete(this.API_KEY);
  ngOnInit() {

  }
}
