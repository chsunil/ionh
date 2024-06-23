import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page36',
  templateUrl: './page36.page.html',
  styleUrls: ['./page36.page.scss'],
})
export class Page36Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

playBack(){
  console.log('Back')
}

pause(){
  console.log('Pause')
}

playForward(){
  console.log('Forward')
}

}
