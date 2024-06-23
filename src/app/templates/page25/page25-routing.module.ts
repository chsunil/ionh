import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page25Page } from './page25.page';

const routes: Routes = [
  {
    path: '',
    component: Page25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page25PageRoutingModule {}
