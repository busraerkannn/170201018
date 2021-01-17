import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HesapPageRoutingModule } from './hesap-routing.module';

import { HesapPage } from './hesap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HesapPageRoutingModule
  ],
  declarations: [HesapPage]
})
export class HesapPageModule {}
