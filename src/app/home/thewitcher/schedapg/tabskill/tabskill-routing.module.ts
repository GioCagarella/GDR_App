import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabskillPage } from './tabskill.page';

const routes: Routes = [
  {
    path: '',
    component: TabskillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabskillPageRoutingModule {}
