import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page37PageRoutingModule } from './page37-routing.module';

import { Page37Page } from './page37.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page37PageRoutingModule
  ],
  declarations: [Page37Page]
})
export class Page37PageModule {}
