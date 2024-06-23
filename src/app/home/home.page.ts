import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  result: any;
  constructor(public route:Router,public actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
  }

  navigate(url:any){
    this.route.navigate([url]);
  }

  //ACTION SHEET - HIGHLY CUSTOMIZED - SEE Global.css 
  async viewActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'John Hopkins',
      subHeader: '120,000 Subscribers | Developer | USA',
      cssClass: 'actionSheet',
      buttons: [
        {
          text: 'View Profile',
          icon: 'person-outline',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Send Message',
          icon: 'send-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Share',
          icon: 'share-social-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

}
