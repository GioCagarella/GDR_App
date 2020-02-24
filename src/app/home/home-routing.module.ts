import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { HomePage } from './home.page';

/**
 * creazione route di navigazione: caricamento lazyloading della path di home e dei moduli LeXArcana, TheWitcher
 */
const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'lexarcana',
    loadChildren: () => import('./lexarcana/lexarcana.module').then( m => m.LexarcanaPageModule)
  },
  {
    path: 'thewitcher',
    loadChildren: () => import('./thewitcher/thewitcher.module').then( m => m.ThewitcherPageModule)
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
