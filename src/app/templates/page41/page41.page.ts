import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-page41',
  templateUrl: './page41.page.html',
  styleUrls: ['./page41.page.scss'],
})
export class Page41Page implements OnInit {

  products:any=[];
  constructor() { }

  ngOnInit() {
    this.products = [
      { name: 'Seafood Rice', price: 6, img: './../../assets/images/rice.jpg' },
      { name: 'Vege Burger', price: 8,  img: './../../assets/images/burger.jpg' },
      { name: 'Fish Pasta', price: 5,  img: './../../assets/images/pasta.jpg' },
      { name: 'Chicken Pizza', price: 6, img: './../../assets/images/pizza.jpg' },
      { name: 'Pork Kottu', price: 8, img: './../../assets/images/kottu.jpg' },
      { name: 'Seafood Rice', price: 6, img: './../../assets/images/rice.jpg' },

 
    ]

  }

}
