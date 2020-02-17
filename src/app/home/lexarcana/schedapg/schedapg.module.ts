import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedapgPageRoutingModule } from './schedapg-routing.module';

import { SchedapgPage } from './schedapg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedapgPageRoutingModule
  ],
  declarations: [SchedapgPage]
})
export class SchedapgPageModule {}
