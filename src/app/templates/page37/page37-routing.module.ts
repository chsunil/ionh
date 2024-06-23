import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page37Page } from './page37.page';

const routes: Routes = [
  {
    path: '',
    component: Page37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page37PageRoutingModule {}
