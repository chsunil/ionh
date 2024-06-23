import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page26Page } from './page26.page';

const routes: Routes = [
  {
    path: '',
    component: Page26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page26PageRoutingModule {}
