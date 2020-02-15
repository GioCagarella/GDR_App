import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LexarcanaPage } from './lexarcana.page';

const routes: Routes = [
  {
    path: '',
    component: LexarcanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LexarcanaPageRoutingModule {}
