import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page41PageRoutingModule } from './page41-routing.module';

import { Page41Page } from './page41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page41PageRoutingModule
  ],
  declarations: [Page41Page]
})
export class Page41PageModule {}
