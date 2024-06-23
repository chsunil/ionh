import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page38Page } from './page38.page';

const routes: Routes = [
  {
    path: '',
    component: Page38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page38PageRoutingModule {}
