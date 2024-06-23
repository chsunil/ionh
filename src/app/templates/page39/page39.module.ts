import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page39PageRoutingModule } from './page39-routing.module';

import { Page39Page } from './page39.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page39PageRoutingModule
  ],
  declarations: [Page39Page]
})
export class Page39PageModule {}
