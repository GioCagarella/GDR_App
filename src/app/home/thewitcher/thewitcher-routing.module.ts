import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThewitcherPage } from './thewitcher.page';

const routes: Routes = [
  {
    path: '',
    component: ThewitcherPage
  },
  {
    path: 'schedapg',
    loadChildren: () => import('./schedapg/schedapg.module').then( m => m.SchedapgPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThewitcherPageRoutingModule {}
