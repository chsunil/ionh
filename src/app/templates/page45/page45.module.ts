import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page45PageRoutingModule } from './page45-routing.module';

import { Page45Page } from './page45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page45PageRoutingModule
  ],
  declarations: [Page45Page]
})
export class Page45PageModule {}
