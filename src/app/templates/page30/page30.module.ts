import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page30PageRoutingModule } from './page30-routing.module';

import { Page30Page } from './page30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page30PageRoutingModule
  ],
  declarations: [Page30Page]
})
export class Page30PageModule {}
