import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { LocationComponent } from '../location/location.component';
import { NumberPickerComponent } from '../number-picker/number-picker.component';
import { TransferService } from '../datatransfer.service';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import { GoogleMapsService } from '../google-maps.service';
import * as firebase from 'nativescript-plugin-firebase';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { RouterExtensions } from 'nativescript-angular/router';
import { Posting } from '../posting.model';
import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';
import { Switch } from "tns-core-modules/ui/switch";
import { ListView } from "tns-core-modules/ui/list-view";

class PostSearch {
    constructor(public startLocation: string, public endLocation: string, public date: string, public capacity: number) { }
}

class PostItem {
    constructor(public username: String, public info: string, public profileSource: string, 
      public mapSource: string, public price: string, public status: string, public capacity: string,
      public date: string) { }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  postSearch: PostSearch;
  startLabel = "Where from?";
  endLabel = "Where to?";
  dateLabel = "";
  capacity = 1;
  driving = true;
  startLocationPicked = false;
  endLocationPicked = false;
  startPlace;
  endPlace;
  startAddress;
  endAddress;
  startLat;
  endLat;
  startLng;
  endLng;
  distance = 20;
  searchDate;
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  picker: ModalPicker.ModalDatetimepicker;
  postings = new ObservableArray<PostItem>();
  p : Posting[];

  @ViewChild('activityIndicator', { static: true }) ai: ElementRef;
  @ViewChild('riderCheckbox', { static: true }) rcb: ElementRef;
  @ViewChild('driverCheckbox', { static: true }) dcb: ElementRef;
  @ViewChild('listView', { static: true }) lv: ElementRef;

  constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef, private transferService: TransferService,
  	private mapService: GoogleMapsService, private router: RouterExtensions) { }

  ngOnInit() {
  	this.picker = new ModalPicker.ModalDatetimepicker;
  	this.postSearch = new PostSearch('', '', '', 1);
  	this.getTodayDate();
  }

  getTodayDate() {
  	var today = new Date();
  	this.dateLabel = this.days[today.getDay()] + ', ' + this.months[today.getMonth()] + ' ' + today.getDate();
  }

  selectDate() {
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
      this.searchDate = this.days[selectedDate.getDay()] + ' ' + this.months[selectedDate.getMonth()] + ' ' + selectedDate.getDate() 
      + ' ' + selectedDate.getFullYear();
      if(this.startLocationPicked && this.endLocationPicked) {
	    this.getResults();
	  }
    })
    .catch(error => {
      console.log("Error: " + error);
    });
  }

  pickNumber() {
  	let options = {
        context: {},
        fullscreen: false,
        viewContainerRef: this.vcRef,
        animated: true,
        transition: { name: "slideTop" }
    };
    this.modal.showModal(NumberPickerComponent, options).then(res => {
    	console.log(res)
    	if(res) {
    	  this.capacity = res;
    	  if(this.startLocationPicked && this.endLocationPicked) {
    	  	this.getResults();
    	  }
    	}
    });
  }

  showModal(type) {
    let options = {
        context: {},
        fullscreen: true,
        viewContainerRef: this.vcRef,
        animated: true,
        transition: { name: "slideTop" }
    };
    this.transferService.setData(type);
    this.modal.showModal(LocationComponent, options).then(res => {
        if(res != null)
          if(res.start != null) {
            this.startLocationPicked = true;
            this.startLabel = res.start;
            this.startPlace = res.start;
            this.startAddress = res.address;
          }
          else if(res.end != null) {
            this.endLocationPicked = true;
            this.endLabel = res.end;
            this.endPlace = res.end;
            this.endAddress = res.address;
          }
          else {
            if(type == 'start') {
              this.startLocationPicked = true;
              this.startLabel = 'Where from?';
            }
            else if(type == 'end') {
              this.startLocationPicked = true;
              this.startLabel = 'Where to?';
            }
          }
        if(this.startLocationPicked && this.endLocationPicked) {
        	this.getResults();
        }
    });
  }

  getResults() {
  	let activityIndicator = <ActivityIndicator> this.ai.nativeElement;
  	let listView = <ListView> this.lv.nativeElement;
  	activityIndicator.busy = true;
  	listView.visibility = 'collapse';
  	this.postings.splice(0);
  	this.mapService.getGeocodeResults(this.startPlace + ' ' + this.startAddress).subscribe((res: any) => {
      this.startLat = res.results[0].geometry.location.lat;
      this.startLng = res.results[0].geometry.location.lng;
      this.mapService.getGeocodeResults(this.endPlace + ' ' + this.endAddress).subscribe((res: any) => {
        this.endLat = res.results[0].geometry.location.lat;
        this.endLng = res.results[0].geometry.location.lng;

        const postingsCollection = firebase.firestore.collection('postings');
        let query = postingsCollection.where("date", "==", this.searchDate)
        								.where("capacity", ">=", this.capacity)
        if (!this.driving) {
        	query = postingsCollection.where("date", "==", this.searchDate)
        							  .where("capacity", ">=", '-' + this.capacity)
        }

        query.get().then((querySnapshot) => {
        	var i = 0;
        	var posts = [];
        	querySnapshot.forEach((doc) => {
        		if(this.getDistanceFromLatLon(this.startLat, this.startLng, doc.data().startLat, doc.data().startLng) <= this.distance &&
        			this.getDistanceFromLatLon(this.endLat, this.endLng, doc.data().endLat, doc.data().endLng) <= this.distance) {
        			this.postings.push(new PostItem(doc.data().user, '', '', '~/img/gray_background.jpg','', '', '', '',));
	        		this.createPosting(doc.data(), i);
	        		posts.push({
			          id: doc.id,
			          data: doc.data()
			        })
	        		i += 1;
        		}
        	})
        	this.p = posts;
        	activityIndicator.busy = false;
        	listView.visibility = 'visible';
        })

      });
    });
  }

  createPosting(data, i: number) {
    let date = data.date.split(" ")
    date = date[1]+" "+date[2]+" "+date[3];
    let info_label = data.startAddress + " to " + data.endAddress;
    let dat = date;
    let price;
    let type;
    let cap;
    if(data.capacity >"0"){
      cap = 2+"/"+ data.capacity+" Seats Left";
      price = data.price
      type = '~/img/steering-wheel-2.png'
    }
    else{
      cap = "Riders: "+ Math.abs(data.capacity)
      type = '~/img/passenger-2.png'
    }
    const usersCollection = firebase.firestore.collection('users');
    usersCollection.doc(data.uid).get().then((doc) => {
      if(doc.exists) {
        var url = doc.data().profile_source;

        this.postings.setItem(i, new PostItem(data.user, info_label, url, data.map_url, price, type, cap, dat));
      }
    })
  }

  onCheckedChange(args) {
  	let mySwitch = args.object as Switch;
  	if(mySwitch.checked) {
  		this.driving = true;
  	}
  	else {
  		this.driving = false;
  	}
  	if(this.startLocationPicked && this.endLocationPicked) {
  		this.getResults();
  	}
  }

  getDistanceFromLatLon(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
	var dLon = this.deg2rad(lon2-lon1); 
	var a = 
	Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
	Math.sin(dLon/2) * Math.sin(dLon/2)
	; 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; // Distance in km
	var e = d * 0.621371; //Distance in miles
	return e;
  }

  deg2rad(deg) {
	return deg * (Math.PI/180)
  }

  toViewImage(src) {
    this.transferService.setData(src);
    this.router.navigate(['view-image']);
  }

  onItemTap(args) {
    console.log(this.postings.getItem(args.index));
    this.transferService.setData({
      postInfo: this.p[args.index],
      postItem: this.postings.getItem(args.index)
    })
    this.router.navigate(['posting-info'])
  }

}
