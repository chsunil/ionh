import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page7PageRoutingModule } from './page7-routing.module';

import { Page7Page } from './page7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page7PageRoutingModule
  ],
  declarations: [Page7Page]
})
export class Page47PageModule {}
