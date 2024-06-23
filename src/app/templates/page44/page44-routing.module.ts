import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page44Page } from './page44.page';

const routes: Routes = [
  {
    path: '',
    component: Page44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page44PageRoutingModule {}
