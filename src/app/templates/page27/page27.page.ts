import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page27',
  templateUrl: './page27.page.html',
  styleUrls: ['./page27.page.scss'],
})
export class Page27Page implements OnInit {
  checkboxValues = {
    dell: false,
    lenovo: false,
    acer: false,
  };
  select: any = 'used';
  price: any = { lower: 100, upper: 400 };
  constructor() { }

  ngOnInit() {
  }

  apply() {
    console.log('Category is...' + this.select)
    console.log('Price range is...', this.price)
    this.logCheckboxValues()
  }

  logCheckboxValues() {
    console.log('Dell checkbox value:', this.checkboxValues.dell);
    console.log('Lenovo checkbox value:', this.checkboxValues.lenovo);
    console.log('Acer checkbox value:', this.checkboxValues.acer);

  }

}
