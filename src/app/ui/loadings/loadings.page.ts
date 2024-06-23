import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loadings',
  templateUrl: './loadings.page.html',
  styleUrls: ['./loadings.page.scss'],
})
export class LoadingsPage implements OnInit {

  constructor(private loading:LoadingController) { }

  ngOnInit() {
  }

  async presentLoading1() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading1',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }
  
  async presentLoading2() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-circle"><div></div></div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading2',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }

  async presentLoading3() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-dual-ring"></div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading3',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }

  async presentLoading4() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-facebook"><div></div><div></div><div></div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading4',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }

  async presentLoading5() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-heart"><div></div></div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading5',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }

  async presentLoading6() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-ring"><div></div><div></div><div></div><div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading6',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }

    async presentLoading7() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-default"><div></div><div></div><div></div><div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading7',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }

  async presentLoading8() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-ellipsis"><div></div><div></div><div></div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading8',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }

  async presentLoading9() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-grid"><div></div><div></div><div></div><div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading9',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }

  async presentLoading10() {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-hourglass"></div>',
      //translucent: true,
      duration:2000,
      cssClass: 'custom-loading10',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role and data', role,data);
  }




}
