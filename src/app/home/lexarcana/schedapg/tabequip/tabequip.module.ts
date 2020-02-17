import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabequipPageRoutingModule } from './tabequip-routing.module';

import { TabequipPage } from './tabequip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabequipPageRoutingModule
  ],
  declarations: [TabequipPage]
})
export class TabequipPageModule {}
