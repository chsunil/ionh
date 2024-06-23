import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page24PageRoutingModule } from './page24-routing.module';

import { Page24Page } from './page24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page24PageRoutingModule
  ],
  declarations: [Page24Page]
})
export class Page24PageModule {}
