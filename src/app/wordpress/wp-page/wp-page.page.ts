import { Component, OnInit } from '@angular/core';
import { WpServicesService } from './../../wp-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-wp-page',
  templateUrl: './wp-page.page.html',
  styleUrls: ['./wp-page.page.scss'],
})
export class WpPagePage implements OnInit {
  page: any;
  id: any;
  constructor(public wp:WpServicesService,public activatedRoute: ActivatedRoute,public loading:LoadingController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getPage(this.id);
;
    });

  }

  async getPage(id: any) {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      translucent: true,
      cssClass: 'custom-loading1'
    });
    return await loading.present().then(() => {
      console.log('Loading dismissed!');
      this.wp.getPage(this.id).subscribe(data => {
        this.page = data;
        loading.dismiss()
        console.log(this.page)
      })
    });;


  }

}
