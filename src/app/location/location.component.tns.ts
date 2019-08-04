import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PlacesAutocompleteService } from '../places-autocomplete.service';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { TransferService } from '../datatransfer.service';
import { SearchBar } from 'tns-core-modules/ui/search-bar';

class Suggestion {
	constructor(public placeSuggestion: string, public placeAddress: string) {}
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})


export class LocationComponent implements OnInit {

  constructor(private params: ModalDialogParams, private placesService: PlacesAutocompleteService, private transferService: TransferService) { }

  @ViewChild("searchLabel", { static: true }) searchLabel: ElementRef;
  address;
  suggestions = new ObservableArray<Suggestion>();
  placeSuggestions = new ObservableArray<String>();
  placeAddresses = new ObservableArray<String>();
  type = this.transferService.getData();

  ids = new Set();
  myTimer;

  ngOnInit() {
  	// setTimeout(() => this.searchLabel.nativeElement.focus(), 100);
  }

  close() {
  	this.params.closeCallback();
   }

   selectPlace(place, address) {
   	if(this.type == 'start')
   		this.params.closeCallback({'start': place, 'address': address});
   	else
   		this.params.closeCallback({'end': place, 'address': address});
   }

  search(args) {
  	clearInterval(this.myTimer);
  	this.myTimer = setTimeout(() => {
  		let searchBar = <SearchBar> args.object;
	    this.ids.clear();
	    this.suggestions.splice(0);
	    setTimeout(() => {
	    this.placesService.getPlaceResults(searchBar.text).subscribe((data: any) => {
		    for(var i = 0; i < data.results.length; i++) {
		      	if(!this.ids.has(data.results[i].place_id))
		      		this.suggestions.push(new Suggestion(data.results[i].name, data.results[i].formatted_address));
		      	this.ids.add(data.results[i].place_id);
		    }
		  });
		}, 100);
		this.placesService.getAutocompleteResultsAddress(searchBar.text).subscribe((data: any) => {
			for(var i = 0; i < data.predictions.length; i++) {
			  	if(!this.ids.has(data.predictions[i].place_id))
			  		this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
			  	this.ids.add(data.predictions[i].place_id);
		  	}
		});
		// this.placesService.getAutocompleteResultsEstablishment(searchBar.text).subscribe((data: any) => {
		// 	  for(var i = 0; i < data.predictions.length; i++) {
		//     	if(!this.ids.has(data.predictions[i].place_id))
		//     		this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
		//     	this.ids.add(data.predictions[i].place_id);
		//     }
		// });
		this.placesService.getAutocompleteResultsCity(searchBar.text).subscribe((data: any) => {
			for(var i = 0; i < data.predictions.length; i++) {
			  	if(!this.ids.has(data.predictions[i].place_id))
			  		this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
			  	this.ids.add(data.predictions[i].place_id);
		  	}
		});
  	}, 500);  	
  }

  autocomplete() {
    setTimeout(() => {
    	this.ids.clear();
      this.suggestions.splice(0);
      this.placesService.getPlaceResults(this.address).subscribe((data: any) => {
        for(var i = 0; i < data.results.length; i++) {
	      	if(!this.ids.has(data.results[i].place_id))
	      		this.suggestions.push(new Suggestion(data.results[i].name, data.results[i].formatted_address));
	      	this.ids.add(data.results[i].place_id);
        }
      });
      setTimeout(() => {
	      this.placesService.getAutocompleteResultsAddress(this.address).subscribe((data: any) => {
	      	  for(var i = 0; i < data.predictions.length; i++) {
	          	if(!this.ids.has(data.predictions[i].place_id))
	          		this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
	          	this.ids.add(data.predictions[i].place_id);
	          }
	      });
	      // this.placesService.getAutocompleteResultsEstablishment(this.address).subscribe((data: any) => {
	      // 	  for(var i = 0; i < data.predictions.length; i++) {
	      //     	if(!this.ids.has(data.predictions[i].place_id))
	      //     		this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
	      //     	this.ids.add(data.predictions[i].place_id);
	      //     }
	      // });
	      this.placesService.getAutocompleteResultsCity(this.address).subscribe((data: any) => {
	      	  for(var i = 0; i < data.predictions.length; i++) {
	          	if(!this.ids.has(data.predictions[i].place_id))
	          		this.suggestions.push(new Suggestion(data.predictions[i].structured_formatting.main_text, data.predictions[i].structured_formatting.secondary_text));
	          	this.ids.add(data.predictions[i].place_id);
	          }
	      });
      }, 100);

    }, 400);
  }

}
