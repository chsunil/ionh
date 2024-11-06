import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.page.html',
  styleUrls: ['./templates.page.scss'],
})
export class TemplatesPage implements OnInit {
  temps: any = [];
  constructor(public route: Router) { }

  ngOnInit() {
    this.temps = [
      { id: 1, desc: 'Course App', img: './../../../assets/images/templates/1.png', path: 'page1' },
      { id: 2, desc: 'Course App', img: './../../../assets/images/templates/2.png', path: 'page2' },
      { id: 3, desc: 'Course App', img: './../../../assets/images/templates/3.png', path: 'page3' },
      { id: 4, desc: 'Course App', img: './../../../assets/images/templates/4.png', path: 'page4' },
      { id: 5, desc: 'Course App', img: './../../../assets/images/templates/5.png', path: 'page5' },
      { id: 6, desc: 'Course App', img: './../../../assets/images/templates/6.png', path: 'page6' },
      { id: 7, desc: 'Course App', img: './../../../assets/images/templates/7.png', path: 'page7' },
      { id: 8, desc: 'Course App', img: './../../../assets/images/templates/8.png', path: 'page8' },
      { id: 9, desc: 'Course App', img: './../../../assets/images/templates/9.png', path: 'page9' },
      { id: 10, desc: 'Course App', img: './../../../assets/images/templates/10.png', path: 'page10' },
      { id: 11, desc: 'Course App', img: './../../../assets/images/templates/11.png', path: 'page11' },
      { id: 12, desc: 'Course App', img: './../../../assets/images/templates/12.png', path: 'page12' },
      { id: 13, desc: 'Course App', img: './../../../assets/images/templates/13.png', path: 'page13' },
      { id: 14, desc: 'Course App', img: './../../../assets/images/templates/14.png', path: 'page14' },
      { id: 15, desc: 'Course App', img: './../../../assets/images/templates/15.png', path: 'page15' },
      { id: 16, desc: 'Course App', img: './../../../assets/images/templates/16.png', path: 'page16' },
      { id: 17, desc: 'Course App', img: './../../../assets/images/templates/17.png', path: 'page17' },
      { id: 18, desc: 'Course App', img: './../../../assets/images/templates/18.png', path: 'page18' },
      { id: 19, desc: 'Course App', img: './../../../assets/images/templates/19.png', path: 'page19' },
      { id: 20, desc: 'Course App', img: './../../../assets/images/templates/20.png', path: 'page20' },
      { id: 21, desc: 'Course App', img: './../../../assets/images/templates/21.png', path: 'page21' },
      { id: 22, desc: 'Course App', img: './../../../assets/images/templates/22.png', path: 'page22' },
      { id: 23, desc: 'Course App', img: './../../../assets/images/templates/23.png', path: 'page23' },
      { id: 24, desc: 'Course App', img: './../../../assets/images/templates/24.png', path: 'page24' },
      { id: 25, desc: 'Course App', img: './../../../assets/images/templates/25.png', path: 'page25' },
      { id: 26, desc: 'Course App', img: './../../../assets/images/templates/26.png', path: 'page26' },
      { id: 27, desc: 'Course App', img: './../../../assets/images/templates/27.png', path: 'page27' },
      { id: 28, desc: 'Course App', img: './../../../assets/images/templates/28.png', path: 'page28' },
      { id: 29, desc: 'Course App', img: './../../../assets/images/templates/29.png', path: 'page29' },
      { id: 30, desc: 'Course App', img: './../../../assets/images/templates/30.png', path: 'page30' },
      { id: 31, desc: 'Course App', img: './../../../assets/images/templates/31.png', path: 'page31' },
      { id: 32, desc: 'Course App', img: './../../../assets/images/templates/32.png', path: 'page32' },
      { id: 33, desc: 'Course App', img: './../../../assets/images/templates/33.png', path: 'page33' },
      { id: 34, desc: 'Course App', img: './../../../assets/images/templates/34.png', path: 'page34' },
      { id: 35, desc: 'Course App', img: './../../../assets/images/templates/35.png', path: 'page35' },
      { id: 36, desc: 'Course App', img: './../../../assets/images/templates/36.png', path: 'page36' },
      { id: 37, desc: 'Course App', img: './../../../assets/images/templates/37.png', path: 'page37' },
      { id: 38, desc: 'Course App', img: './../../../assets/images/templates/38.png', path: 'page38' },
      { id: 39, desc: 'Course App', img: './../../../assets/images/templates/39.png', path: 'page39' },
      { id: 40, desc: 'Course App', img: './../../../assets/images/templates/40.png', path: 'page40' },
      { id: 41, desc: 'Course App', img: './../../../assets/images/templates/41.png', path: 'page41' },
      { id: 42, desc: 'Course App', img: './../../../assets/images/templates/42.png', path: 'page42' },
      { id: 43, desc: 'Course App', img: './../../../assets/images/templates/43.png', path: 'page43' },
      { id: 44, desc: 'Course App', img: './../../../assets/images/templates/44.png', path: 'page44' },
      { id: 45, desc: 'Course App', img: './../../../assets/images/templates/45.png', path: 'page45' },
      { id: 46, desc: 'Course App', img: './../../../assets/images/templates/46.png', path: 'page46' },



    ]
  }

  navigate(path: any) {
    this.route.navigate([path])
  }

}
