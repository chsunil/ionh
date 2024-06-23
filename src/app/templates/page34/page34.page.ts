import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page34',
  templateUrl: './page34.page.html',
  styleUrls: ['./page34.page.scss'],
})
export class Page34Page implements OnInit {
  selectedImageIndex: number = 0;
  images: any = ['./../../assets/images/lap1.jpg', './../../assets/images/lap2.png', './../../assets/images/lap3.jpg', './../../assets/images/lap4.png'];
  selectedImage: number = 0;
  productTitle: any;
  productRating: any;
  productDescription: any;
  sold: any;
  totalPrice: any;
  constructor() { }

  ngOnInit() {
    this.productRating = 4;
    this.sold = 240;
    this.totalPrice = 50;
    this.productTitle = 'The New Generation Laptop with Intel Core i7 Processor and NVIDIA Graphics';;
    this.productDescription = "Introducing our latest laptop, a sleek and stylish device designed to be your perfect companion for work and play. With a powerful Intel Core processor, ample storage, and full HD display, this laptop can handle all your daily computing needs, from browsing the web to running multiple applications at once. Plus, with integrated graphics and long-lasting battery life, you can enjoy your favorite games and stay productive on the go. With its impressive performance and elegant design, this laptop is the perfect choice for anyone seeking a reliable and stylish computing device."
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
    this.selectedImage = index;
  }

  addToCart() {
    // Add product to cart
  }
}
