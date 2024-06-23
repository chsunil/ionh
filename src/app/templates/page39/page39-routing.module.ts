import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page39Page } from './page39.page';

const routes: Routes = [
  {
    path: '',
    component: Page39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page39PageRoutingModule {}
