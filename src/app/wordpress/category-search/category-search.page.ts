import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpServicesService } from './../../wp-services.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.page.html',
  styleUrls: ['./category-search.page.scss'],
})
export class CategorySearchPage implements OnInit {
  id:any;
  posts :any= [];
  name:any={};
  page:any=1;
  tempPosts: any = [];
  hasMoreItems: boolean = true;
  constructor(private router: Router,public wp:WpServicesService,public activatedRoute:ActivatedRoute,public loading:LoadingController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    
      console.log(params)
      this.getPosts();
    });

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      if (params['name']) {
        this.name = params['name'];
      }
    });
  }
  viewPost(id:any){
    console.log('Nav to post');
    this.router.navigate(['wp/post', id]);
  }

  async getPosts(){
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      translucent: true,
      cssClass: 'custom-loading1'
    });

    return await loading.present().then(() => {
      console.log('Loading dismissed!');
      this.wp.getPostsByCategory(this.id,1).subscribe(data => {
        this.posts = data;
        loading.dismiss();
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

  async loadData(ev:Event) {
    this.page=this.page + 1;
    try {
      const data = await firstValueFrom(this.wp.getPostsByCategory(this.id,this.page));
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
