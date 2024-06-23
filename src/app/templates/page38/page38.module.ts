import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page38PageRoutingModule } from './page38-routing.module';

import { Page38Page } from './page38.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page38PageRoutingModule
  ],
  declarations: [Page38Page]
})
export class Page38PageModule {}
