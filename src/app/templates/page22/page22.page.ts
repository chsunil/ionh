import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page22',
  templateUrl: './page22.page.html',
  styleUrls: ['./page22.page.scss'],
})
export class Page22Page implements OnInit {
  slideOpts = {
    slidesPerView:2,
    spaceBetween: 15,
    //autoplay: true
  };
  mostSelling:any=[];
  offers:any=[];
  featured:any=[];
  constructor() { }

  ngOnInit() {

    this.mostSelling =[
      {name:'Italiano',image:'./../../assets/images/pizza1.png',price:'2.50'},
      {name:'Seafood',image:'./../../assets/images/pizza3.jpg',price:'4.50'},
      {name:'Vegetable',image:'./../../assets/images/pizza1.png',price:'1.50'}
    ];

    this.offers =[
      {name:'French',image:'./../../assets/images/pizza4.jpg',price:'2.50',offer:'2.00'},
      {name:'Chicken',image:'./../../assets/images/pizza5.jpg',price:'4.50',offer:'3.50'},
      {name:'Fish',image:'./../../assets/images/pizza1.png',price:'1.50',offer:'1.00'}
    ];
    
    this.featured =[
      {name:'Crispy',image:'./../../assets/images/pizza2.png',price:'5.50'},
      {name:'Pepparoni',image:'./../../assets/images/pizza6.jpg',price:'6.50'},
      {name:'Mushrooms',image:'./../../assets/images/pizza1.png',price:'7.50'}
    ];

  }

}
