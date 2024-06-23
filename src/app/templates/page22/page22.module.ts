import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page22PageRoutingModule } from './page22-routing.module';

import { Page22Page } from './page22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page22PageRoutingModule
  ],
  declarations: [Page22Page]
})
export class Page22PageModule {}
