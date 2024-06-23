import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent  implements OnInit {
  @Input() rating: any;
  icons!: string[];
  constructor() {
    this.icons = Array(5).fill('star-outline');
   }

  ngOnInit() {}
  
  ngOnChanges() {
    this.icons = Array(5).fill('star-outline');
    for (let i = 0; i < this.rating; i++) {
      this.icons[i] = 'star';
    }
  }
}
