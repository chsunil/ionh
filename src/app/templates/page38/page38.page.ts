import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page38',
  templateUrl: './page38.page.html',
  styleUrls: ['./page38.page.scss'],
})
export class Page38Page implements OnInit {

  foods:any=[];
  constructor() { }

  ngOnInit() {
    this.foods = [
      {name:'Seafood Rice',sub:'Prawns,fish,cuttlefish',price:'10',img:'./../../assets/images/rice.jpg'},
      {name:'Fish Burger',sub:'Fish,cheese,chips',price:'5',img:'./../../assets/images/burger.jpg'},
      {name:'Vege Pasta',sub:'Chopsey,salad,chips',price:'12',img:'./../../assets/images/pasta.jpg'},
      {name:'Cherry Pizza',sub:'Cheese,cherry,topping',price:'8',img:'./../../assets/images/pizza.jpg'},
      {name:'Cheese Kottu',sub:'Spicy,cheese,chicken',price:'10',img:'./../../assets/images/kottu.jpg'},
    ]
  }

}
