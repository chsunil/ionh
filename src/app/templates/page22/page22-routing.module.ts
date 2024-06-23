import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page22Page } from './page22.page';

const routes: Routes = [
  {
    path: '',
    component: Page22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page22PageRoutingModule {}
