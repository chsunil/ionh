import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page37',
  templateUrl: './page37.page.html',
  styleUrls: ['./page37.page.scss'],
})
export class Page37Page implements OnInit {

  categories: any = [];
  products: any = [];

  constructor() { }

  ngOnInit() {
    this.categories = ['Watches', 'Shirts', 'Trousers', 'Hats', 'Gowns', 'Shoes', 'Caps'];
    this.products = [
      {
        name: 'Floppy Sun Hat classic style hat',
        img: './../../assets/images/hat.jpg',
        description: 'Stay cool and stylish in the sun with our classic Floppy Sun Hat.',
        price: '50'
      },
      {
        name: "Leather Crossbody Bag",
        img: "./../../assets/images/bag.jpg",
        description: "Elevate your style with our versatile Leather Crossbody Bag. ",
        price: "120"
      },
      {
        name: "Sports Water Bottle",
        img: "./../../assets/images/bottle.jpg",
        description: "Stay hydrated and healthy with our Sports Water Bottle. ",
        price: "20"
      },
      {
        name: "Printed Scarf",
        img: "./../../assets/images/scarf.jpg",
        description: "Add a touch of elegance to any outfit with our Printed Scarf. ",
        price: "35"
      }
    ]
  }

}
