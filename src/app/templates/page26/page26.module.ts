import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page26PageRoutingModule } from './page26-routing.module';

import { Page26Page } from './page26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page26PageRoutingModule
  ],
  declarations: [Page26Page]
})
export class Page26PageModule {}
