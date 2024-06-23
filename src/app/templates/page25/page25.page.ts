import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page25',
  templateUrl: './page25.page.html',
  styleUrls: ['./page25.page.scss'],
})
export class Page25Page implements OnInit {
  ads: any = [];

  constructor() { }

  ngOnInit() {

    this.ads = [
      {
        name: "Powerful Gaming Laptop with NVIDIA GeForce RTX Graphics",
        price: 440,
        desc: "Get serious gaming performance with this laptop's NVIDIA GeForce RTX graphics, fast refresh rate display, and advanced cooling system.",
        date: "3 Days Ago",
        img: "./../../assets/images/lap1.jpg"
      },
      {
        name: "Business Laptop with Fingerprint Reader and Thunderbolt 3",
        price: 200,
        desc: "Keep your data secure with this business laptop's fingerprint reader and take advantage of fast data transfer with Thunderbolt 3.",
        date: "4 Days Ago",
        img: "./../../assets/images/lap3.jpg"
      },
      {
        name: "Ultra-Portable Laptop with 14-Inch Full HD Display",
        price: 560,
        desc: "Take this ultra-portable laptop with you anywhere thanks to its lightweight design and 14-inch full HD display.",
        date: "5 Days Ago",
        img: "./../../assets/images/lap2.png"
      },
      {
        name: "Gaming Laptop with RGB Keyboard and Liquid Cooling System",
        price: 800,
        desc: "Show off your gaming style with this laptop's RGB keyboard and keep temperatures low with its liquid cooling system.",
        date: "5 Days Ago",
        img: "./../../assets/images/lap4.png"
      },
    ]

  }

  titleRemodel(title: any) {
    const MAX_WORDS = 6; // maximum number of words to display

    // example text
    const text = title;

    // split the text into an array of words
    const words = text.split(" ");

    // slice the array to the maximum number of words
    const limitedWords = words.slice(0, MAX_WORDS);

    // join the limited words back into a string with spaces
    const limitedText = limitedWords.join(" ");

    console.log(limitedText); // output: "This is a sample text that"

    return limitedText;

  }

  descriptionRemodel(desc: any) {
    const MAX_WORDS = 15; // maximum number of words to display

    // example text
    const text = desc;

    // split the text into an array of words
    const words = text.split(" ");

    // slice the array to the maximum number of words
    const limitedWords = words.slice(0, MAX_WORDS);

    // join the limited words back into a string with spaces
    const limitedText = limitedWords.join(" ");

    console.log(limitedText); // output: "This is a sample text that"

    return limitedText;

  }
}
