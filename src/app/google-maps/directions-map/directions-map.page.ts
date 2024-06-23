import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../../data';
declare const google: any;
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-directions-map',
  templateUrl: './directions-map.page.html',
  styleUrls: ['./directions-map.page.scss'],
})
export class DirectionsMapPage implements AfterViewInit {

  @ViewChild('gmap') gmap!: ElementRef;
  @ViewChild('sidebar') sidebar!: IonMenu;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  stepDisplay = new google.maps.InfoWindow();
  location: any;
  myMap: any;
  markerArray = [];
  dirInfo: any;
  showTools: boolean = false;

  constructor(public route: Router, public data: Data) {

  }


  ngAfterViewInit() {

    this.loadMap();
    this.data.startSelecting = false;
    this.data.endSelecting = false;
  }

  public loadMap() {
    let mapOptions = {
      center: new google.maps.LatLng(37.7833, -122.4167), // Initial camera center of the map
      zoom: 12, //Camera zoom value
      mapTypeId: google.maps.MapTypeId.ROADMAP, //Select the Google Map Type 
      disableDefaultUI: true //Disabled the default layout which contains zoom in and out buttons
    }

    this.myMap = new google.maps.Map(this.gmap.nativeElement, mapOptions);//'gmap' is the html element 

    // Initialize the directions service and renderer
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.myMap,
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

  }

  startSelecting() {
    this.data.startSelecting = true;
    this.data.endSelecting = false;
    this.route.navigate(['/selectLocation'])
  }

  endSelecting() {
    this.data.endSelecting = true;
    this.data.startSelecting = false;
    this.route.navigate(['/selectLocation'])
  }

  finishedSelecting() {
    if (this.data.start.address && this.data.end.address) {
      console.log('Get Directions')
      this.showTools = true;
      this.calculateAndDisplayRoute('DRIVING')
    }
  }

  calculateAndDisplayRoute(travelMode: any) {

    this.directionsService.route({
      origin: new google.maps.LatLng(this.data.start.lat, this.data.start.lng),
      destination: new google.maps.LatLng(this.data.end.lat, this.data.end.lng),
      travelMode: travelMode,
    }, (result: any, status: string) => {
      if (status === 'OK') {
        this.stepDisplay.setContent('');
        this.directionsRenderer.setDirections(result);
        this.directionsRenderer.setPanel(document.getElementById("panel"));
        console.log(result)
        this.dirInfo = result;
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  openMenu() {


    this.sidebar.open();
    this.sidebar.swipeGesture
  }

}

