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
import { LogincheckService } from '../logincheck.service.tns';
import * as firebase from 'nativescript-plugin-firebase';
import { DatePipe } from '@angular/common';
import { Cache } from 'tns-core-modules/ui/image-cache';
import { GoogleMapsService } from '../google-maps.service';
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import {Folder, path, knownFolders} from "tns-core-modules/file-system";
import * as fs from "tns-core-modules/file-system";
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';
import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';
import { pricing } from '../pricing-cloud.tns';
import * as ModalPicker from 'nativescript-modal-datetimepicker';

// import { GooglePlacesAutocomplete } from 'nativescript-google-places-autocomplete';

class Comment {
  public comment: string;

  constructor(name: string) {
      this.comment = name;
  }
}
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  constructor(private params: ModalDialogParams, private postingService: PostingService, private page: Page, private placesService: PlacesAutocompleteService,
    private modal: ModalDialogService, private vcRef: ViewContainerRef, private transferService: TransferService, private logincheckService: LogincheckService,
    private datePipe: DatePipe, private mapService: GoogleMapsService, private price: pricing) { }

  @ViewChild('drivingLabel', { static: true }) dl: ElementRef;
  @ViewChild('ridingLabel', { static: true }) rl: ElementRef;
  @ViewChild('activityIndicator', { static: true }) ai: ElementRef;
  @ViewChild('addContainer', { static: true }) ac: ElementRef;
  // @ViewChild('startLabel') sl: ElementRef;
  // @ViewChild('endLabel') el: ElementRef;

  startSuggestions: String[];
  endSuggestions: String[];
  startPlace;
  endPlace;
  startAddress;
  endAddress;
  formattedDate;
  date;
  //price = "$15";
  capacity = "-1";
  commentText = "";
  user = {
  	username: "2022ayee",
    id: ""
  };
  startLabel = "Pick start location";
  endLabel = "Pick end location";
  dateLabel = "Pick date";
  picker;
  startLat;
  startLng;
  endLat;
  endLng;

  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  isDriving = false;
  startLocationPicked = false;
  endLocationPicked = false;
  imageSource = new ImageSource();
  comment;
  validator ="Notes are limited to 150 characters";
  iswithinLimit = true;
  limitHelper = "";

  API_KEY = "AIzaSyAITxS1jmf8PMtazRguWcAfWQxW1kPOoYg";
  // googlePlacesAutocomplete = new GooglePlacesAutocomplete(this.API_KEY);
  ngOnInit() {
    // let addContainer = <FlexboxLayout> this.ac.nativeElement;
    //  // activityIndicator.style.visibility = 'visible';
    // addContainer.style.visibility = 'collapse';
    this.picker = new ModalPicker.ModalDatetimepicker;
    let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
    activityIndicator.style.visibility = 'collapse'
    //console.log("Your app has started!");
    firebase.getCurrentUser().then(user => {
      console.log("ngOnInit");
      this.user.username = user.displayName;
      if(user.displayName == null || user.displayName == '')
        this.user.username = user.email;
      this.user.id = this.logincheckService.getUser();
    })
    this.comment = new Comment("");
  }

  get person(): Comment {
    return this.comment;
}

// dfPropertyCommitted(args) {
//   console.log(this.comment.comment.length);
//   this.validator = this.comment.comment.length;
// }

onPropertyValidate(args) {
  this.limitHelper="s"
}
// << angular-dataform-property-validate-event

public onPropertyValidated(args) {
  // console.log("a2f");
  if(this.limitHelper =="s")
    this.iswithinLimit = true;
  else
    this.iswithinLimit=false;
  this.limitHelper="";
}
  showText() {
      alert("Text: " + this.commentText);
  }
  startSelect(event: Event) {
    console.log("startSelect");
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
    console.log("showModal")
    this.transferService.setData(type);
    this.modal.showModal(LocationComponent, options).then(res => {
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
    if(!this.startPlace || !this.endPlace){
      alert("Please enter a starting and ending location before posting.");
      return;
    }
    if(!this.iswithinLimit){
      alert("Please enter a note that is 150 characters or less.")
      return;
    }
     let addContainer = <FlexboxLayout> this.ac.nativeElement;
     addContainer.style.visibility = 'collapse';
     let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
     activityIndicator.style.visibility = 'visible';
     this.mapService.getGeocodeResults(this.startPlace + ' ' + this.startAddress).subscribe((res: any) => {
      this.startLat = res.results[0].geometry.location.lat;
      this.startLng = res.results[0].geometry.location.lng;
      this.mapService.getGeocodeResults(this.endPlace + ' ' + this.endAddress).subscribe((res: any) => {
        this.endLat = res.results[0].geometry.location.lat;
        this.endLng = res.results[0].geometry.location.lng;

        if(this.startLocationPicked && this.endLocationPicked) {
          if(!this.isDriving){
            this.capacity = "-"+this.capacity;
          }
        let formattedText = this.commentText.trim();
        // console.log("Fromatted",formattedText)
        // formattedText.join(" ");
        // console.log("textfo", formattedText)
         var postingsCollection = firebase.firestore.collection('postings');
         //console.log(this.startPlace);
         //console.log(this.endPlace);
         this.mapService.getDistance(this.startPlace, this.endPlace).subscribe(res => {
            //console.log(res);
            //console.log(res['rows'][0]['elements'][0]['distance']['text']);
            var distance_string = res['rows'][0]['elements'][0]['distance']['text'];
            var duration = res['rows'][0]['elements'][0]['duration']['value'];
            //console.log("duration type:");
            //console.log(typeof duration);
            //console.log(distance_string.split(',').join(""));
            var distance = parseInt(distance_string.split(',').join(""), 10);//.substring(0, distance_string.length()-3), 10);
            //console.log(distance); 
            //console.log(typeof distance);
            //console.log("duration: " + res['rows'][0]['elements'][0]['duration']['text']);
            //this.price = require('../../../backend/data/pricing')({"distance": distance, "capacity": this.capacity, "duration": duration});
               //console.log("capacity: " + this.capacity);
           this.price.noUpdate(distance, 1, this.capacity, Date.now(), Date.now(), (new Date(this.date).getTime())).subscribe(res => {
              //console.log(this.price);
             postingsCollection.add({
               uid: this.user.id,
               user: this.user.username,
               startAddress: this.startPlace,
               endAddress: this.endPlace,
               startFormatted: this.startAddress,
               endFormatted: this.endAddress,
               date: this.date,
               unixDate: (new Date(this.date).getTime()),
               price: res,
               capacity: this.capacity,
               comments: this.comment.comment.trim(),
               formattedDate: this.formattedDate,
               startLat: this.startLat,
               endLat: this.endLat,
               startLng: this.startLng,
               endLng: this.endLng,
               timeStamp: Date.now(),
               distance: distance,
               riders: 1
             }).then(res => {
               // console.log(res);
               console.log("finished add!");
               firebase.firestore.collection('users').doc(this.user.id).get().then(doc => {
                 var posts: String[] = doc.data().posts;
                 posts.push(res.id);
                 firebase.firestore.collection('users').doc(this.user.id).update({
                   posts: posts
                 })
                 this.uploadMap(res.id, 'small_map.png');
                 this.uploadMap(res.id, 'large_map.png');
               }).catch((err) => {})
             }).catch((err) => {})
            });
           

         });
       }
       else{
         alert("Please enter a starting and ending location before posting.");
         let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
         let addContainer = <FlexboxLayout> this.ac.nativeElement;
         activityIndicator.style.visibility = 'collapse';
         addContainer.style.visibility = 'visible';
       }
      });
    });
      // this.postingService.addPosting(this.user.username, this.startPlace, this.endPlace, this.date, this.price, this.capacity, "").subscribe(() => {
      //   this.close('posted');
      // });
  }
  // clearTextfieldFocus(args) {
  //   var layout = args.object;
  //   var commentForm = layout.getViewById("comment-form");
  //   var textField = commentForm.getViewById("text-field")
  //   textField.android.clearFocus();
  //   textField.dismissSoftInput();
  // }
  clearTextfieldFocus(args) {
    var layout = args.object;
    var commentForm = layout.getViewById("comment-form");
    var textField = commentForm.getViewById("text-field");
    var editor = textField.getViewById('editor');
    // console.log("editor2", editor2, 'textfield', textField)
    textField.android.clearFocus();
    editor.set("readOnly", true);
    editor.set("readOnly", false);
  }
  
  uploadMap(id, uploadName) {
    const cache = new Cache();
    cache.enableDownload();
    let cachedImageSource;
    var url = this.mapService.getStaticMap(this.startPlace + " " + this.startAddress, this.endPlace + " " + this.endAddress);
    if(uploadName == 'large_map.png')
      url = this.mapService.getStaticMapLarge(this.startPlace + " " + this.startAddress, this.endPlace + " " + this.endAddress);
    // Try to read the image from the cache
    const myImage = cache.get(url);
    cache.push({
    key: url,
    url: url,
    completed: (image, key) => {
            if (url === key) {
                cachedImageSource = this.imageSource.setNativeSource(image);
                const folderPath: string = knownFolders.documents().path;
                const fileName = uploadName;
                const filePath = path.join(folderPath, fileName);
                const saved: boolean = this.imageSource.saveToFile(filePath, "png");
                if (saved) {
                    firebase.storage.uploadFile({
                      // the full path of the file in your Firebase storage (folders will be created)
                      remoteFullPath: 'postings/' + id + '/maps/' + uploadName,
                      // option 1: a file-system module File object
                      localFile: fs.File.fromPath(filePath),
                      // option 2: a full file path (ignored if 'localFile' is set)
                      localFullPath: filePath,
                      // get notified of file upload progress
                      onProgress: (status) => {
                        console.log("Uploaded fraction: " + status.fractionCompleted);
                        console.log("Percentage complete: " + status.percentageCompleted);
                      }
                    }).then((uploadedFile) => {
                      if(uploadName == 'small_map.png')
                        firebase.storage.getDownloadUrl({
                          remoteFullPath: 'postings/' + id + '/maps/small_map.png'
                        }).then((url) => {
                          firebase.firestore.collection('postings').doc(id).update({
                            map_url: url
                          }).then(() => {
                            let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
                            let addContainer = <FlexboxLayout> this.ac.nativeElement;
                            activityIndicator.style.visibility = 'collapse';
                            addContainer.style.visibility = 'visible';
                            this.close('posted');
                          })
                          .catch((err) => {

                          })
                        })
                    }).catch((err) => {

                    })
                }
            }
        }
    })
  }

  onPickerLoaded(args) {
  	let datePicker = <DatePicker>args.object;

  	var today = new Date();

  	datePicker.minDate = new Date();

  	var nextYearDate = new Date(today);
  	nextYearDate.setDate(nextYearDate.getDate() + 365);
    datePicker.maxDate = nextYearDate;
    this.onDateChanged(args);
    console.log("Date", this.date)
  }

  onDateChanged(args) {
  	let datePicker = <DatePicker>args.object;
  	var selectedDate = datePicker.date;
    this.formattedDate = this.datePipe.transform(selectedDate,"yyyy-MM-dd")

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
    	// this.capacity = "-1";
    }
    else {
    	drivingLabel.style.fontWeight = "700";
    	drivingLabel.style.color = new Color("#ac00e6");
    	ridingLabel.style.fontWeight = "400";
    	ridingLabel.style.color = new Color("#5c687c");
    	this.isDriving = true;
    }
  }

  showDateModal() {
    var today = new Date();
    var nextYearDate = new Date(today);
    nextYearDate.setDate(nextYearDate.getDate() + 365);

    this.picker
    .pickDate({
      title: "Select date",
      theme: "light",
      minDate: new Date(),
      maxDate: nextYearDate
    })
    .then(result => {
      // Note the month is 1-12 (unlike js which is 0-11)
      var selectedDate = new Date(result.year, result.month - 1, result.day);
      this.dateLabel = this.days[selectedDate.getDay()] + ', ' + this.months[selectedDate.getMonth()] + ' ' + selectedDate.getDate();
      this.date = selectedDate.toString().substring(0, 15);
      this.formattedDate = this.datePipe.transform(selectedDate,"yyyy-MM-dd")
    })
    .catch(error => {
      console.log("Error: " + error);
    });
  }

}
