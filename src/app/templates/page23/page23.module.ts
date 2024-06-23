import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page23PageRoutingModule } from './page23-routing.module';

import { Page23Page } from './page23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page23PageRoutingModule
  ],
  declarations: [Page23Page]
})
export class Page23PageModule {}
