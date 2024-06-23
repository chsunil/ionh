import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page44PageRoutingModule } from './page44-routing.module';

import { Page44Page } from './page44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page44PageRoutingModule
  ],
  declarations: [Page44Page]
})
export class Page44PageModule {}
