import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page31PageRoutingModule } from './page31-routing.module';

import { Page31Page } from './page31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page31PageRoutingModule
  ],
  declarations: [Page31Page]
})
export class Page31PageModule {}
