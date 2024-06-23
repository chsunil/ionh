import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
declare const google: any;
import { Data } from '../../data';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.page.html',
  styleUrls: ['./page7.page.scss'],
})
export class Page7Page implements AfterViewInit {
  @ViewChild('gmap') gmap!: ElementRef;
  start: any;
  end: any;
  location: any;
  myMap: any;
  GoogleAutoComplete: any;
  autocomplete!: any;
  autocompleteItems!: any[];
  searched: boolean = false;
  isAddressUpdated = false;
  selectedLat: any;
  selectedLng: any;
  constructor(private ngZone: NgZone, public data: Data, public route: Router) {
    this.GoogleAutoComplete = new google.maps.places.AutocompleteService();
  }

  ngAfterViewInit() {
    this.loadMap()
    console.log(this.data.startSelecting, this.data.endSelecting)
  }

  public loadMap() {
    let mapOptions = {
      center: new google.maps.LatLng(37.7833, -122.4167), // Initial camera center of the map
      zoom: 12, //Camera zoom value
      mapTypeId: google.maps.MapTypeId.ROADMAP, //Select the Google Map Type 
      disableDefaultUI: true //Disabled the default layout which contains zoom in and out buttons
    }

    this.myMap = new google.maps.Map(this.gmap.nativeElement, mapOptions);//'gmap' is the html element 

    //Adding a marker
    const marker = new google.maps.Marker({
      position: { lat: 35.7833, lng: -120.4167 }, //Latitude and longitude of the marker
      map: this.myMap
    });

    //Getting address of initial camera center
    const geoCoder = new google.maps.Geocoder();
    geoCoder.geocode({ location: { lat: 37.7833, lng: -122.4167 } }).then((response: any) => {

      let formattedAddress = response.results[0].formatted_address;
      let plusCodeIndex = formattedAddress.indexOf(' ');
      if (plusCodeIndex > -1) {
        this.location = formattedAddress.substring(formattedAddress.indexOf(" ") + 1);

      }
    })
    this.addEvent();
  }

  addEvent() {
    //Getting center coordinates....dragend = when user finished dragging the map
    this.myMap.addListener("dragend", () => {

      var centerCoords = this.myMap.getCenter() //getting center coordinates
      var lat = centerCoords.lat(); //latitude of the location
      var lng = centerCoords.lng();//longitude of the location


      //Getting formatted address of above coordinates
      const geoCoder = new google.maps.Geocoder();
      geoCoder.geocode({ location: { lat: lat, lng: lng } }).then((response: any) => {
        console.log(response);
        this.isAddressUpdated = true;
        let formattedAddress = response.results[0].formatted_address;
        //Removing the plus code to get a clear address  
        let plusCodeIndex = formattedAddress.indexOf(' ');
        if (plusCodeIndex > -1) {
          this.location = formattedAddress.substring(formattedAddress.indexOf(" ") + 1); //formatted address

          this.autocomplete = this.location;
        }
      })
    })
  }

  //Getting searched location results
  updateSearchResults() {

    if (!this.isAddressUpdated) {

      if (this.autocomplete == '') {
        this.autocompleteItems = [];
        return;
      }
      this.GoogleAutoComplete.getPlacePredictions({ input: this.autocomplete },
        (predictions: any[], status: any) => {
          console.log(predictions);
          if (predictions.length > 0) {
            this.searched = true;
          }
          this.autocompleteItems = [];
          this.ngZone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction)

            })
          })
        })

    }
    this.isAddressUpdated = false;
  }

  //Clearning searched terms from ion searchbar
  clearAutoComplete() {
    this.autocompleteItems = [];
    this.autocomplete = {};
  }

  //Occurs when a user clicks on a searched result.Passed place_id is used here.
  selectSearchResult(item: { place_id: any; }) {
    const geoCoder = new google.maps.Geocoder();

    this.searched = false;

    //Getting a place details from place_id
    geoCoder.geocode({ 'placeId': item.place_id }, (results: {
      formatted_address: any; geometry: {
        location: {
          lat(): unknown; lng: () => any;
        };
      };
    }[], status: string) => {

      if (status === 'OK' && results[0]) {

        const Lat = results[0].geometry.location.lat()
        const Lng = results[0].geometry.location.lng()

        //Move camera to the location
        this.myMap.setCenter({ lat: Lat, lng: Lng });
        this.location = results[0].formatted_address;
      }
    })

  }

  selectLocation() {
    console.log(this.data.start, this.data.end)
    const centerCoords = this.myMap.getCenter()
    const lat = centerCoords.lat(); //latitude of the location
    const lng = centerCoords.lng();//longitude of the location

    this.selectedLat = lat;
    this.selectedLng = lng;

    if (this.data.startSelecting) {
      this.data.start.lat = this.selectedLat;
      this.data.start.lng = this.selectedLng;
      this.data.start.address = this.location;
      this.route.navigate(['/page46'])
    } else if (this.data.endSelecting) {
      this.data.end.lat = this.selectedLat;
      this.data.end.lng = this.selectedLng;
      this.data.end.address = this.location;
      this.route.navigate(['/page46'])
    } else if (!this.data.startSelecting && !this.data.endSelecting) {
      this.route.navigate([''])
    }

  }

  //Getting User's current location
  async getUserLocation() {
    const coordinates = await Geolocation.getCurrentPosition();//this returns not only lat and lng but also other coordinates.
    //console.log(coordinates)
    const latitude = coordinates.coords.latitude;
    const longitude = coordinates.coords.longitude;

    this.myMap.setCenter({ lat: latitude, lng: longitude }); //setting camera to center
    this.myMap.setZoom(20) // zooming the map

  }
}
