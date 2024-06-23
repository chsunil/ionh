import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page43',
  templateUrl: './page43.page.html',
  styleUrls: ['./page43.page.scss'],
})
export class Page43Page implements OnInit {
 success:boolean=false;
 mail:any="";
  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.success=true;
    console.log(this.mail)
  }
}
