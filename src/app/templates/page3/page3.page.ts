import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import * as lottie from 'lottie-web';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
  @ViewChild('lottieDiv1') lottieDiv1!: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const animation = lottie.default.loadAnimation({
      container: this.lottieDiv1.nativeElement,
      path: 'assets/lottie/doc-patient.json', // Replace with your JSON file path
      renderer: 'svg',
      loop: true,
      autoplay: true
    });
  }
  
}
