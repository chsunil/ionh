import { Component, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
declare const google: any;
import { Geolocation } from '@capacitor/geolocation';
import { StorageService } from '../../storage.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-basic-map',
  templateUrl: './basic-map.page.html',
  styleUrls: ['./basic-map.page.scss'],
})
export class BasicMapPage implements AfterViewInit {

  @ViewChild('gmap') gmap!: ElementRef;

  GoogleAutoComplete: any;
  autocomplete!: any;
  autocompleteItems!: any[];
  searched: boolean = false;
  myMap: any;
  location: any;
  markers: any = [];
  savedMarkers: any = [];
  isAddressUpdated = false;


  constructor(private ngZone: NgZone, public storage: StorageService, public modal: ModalController) {
    this.GoogleAutoComplete = new google.maps.places.AutocompleteService();
  }

  ngAfterViewInit() {
    this.loadMap()
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

    this.getSavedMarkers();
    this.addEvent();

  }

  //Getting saved markers from local storage
  public getSavedMarkers() {
    this.storage.getItem('markerData').then((items: any[]) => {
      this.savedMarkers = [];

      if (items) {
        this.markers = [];
        this.savedMarkers = items;

        for (let i = 0; i < this.savedMarkers.length; i++) {
          //Adding marker on the map
          const marker = new google.maps.Marker({
            position: { lat: this.savedMarkers[i].lat, lng: this.savedMarkers[i].lng },
            map: this.myMap
          });
          console.log('marker', marker)
          this.markers.push(marker);
        }
        console.log(this.savedMarkers)
        this.myMap.setCenter({ lat: this.savedMarkers[0].lat, lng:this.savedMarkers[0].lng });
      } else {
        console.log('no saved markers');
      }
    });
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
          this.autocomplete=this.location;
          this.searched=false;
        }
      })
    })
  }

  //Getting User's current location
  async getUserLocation() {
    const coordinates = await Geolocation.getCurrentPosition();//this returns not only lat and lng but also other coordinates.
    //console.log(coordinates)
    const latitude = coordinates.coords.latitude;
    const longitude = coordinates.coords.longitude;

    this.myMap.setCenter({ lat: latitude, lng: longitude }); //setting camera to center
    this.myMap.setZoom(20) // zooming the map

    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude }, //Latitude and longitude of the marker
      map: this.myMap
    });
  }

  //Delete a marker from storage
  removeMarker(item: any) {
    this.storage.removeItem(item,'markers').then((value) => {
      this.getSavedMarkers(); //Get remaining markers
      this.loadMap(); //Refresh the map
    });
  }

  //Saving center location as a marker
  saveMarker() {
    var centerCoords = this.myMap.getCenter()
    var lat = centerCoords.lat();
    var lng = centerCoords.lng();

    const marker = {
      lat: lat,
      lng: lng,
      address: this.location
    };

    this.storage.addItem(marker,'markers');

    let addMarker = new google.maps.Marker({
      map: this.myMap,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(lat, lng),
    });

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
    this.searched=false;
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

        const latitude = results[0].geometry.location.lat()
        const longitude = results[0].geometry.location.lng()

        //Move camera to the location
        this.myMap.setCenter({ lat: latitude, lng: longitude });
        this.location = results[0].formatted_address;
      }
    })

  }

  //Occur when user clicked on a saved marker from the list
  focus(item: any) {
    this.myMap.setCenter({ lat: item.lat, lng: item.lng });
    this.modal.dismiss()
  }

}
