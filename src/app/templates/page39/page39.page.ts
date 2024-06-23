import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page39',
  templateUrl: './page39.page.html',
  styleUrls: ['./page39.page.scss'],
})
export class Page39Page implements OnInit {
  songs:any=[];
  selectedSong: any = null;
  currentSong:any;
  paused:boolean=true;
  constructor() { }

  ngOnInit() {
    this.songs = [
      {name: 'Beautiful in White', artist: 'Westlife'},
      {name: 'All of Me', artist: 'John Legend'},
      {name: 'Hello', artist: 'Adele'},
      {name: 'Thinking Out Loud', artist: 'Ed Sheeran'},
      {name: 'A Thousand Years', artist: 'Christina Perri'},
      {name: 'Can\'t Help Falling in Love', artist: 'Elvis Presley'},
      {name: 'I Will Always Love You', artist: 'Whitney Houston'},
      {name: 'My Heart Will Go On', artist: 'Celine Dion'},
      {name: 'Shape of You', artist: 'Ed Sheeran'},
      {name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars'}
    ];
    this.currentSong =this.songs[0];
  }
selectSong(item:any){
  this.selectedSong=item;
  this.currentSong=item;
}

play(){
  this.paused=false;
}

pause(){
  this.paused=true;
}
}
