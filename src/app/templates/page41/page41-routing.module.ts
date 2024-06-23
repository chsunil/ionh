import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page41Page } from './page41.page';

const routes: Routes = [
  {
    path: '',
    component: Page41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page41PageRoutingModule {}
