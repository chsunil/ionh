import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page27PageRoutingModule } from './page27-routing.module';

import { Page27Page } from './page27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page27PageRoutingModule
  ],
  declarations: [Page27Page]
})
export class Page27PageModule {}
