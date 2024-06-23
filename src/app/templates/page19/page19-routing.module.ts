import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page19Page } from './page19.page';

const routes: Routes = [
  {
    path: '',
    component: Page19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page19PageRoutingModule {}
