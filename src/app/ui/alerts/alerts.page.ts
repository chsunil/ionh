import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  @ViewChild('lottieDiv1') lottieDiv1!: ElementRef;
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async viewAlert1() {


    const alert = await this.alertController.create({
      header: 'All in One Solution',
      subHeader: 'Well documented ionic mobile app UI components and functions library',
      cssClass: 'alert1',
      message: "<ion-row class='icon-bar'><ion-col size='3'><ion-icon class='icon1' name='phone-portrait-outline'></ion-icon><p>UI Kit</p></ion-col><ion-col size='3'><ion-icon class='icon2' name='settings-outline'></ion-icon><p>Functions</p></ion-col><ion-col size='3'><ion-icon class='icon3' name='bug-outline'></ion-icon><p>Plugins</p></ion-col><ion-col size='3'><ion-icon class='icon4' name='book-outline'></ion-icon><p>Documented</p></ion-col></ion-row>",
      buttons: ['OK'],
    });

    await alert.present();

  }

  async viewAlert2() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      cssClass: 'alert2',
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

          },
        },
      ],
    });

    await alert.present();
  }

  //ALERT 3 - HIGHLY CUSTOMIZED ALERT WITH USER INPUT FORM
  async viewAlert3() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      cssClass: 'alert3', //See global.css file for customizations done here
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'alert-button-cancel',
          role: 'cancel',
          handler: () => {
            //Perform a function if user clicked cancel button
          },
        },
        {
          text: 'Submit',
          cssClass: 'alert-button-submit',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked submit button
          },
        },
      ],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            //Form validation rules
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();

    //Getting user entered form data as 'data'.You can use this data for functions such as signups & logins...
    const { data } = await alert.onDidDismiss();
    console.log(data);

  }

  //ALERT 4 - HIGHLY CUSTOMIZED ALERT WITH RADIO BUTTONS
  async viewAlert4() {
    const alert = await this.alertController.create({
      header: 'Select your favorite color',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'alert-button-cancel',
          role: 'cancel',
          handler: () => {
            //Perform a function if user clicked cancel button

          },
        },
        {
          text: 'Submit',
          cssClass: 'alert-button-submit',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked submit button

          },
        },
      ],
      cssClass: 'alert4',//See global.css file for customizations done here
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green',
        },
      ],
    });

    await alert.present();
    //Getting user entered form data as 'data'.You can use this data for functions such as signups & logins...
    const { data } = await alert.onDidDismiss();
    console.log(data);
  }
  //ENDS CODE FOR ALERT 4


  async viewAlert5() {


    const alert = await this.alertController.create({

      cssClass: 'alert5',
      message: "<img src='./../../assets/gifts.jpg'> <h1>Latest Gifts</h1><p>Collection of gift items</p>",
      buttons: [
        {
          text: 'View',
          cssClass: 'alert-button-cancel',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked view button
          },
        },
        {
          text: 'Cancel',
          cssClass: 'alert-button-confirm',
          role: 'cancel',
          handler: async () => {
            //Perform a function if user clicked cancel button
          },
        },
      ],
    });

    await alert.present();

  }

  async viewAlert6() {


    const alert = await this.alertController.create({
      header: 'Thank You!',
      cssClass: 'alert6',
      message: "<img src='./../../assets/balloons.png'><p>We are excited to have you as one of our users.Hope you have enjoyed this app and might be useful.</p>",
      buttons: [
        {
          text: 'Give feedback',
          cssClass: 'alert-button-feedback',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked Give feedback button
          },
        },

      ],
    });

    await alert.present();

  }

  async viewAlert7() {


    const alert = await this.alertController.create({

      cssClass: 'alert7',
      message: "<ion-item><ion-thumbnail slot='start'><img src='./../../assets/flower.gif'></ion-thumbnail><ion-label slot='end'><h1>Don't miss it!</h1><p>Signup for our flower sale day</p></ion-label></ion-item>",
      buttons: [
        {
          text: 'Subscribe',
          cssClass: 'alert-button-subscribe',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked subscribe button
          },
        },

      ],
      inputs: [
        {
          type: 'textarea',
          placeholder: 'Email address',
        },
      ],
    });

    await alert.present();

  }

  async viewAlert8() {


    const alert = await this.alertController.create({
      header: 'Log in',
      cssClass: 'alert8',
      inputs: [
        {
          type: 'textarea',
          placeholder: 'Email address',
        },
        {
          type: 'textarea',
          placeholder: 'Password',
        },
      ],

      buttons: [
        {
          text: 'Login',
          cssClass: 'alert-button-login',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked login button
          },
        },
        {
          text: 'Signup',
          cssClass: 'alert-button-signup',
          role: 'confirm',
          handler: async () => {
            //Perform a function if user clicked signup button
          },
        },

      ],

    });

    await alert.present();

  }

  async viewAlert9() {


    const alert = await this.alertController.create({

      cssClass: 'alert9',
      message: "<img src='./../../assets/tree.png'> <h1>Plant Trees</h1><p>Let's protect our future world</p>",
      buttons: [
        {
          text: 'Donate',
          cssClass: 'alert-button-confirm',
          role: 'cancel',
          handler: async () => {
            //Perform a function if user clicked cancel button
          },
        },
      ],
    });

    await alert.present();

  }











}


