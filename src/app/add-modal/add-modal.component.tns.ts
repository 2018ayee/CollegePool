import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { PostingService } from '../posting.service.tns';
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { Switch } from "tns-core-modules/ui/switch";
import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";
import { Color } from "tns-core-modules/color";
import { PlacesAutocompleteService } from '../places-autocomplete.service';
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { LocationComponent } from '../location/location.component';
import { TransferService } from '../datatransfer.service';
// import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  constructor(private params: ModalDialogParams, private postingService: PostingService, private page: Page, private placesService: PlacesAutocompleteService,
    private modal: ModalDialogService, private vcRef: ViewContainerRef, private transferService: TransferService) { }

  @ViewChild('drivingLabel') dl: ElementRef;
  @ViewChild('ridingLabel') rl: ElementRef;
  // @ViewChild('startLabel') sl: ElementRef;
  // @ViewChild('endLabel') el: ElementRef;

  startSuggestions: String[];
  endSuggestions: String[];
  startPlace;
  endPlace;
  startAddress;
  endAddress;
  date = "now";
  price = "$15";
  capacity = "-1";
  user = {
  	username: "2022ayee"
  };
  startLabel = "Pick start location";
  endLabel = "Pick end location";

  isDriving = false;
  startLocationPicked = false;
  endLocationPicked = false;


  API_KEY = "AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg";
  // googlePlacesAutocomplete = new GooglePlacesAutocomplete(this.API_KEY);
  ngOnInit() {

  }

  startSelect(event: Event) {
    console.log(event.srcElement);
  }

  showModal(type) {
    let options = {
        context: {},
        fullscreen: true,
        viewContainerRef: this.vcRef
        // animated: true,
        // transition: { name: "slideTop" }
    };
    this.transferService.setData(type);
    this.modal.showModal(LocationComponent, options).then(res => {
        // console.log(res);
        if(res != null)
          if(res.start != null) {
            this.startLocationPicked = true;
            this.startLabel = 'Start location: ' + res.start;
            this.startPlace = res.start;
            this.startAddress = res.address;

            // let sLabel = <Label> this.sl.nativeElement;
            // sLabel.className += 'bold';
          }
          else if(res.end != null) {
            this.endLocationPicked = true;
            this.endLabel = 'End location: ' + res.end;
            this.endPlace = res.end;
            this.endAddress = res.address;
          }
        else {
          if(type == 'start') {
            this.startLocationPicked = true;
            this.startLabel = 'Pick start location';
          }
          else if(type == 'end') {
            this.startLocationPicked = true;
            this.startLabel = 'Pick end location';
          }
        }
    });
  }

  close(res) {
  	this.params.closeCallback(res);
   }

   addPosting() {
     if(this.startLocationPicked && this.endLocationPicked)
      this.postingService.addPosting(this.user.username, this.startPlace, this.endPlace, this.date, this.price, this.capacity, "").subscribe(() => {
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
