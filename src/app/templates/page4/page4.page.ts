import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import * as lottie from 'lottie-web';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  @ViewChild('lottieDiv1') lottieDiv1!: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const animation = lottie.default.loadAnimation({
      container: this.lottieDiv1.nativeElement,
      path: 'assets/lottie/24152-yellow-taxi.json', // Replace with your JSON file path
      renderer: 'svg',
      loop: true,
      autoplay: true
    });
  }
}
