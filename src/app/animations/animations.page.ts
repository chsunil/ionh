import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as lottie from 'lottie-web';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.page.html',
  styleUrls: ['./animations.page.scss'],
})
export class AnimationsPage implements OnInit {
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
