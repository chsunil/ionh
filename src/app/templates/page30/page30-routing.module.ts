import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page30Page } from './page30.page';

const routes: Routes = [
  {
    path: '',
    component: Page30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page30PageRoutingModule {}
