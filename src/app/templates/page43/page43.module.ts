import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page43PageRoutingModule } from './page43-routing.module';

import { Page43Page } from './page43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page43PageRoutingModule
  ],
  declarations: [Page43Page]
})
export class Page43PageModule {}
