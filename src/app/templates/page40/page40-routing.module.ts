import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page40Page } from './page40.page';

const routes: Routes = [
  {
    path: '',
    component: Page40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page40PageRoutingModule {}
