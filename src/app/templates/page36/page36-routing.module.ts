import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page36Page } from './page36.page';

const routes: Routes = [
  {
    path: '',
    component: Page36Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page36PageRoutingModule {}
