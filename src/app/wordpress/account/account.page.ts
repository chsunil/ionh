import { Component, OnInit } from '@angular/core';
import { WpServicesService } from 'src/app/wp-services.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Data } from './../../data';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user:any;
  userId:any;
  userName:any;
  firstName:any;
  lastName:any;
  email:any;
  nickName: any;
  loggedUser:boolean=false;

  constructor(public wp:WpServicesService,private loading:LoadingController,public route:Router,public data:Data) { }

  ngOnInit() {
    if(this.data.settings == null){
      console.log('no data');
      this.wp.getStoredSettings().then(res=>{
        console.log(res);
        this.data.settings=res;
      })
    }
  
  }

  ionViewDidEnter(){
    this.checkUser()
  }

  checkUser(){
    this.wp.getUser().then(usr=>{
      console.log(usr);
      

      if (usr == null) {
        this.loggedUser = false;
      } else {
        this.userId=usr.id;
        this.loggedUser = true;
         this.wp.getUserDetails(this.userId).subscribe(res=>{
        console.log(res);
        this.user = res;
      })
      }
    })
  }

  async logout(){
      const loading = await this.loading.create({
        message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
        translucent: true,
        cssClass: 'custom-loading1'
      });
    await loading.present();

    this.wp.doLogOut().then(res=>{
      console.log(res);
      loading.dismiss();
      this.loggedUser=false;
    })
  }

  navigate(url:any){
    this.route.navigate([url])
  }

  viewPage(id:any){
    this.route.navigate(['wp/page/'+id])
  }
}
