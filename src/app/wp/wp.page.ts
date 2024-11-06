import { Component, OnInit } from '@angular/core';
import { WpServicesService } from '../wp-services.service';
import { Router } from '@angular/router';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-wp',
  templateUrl: './wp.page.html',
  styleUrls: ['./wp.page.scss'],
})
export class WpPage implements OnInit {
  loggedUser: any;
  userId: any;
  user: any;
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public mapPages = [
    { title: 'Create Map', url: '/maps/create', icon: 'mail' },
    { title: 'Location Services', url: 'maps/locations', icon: 'paper-plane' },
    { title: 'Ultimate Example', url: 'maps/ultmap', icon: 'heart' },
  ];
  public chartPages = [
    { title: 'Create Charts', url: '/charts/create', icon: 'mail' },
    { title: 'Chart Bank', url: 'charts/bank', icon: 'paper-plane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(public wp: WpServicesService, public route: Router, public data: Data) { }

  ngOnInit() {
    if (this.data.settings == null) {
      // console.log('no data Sunil');
      this.wp.getStoredSettings().then(res => {
        // console.log(res, 'getStoredSettings');
        this.data.settings = res;
      })
    }
    this.checkUser()
  }

  checkUser() {
    this.wp.getUser().then(usr => {
      console.log(usr, 'First console');
      if (usr == null) {
        this.loggedUser = false;
      } else {
        this.userId = usr.id;
        this.loggedUser = true;
        this.wp.getUserDetails(this.userId).subscribe(res => {
          console.log(res, 'second console');
          this.user = res;
          console.log("🚀 ~ WpPage ~ this.wp.getUserDetails ~   this.user:", this.user)
        })
      }
    })
  }

}
