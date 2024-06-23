import { Component, OnInit } from '@angular/core';
import { WpServicesService } from './../../wp-services.service';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/storage.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wp-signup',
  templateUrl: './wp-signup.page.html',
  styleUrls: ['./wp-signup.page.scss'],
})
export class WpSignupPage implements OnInit {
  email:any;
  password:any;
  firstName:any;
  lastName:any;
  repassword:any;

 constructor(public wp:WpServicesService,private http: HttpClient,public storage:StorageService,
  private toast:ToastController,public loading:LoadingController,public route:Router) { }

 ngOnInit() {
 }

 submit() {

     this.signup(this.email,this.password,this.firstName,this.lastName)
   
 }

   async signup(email:string, password: string,firstName:string,lastName:string) {
     const loading = await this.loading.create({
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      translucent: true,
      cssClass: 'custom-loading1'
     });
     loading.present();
     const apiUrl = 'http://localhost/lcn/wp-json/jwt-auth/v1/token';
   
     const sendUser = {
       email: email, 
       username:email,//uses username as email 
       password: password,
       first_name:firstName,
       last_name:lastName,

     }
   
     this.wp.doRegister(sendUser).subscribe({
       next: (response: any) => {
        console.log(response);
        loading.dismiss();
        this.showToast('success','Successfuly Signed Up');
        this.route.navigate(['wp/login'])
         
       },
       error: (error: any) => {
         console.error('Login failed:', error);
         loading.dismiss();
         this.showToast('danger','Invalid details')
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
