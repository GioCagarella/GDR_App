import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LexarcanaPageRoutingModule } from './lexarcana-routing.module';

import { LexarcanaPage } from './lexarcana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LexarcanaPageRoutingModule
  ],
  declarations: [LexarcanaPage]
})
export class LexarcanaPageModule {}
