import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page35PageRoutingModule } from './page35-routing.module';

import { Page35Page } from './page35.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page35PageRoutingModule
  ],
  declarations: [Page35Page]
})
export class Page35PageModule {}
