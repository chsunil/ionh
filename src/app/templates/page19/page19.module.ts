import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page19PageRoutingModule } from './page19-routing.module';

import { Page19Page } from './page19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page19PageRoutingModule
  ],
  declarations: [Page19Page]
})
export class Page19PageModule {}
