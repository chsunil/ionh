import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page25PageRoutingModule } from './page25-routing.module';

import { Page25Page } from './page25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page25PageRoutingModule
  ],
  declarations: [Page25Page]
})
export class Page25PageModule {}
