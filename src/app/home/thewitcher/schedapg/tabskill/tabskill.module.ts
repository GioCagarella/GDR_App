import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabskillPageRoutingModule } from './tabskill-routing.module';

import { TabskillPage } from './tabskill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabskillPageRoutingModule
  ],
  declarations: [TabskillPage]
})
export class TabskillPageModule {}
