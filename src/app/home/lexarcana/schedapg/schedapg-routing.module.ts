import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedapgPage } from './schedapg.page';

const routes: Routes = [
  {
    path: '',
    component: SchedapgPage,
    children: [
      { path: '', redirectTo: 'schedapersonaggio', pathMatch: 'full' },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedapgPageRoutingModule {}
