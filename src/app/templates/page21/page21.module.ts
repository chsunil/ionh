import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page21PageRoutingModule } from './page21-routing.module';

import { Page21Page } from './page21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page21PageRoutingModule
  ],
  declarations: [Page21Page]
})
export class Page21PageModule {}
