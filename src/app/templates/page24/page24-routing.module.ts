import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page24Page } from './page24.page';

const routes: Routes = [
  {
    path: '',
    component: Page24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page24PageRoutingModule {}
