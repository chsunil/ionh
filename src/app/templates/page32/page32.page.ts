import { Component, OnInit ,AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import * as lottie from 'lottie-web';

@Component({
  selector: 'app-page32',
  templateUrl: './page32.page.html',
  styleUrls: ['./page32.page.scss'],
})
export class Page32Page implements AfterViewInit {
  @ViewChild('lottieDiv') lottieDiv!: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const animation = lottie.default.loadAnimation({
      container: this.lottieDiv.nativeElement,
      path: 'assets/lottie/envelop.json', // Replace with your JSON file path
      renderer: 'svg',
      loop: true,
      autoplay: true
    });
  }
}
