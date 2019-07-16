import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { PostingService } from '../posting.service.tns';
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { Switch } from "tns-core-modules/ui/switch";
import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";
import { Color } from "tns-core-modules/color";
import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  constructor(private params: ModalDialogParams, private postingService: PostingService, private page: Page) { }

  @ViewChild('drivingLabel') dl: ElementRef;
  @ViewChild('ridingLabel') rl: ElementRef;
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
  googlePlacesAutocomplete = new GooglePlacesAutocomplete(this.API_KEY);
  ngOnInit() {

  }

  submitPost() {
  	console.log(this.startAddress);
  	console.log(this.endAddress);
  }

  close(res) {
  	this.params.closeCallback(res);
   }

   addPosting() {
    this.postingService.addPosting(this.user.username, this.startAddress, this.endAddress, this.date, this.price, this.capacity, "").subscribe(() => {
      this.close('posted');
    });
  }

  onPickerLoaded(args) {
  	let datePicker = <DatePicker>args.object;

  	var today = new Date();

  	datePicker.minDate = new Date();

  	var nextYearDate = new Date(today);
  	nextYearDate.setDate(nextYearDate.getDate() + 365);
  	datePicker.maxDate = nextYearDate;
  }

  onDateChanged(args) {
  	let datePicker = <DatePicker>args.object;
  	var selectedDate = datePicker.date;
  	// console.log(selectedDate.toString().substring(0, 15));
  	this.date = selectedDate.toString().substring(0, 15);
  }

  onCheckedChange(args) {
  	let mySwitch = args.object as Switch;
    let isChecked = mySwitch.checked; // boolean

    let drivingLabel = <Label> this.dl.nativeElement;
    let ridingLabel = <Label> this.rl.nativeElement;

    if(isChecked) {
    	drivingLabel.style.fontWeight = "400";
    	drivingLabel.style.color = new Color("#5c687c");
    	ridingLabel.style.fontWeight = "700";
    	ridingLabel.style.color = new Color("#ac00e6");
    	this.isDriving = false;
    	this.capacity = "-1";
    }
    else {
    	drivingLabel.style.fontWeight = "700";
    	drivingLabel.style.color = new Color("#ac00e6");
    	ridingLabel.style.fontWeight = "400";
    	ridingLabel.style.color = new Color("#5c687c");
    	this.isDriving = true;
    }
  }

}
