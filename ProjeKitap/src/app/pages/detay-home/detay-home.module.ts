import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetayHomePageRoutingModule } from './detay-home-routing.module';

import { DetayHomePage } from './detay-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetayHomePageRoutingModule
  ],
  declarations: [DetayHomePage]
})
export class DetayHomePageModule {}
