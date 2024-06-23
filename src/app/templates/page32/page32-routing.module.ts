import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page32Page } from './page32.page';

const routes: Routes = [
  {
    path: '',
    component: Page32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page32PageRoutingModule {}
