import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './maps-home.page.html',
  styleUrls: ['./maps-home.page.scss'],
})
export class MapsHomePage implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

  goTo(url:any){
    this.route.navigate([url]);
  }
}
