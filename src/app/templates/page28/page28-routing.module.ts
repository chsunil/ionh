import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page28Page } from './page28.page';

const routes: Routes = [
  {
    path: '',
    component: Page28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page28PageRoutingModule {}
