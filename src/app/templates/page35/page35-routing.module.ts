import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page35Page } from './page35.page';

const routes: Routes = [
  {
    path: '',
    component: Page35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page35PageRoutingModule {}
