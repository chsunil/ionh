import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page34PageRoutingModule } from './page34-routing.module';

import { Page34Page } from './page34.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page34PageRoutingModule
  ],
  declarations: [Page34Page]
})
export class Page34PageModule {}
