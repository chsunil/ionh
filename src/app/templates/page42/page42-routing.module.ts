import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page42Page } from './page42.page';

const routes: Routes = [
  {
    path: '',
    component: Page42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page42PageRoutingModule {}
