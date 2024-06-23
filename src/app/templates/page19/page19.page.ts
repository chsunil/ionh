import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page19',
  templateUrl: './page19.page.html',
  styleUrls: ['./page19.page.scss'],
})
export class Page19Page implements OnInit {
    
  images:any=[];
  slideOpts = { effect: 'flip', autoplay: true, parallax: true, lazy: true };
  
  constructor() { }

  ngOnInit() {
    this.images=[
      {src:'./../../assets/movie1.jpg'},
      {src:'./../../assets/movie2.jpg'},
      {src:'./../../assets/movie3.jpg'}
    ]
  }

}
