import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page35',
  templateUrl: './page35.page.html',
  styleUrls: ['./page35.page.scss'],
})
export class Page35Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buyMed(){
   console.log('Buy Medicines')
  }

  runTests(){
    console.log('Tests Start')
  }

  callDoc(){
    console.log('Call Doctor')
  }

  sos(){
    console.log('SOS')
  }

  share(){
    console.log('Share')
  }
}
