import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page32PageRoutingModule } from './page32-routing.module';

import { Page32Page } from './page32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page32PageRoutingModule
  ],
  declarations: [Page32Page]
})
export class Page32PageModule {}
