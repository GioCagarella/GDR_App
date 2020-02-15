import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabstatPage } from './tabstat.page';

const routes: Routes = [
  {
    path: '',
    component: TabstatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabstatPageRoutingModule {}
