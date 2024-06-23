import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page42PageRoutingModule } from './page42-routing.module';

import { Page42Page } from './page42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page42PageRoutingModule
  ],
  declarations: [Page42Page]
})
export class Page42PageModule {}
