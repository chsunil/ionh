import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../storage.service';
import { WpServicesService } from './../../wp-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {


  saved: boolean = false;
  post: any;
  id: any;
  comments: any;
  page: any = 1;
  tempComments: any = [];
  hasMoreItems: boolean = true;
  loggedUser: boolean = false;
  user: any;
  author:any;
  constructor(public storage: StorageService, public wp: WpServicesService,
    public activatedRoute: ActivatedRoute, public route: Router, public loading: LoadingController,
    public alert: AlertController, public toast: ToastController) {

  }

  async ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getPost(this.id);
      this.getComments(this.id);
      this.getUser();
 
    });


  }

  getAuthor(){
    this.wp.getUserDetails(this.post.author).subscribe(res=>{
      console.log(res);
      this.author = res;
    })
  }


  getUser() {
    this.wp.getUser().then(res => {
      this.user = res;
      console.log(res)
      if (this.user == null) {
        this.loggedUser = false;
      } else {
        this.loggedUser = true;
      }
    })
  }

  savePost() {
    console.log(this.post);
    this.storage.addItem(this.post, 'savedPosts').then((result) => {
      console.log(result); // "Promise resolved"
      this.showToast('success','Saved')
    });;
  }

  async getPost(id: any) {
    const loading = await this.loading.create({
      spinner: null,
      message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loading...</p>',
      translucent: true,
      cssClass: 'custom-loading1'
    });
    return await loading.present().then(() => {
      console.log('Loading dismissed!');
      this.wp.getPost(id).subscribe(data => {
        this.post = data;
        this.getAuthor();
        loading.dismiss()
        console.log(this.post)
      })
    });;


  }

  async getComments(id: any) {
    this.comments = [];
    this.wp.getComments(id, 1).subscribe(data => {
      this.comments = data;
      console.log(this.comments)
    })
  }

  scrollToComments() {
    const element = document.getElementById('comment-section');
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async loadData(ev: Event) {
    this.page = this.page + 1;
    try {
      const data = await firstValueFrom(this.wp.getComments(this.id, this.page));
      console.log(data);
      this.tempComments = data;
      this.comments.push.apply(this.comments, this.tempComments);
      (ev as InfiniteScrollCustomEvent).target.complete();
      if (this.tempComments.length == 0) this.hasMoreItems = false;
    } catch (error) {
      console.error(error);
      this.hasMoreItems = false;
    }
  }

  share() {
    console.log('open social share')
  }

  async writeComment() {

    if (this.loggedUser) {
      const alert = await this.alert.create({

        cssClass: 'alert2',
        message: "<ion-label slot='end'><h1>Write a Comment</h1><p>Unappropriated comments will be removed by the admin</p></ion-label>",
        buttons: [
          {
            text: 'Submit',
            cssClass: 'alert-button-subscribe',
            role: 'confirm',
            handler: async (data) => {
              console.log(data);

              this.wp.validateAuthToken(this.user.token).subscribe({
                next: (response: any) => {
                  console.log(response);
                  this.wp.createComment(this.id, this.user, data.comment).subscribe(res => {
                    console.log(res);
                    this.scrollToComments();
                    this.getComments(this.id);
                    alert.dismiss();
                  })

                },
                error: (error: any) => {
                  console.error('Login failed:', error);
                  this.showToast('warning', 'Session expired! Please login again');
                  alert.dismiss();
                  this.login();
                }

              });
            },
          },

        ],
        inputs: [
          {
            name: 'comment',
            type: 'textarea',
            placeholder: 'Your Comment',
          },
        ],
      });

      await alert.present();
    } else {
      this.login()
    }
  }

  async login() {

    const alert = await this.alert.create({
      header: 'Login to comment',
      cssClass: 'alert3',
      inputs: [
        {
          name: 'email',
          type: 'textarea',
          placeholder: 'Email address',
        },
        {
          name: 'password',
          type: 'textarea',
          placeholder: 'Password',
        },
      ],

      buttons: [
        {
          text: 'Login',
          cssClass: 'alert-button-login',
          role: 'confirm',
          handler: async (data) => {
            //Perform a function if user clicked login button
            console.log(data);

            const loading = await this.loading.create({
              spinner: null,
              message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Loggin In...</p>',
              translucent: true,
              cssClass: 'custom-loading1'
            });
            loading.present();

            this.wp.doLogin(data.email, data.password).subscribe({
              next: (response: any) => {
                console.log(response);

                this.user = {
                  token: response.token,
                  id: response.user_id,
                  email: response.user_email,
                  displayname: response.user_display_name,
                }

                this.storage.setSingleItem(this.user, 'user'); // Store the user in localStorage or a secure storage solution
                this.loggedUser = true;
                console.log('Login successful');
                loading.dismiss();
                alert.dismiss();
                this.showToast('success', 'Login Successful');
                this.writeComment()

              },
              error: (error: any) => {
                console.error('Login failed:', error);
                loading.dismiss();
                this.showToast('danger', 'Invalid Credentials')
              }

            });
          },
        },
        {
          text: 'Signup',
          cssClass: 'alert-button-signup',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked signup button
            this.route.navigate(['wp/signup'])
          },
        },

      ],

    });

    await alert.present();

  }
  async deleteComment(id: any) {
    const alert = await this.alert.create({
      header: 'Are you sure?',
      message: 'Do you want to delete your comment?',
      cssClass: 'alert1',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          role: 'cancel',
          handler: async () => {
            //Perform a function if user clicked cancel button
          },
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked confirm button

            const loading = await this.loading.create({
              spinner: null,
              message: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p class="text">Deleting...</p>',
              translucent: true,
              cssClass: 'custom-loading1'
            });
            loading.present();

            this.wp.deleteComment(id, this.user).subscribe(res => {
              console.log(res);
              this.showToast('success', 'Comment deleted');
              this.getComments(this.id);
              loading.dismiss();
              alert.dismiss();
            });

          },
        },
      ],
    });

    await alert.present();

  }

  async showToast(color: any, message: any) {

    const toast = await this.toast.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color: color
    });

    await toast.present();

  }
}
