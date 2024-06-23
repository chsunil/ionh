import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page26',
  templateUrl: './page26.page.html',
  styleUrls: ['./page26.page.scss'],
})
export class Page26Page implements OnInit {
  hotels: any = [];
  constructor() { }

  ngOnInit() {
    this.hotels = [
      { name: "Hotel casablanca", price: 14200, type: "Luxury Apartment", img: "./../../assets/images/hotel1.jpg", rating: 4 },
      { name: "Sea View Villa", price: 10400, type: "Family Cottage", img: "./../../assets/images/hotel2.jpg", rating: 5 }
    ]
  }

}
