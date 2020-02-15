import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedapgPage } from './schedapg.page';
import { TabstatPage } from './tabstat/tabstat.page';

const routes: Routes = [
  {
    path: '',
    component: SchedapgPage,
    children: [
      { path: '', redirectTo: 'tabstat', pathMatch: 'full' },
      {
         path: 'tabstat',
         loadChildren: () => import('./tabstat/tabstat.module').then( m => m.TabstatPageModule)
      },
      {
        path: 'tabskill',
        loadChildren: () => import('./tabskill/tabskill.module').then( m => m.TabskillPageModule)
      },
      {
        path: 'tabequip',
        loadChildren: () => import('./tabequip/tabequip.module').then( m => m.TabequipPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedapgPageRoutingModule {}
