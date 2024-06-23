import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page34Page } from './page34.page';

const routes: Routes = [
  {
    path: '',
    component: Page34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page34PageRoutingModule {}
