import { Component, OnInit } from '@angular/core';
import { WpServicesService } from '../../wp-services.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { StorageService } from 'src/app/storage.service';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-wp-home',
  templateUrl: './wp-pages.html',
  styleUrls: ['./wp-pages.scss'],
})
export class WpPages implements OnInit {
  posts!: any;
  tempPosts: any = [];
  hasMoreItems: boolean = true;
  categories!: any;
  page: any = 1;
  featured!: any;
  settings: any;
  slideOpts1 = { effect: 'flip', autoplay: true, lazy: true };
  catSlider = { effect: 'flip', lazy: true, slidesPerView: 4 };
  constructor(private router: Router, public wp: WpServicesService, public loading: LoadingController, public storage: StorageService, public data: Data,) { }

  ngOnInit() {
    this.setWpSettings();
    this.getPosts();
    this.getCategories();
    this.getFeatured();
  }

  setWpSettings() {
    this.wp.getWpSettings().subscribe(data => {
      console.log(data);
      this.settings = data;
      this.data.settings = this.settings;
      this.storage.setSingleItem(this.settings, 'settings');
    })
  }

  async getPosts() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      translucent: true,
      cssClass: 'custom-loading1'
    });
    return await loading.present().then(() => {
      console.log('Loading dismissed!');
      this.wp.getPages(1).subscribe(data => {
        this.posts = data;
        loading.dismiss()
        console.log(this.posts)
      })
    });;

  }

  sliceExcerpt(excerpt: string, wordLimit: number): string {
    const words = excerpt.split(' ');
    const slicedWords = words.slice(0, wordLimit);
    const slicedExcerpt = slicedWords.join(' ');
    return slicedExcerpt;
  }

  getCategories() {
    this.wp.getCategories().subscribe(data => {
      this.categories = data;
      console.log(data)
    })
  }

  getFeatured() {
    this.wp.getFeaturedPosts().subscribe(data => {
      this.featured = data;
      console.log(this.featured)
    })
  }

  viewPage(id: any) {
    this.router.navigate(['wp/page', id]);
  }

  viewCat(id: any, name: any) {
    this.router.navigate(['wp/catsearch', id], { queryParams: { name: name } });
  }

  viewSearch() {
    this.router.navigate(['wp/search']);
  }

  async loadData(ev: Event) {
    this.page = this.page + 1;
    try {
      const data = await firstValueFrom(this.wp.getPosts(this.page));
      console.log(data);
      this.tempPosts = data;
      this.posts.push.apply(this.posts, this.tempPosts);
      (ev as InfiniteScrollCustomEvent).target.complete();
      if (this.tempPosts.length == 0) this.hasMoreItems = false;
    } catch (error) {
      console.error(error);
      this.hasMoreItems = false;
    }
  }



}



