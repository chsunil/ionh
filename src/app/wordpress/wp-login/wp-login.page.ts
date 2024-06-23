import { Component, OnInit } from '@angular/core';
import { WpServicesService } from './../../wp-services.service';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './../../storage.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wp-login',
  templateUrl: './wp-login.page.html',
  styleUrls: ['./wp-login.page.scss'],
})
export class WpLoginPage implements OnInit {
   email:any;
   password:any;
  constructor(public wp:WpServicesService,private http: HttpClient,
    public storage:StorageService,private toast:ToastController,public loading:LoadingController,public route:Router) { }

  ngOnInit() {
  }

  submit() {

      this.login(this.email,this.password)
    
  }

    async login(username: string, password: string) {
      const loading = await this.loading.create({
        message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
        translucent: true,
        cssClass: 'custom-loading1'
      });
      loading.present();
    
      this.wp.doLogin(username,password).subscribe({
        next: (response: any) => {
          console.log(response);

          let user ={
            token:response.token,
            id:response.user_id,
            email:response.user_email,
            displayname: response.user_display_name,
          }

          this.storage.setSingleItem( user,'user'); // Store the user in localStorage or a secure storage solution
          console.log('Login successful');
          loading.dismiss();
          this.showToast('success','Login Successful');
          this.route.navigate(['wp/home']);
       
          
        },
        error: (error: any) => {
          console.error('Login failed:', error);
          loading.dismiss();
          this.showToast('danger','Invalid Credentials')
        }
        
      });
      
    }

    async showToast(color:any,message:any){

        const toast = await this.toast.create({
          message: message,
          duration: 1500,
          position: 'bottom',
          color:color
        });
    
        await toast.present();
      
    }

    

}
