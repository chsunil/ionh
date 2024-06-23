import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page28PageRoutingModule } from './page28-routing.module';

import { Page28Page } from './page28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page28PageRoutingModule
  ],
  declarations: [Page28Page]
})
export class Page28PageModule {}
