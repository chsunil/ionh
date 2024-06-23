import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page18',
  templateUrl: './page18.page.html',
  styleUrls: ['./page18.page.scss'],
})
export class Page18Page implements OnInit {
  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 15,
  };
  constructor() { }

  ngOnInit() {
  }

}
