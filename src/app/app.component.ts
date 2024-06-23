import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public intPages = [
    { title: 'Wordpress', url: '/wp/home', icon: 'logo-wordpress' },
    { title: 'Google Maps', url: 'maps/locations', icon: 'map' },
    { title: 'Translate Service', url: '/maps/create', icon: 'mail' },
    { title: 'Social Sharing', url: '/maps/create', icon: 'mail' },
    { title: 'Email Composer', url: '/maps/create', icon: 'mail' },
    { title: 'InAppBrowser', url: '/maps/create', icon: 'mail' },
    { title: 'AdMob', url: '/maps/create', icon: 'mail' },
    { title: 'Onesignal', url: '/maps/create', icon: 'mail' },
    { title: 'Lottie Animations', url: 'maps/locations', icon: 'map' },
    { title: 'Google Fonts', url: 'maps/locations', icon: 'map' },
  ];

  public uiPages = [
    { title: '50 Templates', url: '/maps/create', icon: 'mail' },
    { title: 'Chart Bank', url: '/maps/create', icon: 'mail' },
    { title: 'Loadings', url: 'maps/locations', icon: 'paper-plane' },
    { title: 'Alerts', url: 'maps/locations', icon: 'paper-plane' },
    { title: 'Progress Bars', url: 'maps/locations', icon: 'paper-plane' },
    { title: 'Action Sheets', url: 'maps/locations', icon: 'paper-plane' },
  ];


  public chartPages = [
    { title: 'Create Charts', url: '/charts/create', icon: 'mail' },
    { title: 'Chart Bank', url: 'charts/bank', icon: 'paper-plane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) { }
  viewSearch() {
    this.router.navigate(['wp/search']);
  }

}
