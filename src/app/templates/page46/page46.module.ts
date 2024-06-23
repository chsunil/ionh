import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page46PageRoutingModule } from './page46-routing.module';

import { Page46Page } from './page46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page46PageRoutingModule
  ],
  declarations: [Page46Page]
})
export class Page46PageModule {}
