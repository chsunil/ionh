import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page21Page } from './page21.page';

const routes: Routes = [
  {
    path: '',
    component: Page21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page21PageRoutingModule {}
