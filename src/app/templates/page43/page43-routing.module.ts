import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page43Page } from './page43.page';

const routes: Routes = [
  {
    path: '',
    component: Page43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page43PageRoutingModule {}
