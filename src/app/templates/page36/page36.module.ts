import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page36PageRoutingModule } from './page36-routing.module';

import { Page36Page } from './page36.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page36PageRoutingModule
  ],
  declarations: [Page36Page]
})
export class Page36PageModule {}
