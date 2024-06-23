import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page33',
  templateUrl: './page33.page.html',
  styleUrls: ['./page33.page.scss'],
})
export class Page33Page implements OnInit {
  slideOpts = { effect: 'flip', autoplay: true, lazy: true };
  featured: any = [];
  posts: any = [];
  popular: any = [];
  segmentValue: any = 'recent';

  constructor() { }

  ngOnInit() {

    this.featured = [
      {
        title: "The Best Hiking Trails in the Pacific Northwest",
        image_src: "./../../assets/movie3.jpg",
        desc: "Explore the natural beauty of the Pacific Northwest with our guide to the best hiking trails. From stunning vistas to hidden waterfalls, there's something for every level of hiker."
      },
      {
        title: "How to Master the Art of French Cooking",
        image_src: "./../../assets/movie2.jpg",
        desc: "Take your cooking skills to the next level with our comprehensive guide to mastering the art of French cuisine. From classic techniques to modern twists, impress your friends and family with delicious dishes."
      },
      {
        title: "10 Tips for Taking Stunning Landscape Photos",
        image_src: "./../../assets/movie1.jpg",
        desc: "Capture the beauty of the great outdoors with our expert tips for taking stunning landscape photos. From composition to lighting, learn how to create breathtaking images that showcase the natural world"
      }
    ];

    this.posts = [
      {
        title: "Exploring Ancient Ruins in South America",
        image_src: "./../../assets/images/book4.jpg",
        desc: "Discover the wonders of ancient civilizations with our guide to exploring ruins in South America. "
      },
      {
        title: "Mastering the Art of Coffee Brewing",
        image_src: "./../../assets/images/book.jpg",
        desc: "Learn how to brew the perfect cup of coffee with our expert guide to coffee brewing. "
      },
      {
        title: "10 Must-Visit National Parks in the United States",
        image_src: "./../../assets/images/book3.jpg",
        desc: "Experience the natural beauty of the United States with our guide to the top national parks. "
      },
      {
        title: "Discovering Hidden Gems in Europe's Smaller Cities",
        image_src: "./../../assets/images/book.jpg",
        desc: "Escape the crowds and explore Europe's lesser-known cities with our guide to hidden gems. "
      },

    ];

    this.popular = [

      {
        title: "The Ultimate Guide to Running Your First Marathon",
        image_src: "./../../assets/images/book.jpg",
        desc: "Get ready to cross the finish line with our comprehensive guide to running your first marathon. "
      },
      {
        title: "Exploring the World's Best Dive Sites",
        image_src: "./../../assets/images/book2.jpeg",
        desc: "Dive into the depths of the world's most spectacular underwater environments with our guide to the best dive sites. "
      },
      {
        title: "The Art of Cocktail Making",
        image_src: "./../../assets/images/book3.jpg",
        desc: "Mix up your cocktail game with our expert guide to the art of cocktail making."
      }


    ];

  }
  segmentChanged() {
    console.log('changed to....', this.segmentValue)
  }
}
