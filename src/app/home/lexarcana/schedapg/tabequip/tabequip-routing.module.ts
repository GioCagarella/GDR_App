import { LexarcanaPage } from './../../lexarcana.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabequipPage } from './tabequip.page';

const routes: Routes = [
  {
    path: '',
    component: TabequipPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabequipPageRoutingModule {}
