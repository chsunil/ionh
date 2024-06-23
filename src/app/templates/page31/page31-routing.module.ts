import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page31Page } from './page31.page';

const routes: Routes = [
  {
    path: '',
    component: Page31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page31PageRoutingModule {}
