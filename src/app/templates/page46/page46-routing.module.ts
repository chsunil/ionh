import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page46Page } from './page46.page';

const routes: Routes = [
  {
    path: '',
    component: Page46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page46PageRoutingModule {}
