import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page40',
  templateUrl: './page40.page.html',
  styleUrls: ['./page40.page.scss'],
})
export class Page40Page implements OnInit {
  products: any = [];
  pickup: boolean = false;
  deliver: boolean = false;
  total: any;
  constructor() { }

  ngOnInit() {
    this.products = [
      { name: 'Seafood Rice', price: 6, qty: 2, img: './../../assets/images/rice.jpg' },
      { name: 'Vege Burger', price: 8, qty: 1, img: './../../assets/images/burger.jpg' },
      { name: 'Fish Pasta', price: 5, qty: 2, img: './../../assets/images/pasta.jpg' },
    ]
    this.calculateTotal()
  }

  
// This function calculates the total price of all the products in the cart
calculateTotal() {
  let total = 0;

  // Loop through all the products in the cart
  for (let i = 0; i < this.products.length; i++) {
    // Calculate the subtotal for the current product (price * quantity)
    let subtotal = this.products[i].price * this.products[i].qty;

    // Add the subtotal to the total price
    total += subtotal;
  }

  // Set the calculated total price to the 'total' property of the component
  this.total = total;
}


// This function removes a product from the cart
removeItem(index: number) {
  // If the quantity of the product is greater than 1, decrement the quantity
  if (this.products[index].qty > 1) {
    this.products[index].qty--;
    this.calculateTotal(); // Recalculate the total price after reducing the quantity
  }
  // If the quantity of the product is 1 or less, remove the product from the cart
  else {
    this.products.splice(index, 1);
    this.calculateTotal(); // Recalculate the total price after removing the product
  }
}


  selectPickup() {
    this.pickup = true;
    this.deliver = false;
  }

  selectDelivery() {
    this.deliver = true;
    this.pickup = false;
  }
}
