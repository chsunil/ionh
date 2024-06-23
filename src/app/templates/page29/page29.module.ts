import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page29PageRoutingModule } from './page29-routing.module';

import { Page29Page } from './page29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page29PageRoutingModule
  ],
  declarations: [Page29Page]
})
export class Page29PageModule {}
