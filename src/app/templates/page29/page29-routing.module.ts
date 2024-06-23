import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page29Page } from './page29.page';

const routes: Routes = [
  {
    path: '',
    component: Page29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page29PageRoutingModule {}
