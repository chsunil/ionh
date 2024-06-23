import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './../../storage.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  posts: any=[];

  constructor(private router: Router,public storage:StorageService,public loading:LoadingController) { }

  ngOnInit() {

  }

  ionViewDidEnter(){
    this.getPosts()
  }

  viewPost(id:any){
    this.router.navigate(['wp/post', id]);
  }

  async getPosts(){
    this.posts=[];
    const loading = await this.loading.create({
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      translucent: true,
      cssClass: 'custom-loading1'
    });

    return await loading.present().then(() => {
      console.log('Loading dismissed!');
      this.storage.getItem('savedPosts').then((items: any[]) => {
        this.posts=items;
        loading.dismiss();
      })

      loading.dismiss();
    });;
  }

  async removePost(id:any){

    const loading = await this.loading.create({
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      translucent: true,
      cssClass: 'custom-loading1'
    });
    return await loading.present().then(() => {
      this.storage.removeItem(id,'savedPosts');
      loading.dismiss();
      this.getPosts();
    });;
   
  }

  sliceExcerpt(excerpt: string, wordLimit: number): string {
    const words = excerpt.split(' ');
    const slicedWords = words.slice(0, wordLimit);
    const slicedExcerpt = slicedWords.join(' ');
    return slicedExcerpt;
  }
  
}

