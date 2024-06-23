import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WpServicesService } from './../../wp-services.service';
import { LoadingController } from '@ionic/angular';
import { IonSearchbar } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm!: string;
  posts!: any;
  page:any=1;
  tempPosts: any = [];
  hasMoreItems: boolean = true;
  @ViewChild('searchBar', { static: false })
  searchBar!: IonSearchbar;

  constructor(private router: Router,public wp:WpServicesService,public loading:LoadingController) {
    
   }

  ngOnInit() {
  
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 150);
  }
  async search() {

    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      translucent: true,
      cssClass: 'custom-loading1'
    });


    if(this.searchTerm && this.searchTerm.trim() !== ''){
      this.posts=[];
      return await loading.present().then(() => {
        this.wp.searchPosts(this.searchTerm,1).subscribe(data => {
          console.log(data)
          this.posts=data;  
          loading.dismiss();
        })
      });;

    } else {
      console.log("Search term is empty.")
      loading.dismiss()
    }

  }

  clearSearch() {
    this.searchTerm = '';
  }

  viewPost(id:any){
    console.log('Nav to post');
    this.router.navigate(['wp/post', id]);
  }

  async loadData(ev:Event) {
    this.page=this.page + 1;
    try {
      const data = await firstValueFrom(this.wp.searchPosts(this.searchTerm,this.page));
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

  sliceExcerpt(excerpt: string, wordLimit: number): string {
    const words = excerpt.split(' ');
    const slicedWords = words.slice(0, wordLimit);
    const slicedExcerpt = slicedWords.join(' ');
    return slicedExcerpt;
  }
}
