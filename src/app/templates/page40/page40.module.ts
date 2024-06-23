import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page40PageRoutingModule } from './page40-routing.module';

import { Page40Page } from './page40.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page40PageRoutingModule
  ],
  declarations: [Page40Page]
})
export class Page40PageModule {}
