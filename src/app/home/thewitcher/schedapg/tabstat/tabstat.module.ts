import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabstatPageRoutingModule } from './tabstat-routing.module';

import { TabstatPage } from './tabstat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabstatPageRoutingModule
  ],
  declarations: [TabstatPage]
})
export class TabstatPageModule {}
