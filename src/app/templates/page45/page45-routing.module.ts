import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page45Page } from './page45.page';

const routes: Routes = [
  {
    path: '',
    component: Page45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page45PageRoutingModule {}
