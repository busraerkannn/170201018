import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitapDetayPageRoutingModule } from './kitap-detay-routing.module';

import { KitapDetayPage } from './kitap-detay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitapDetayPageRoutingModule
  ],
  declarations: [KitapDetayPage]
})
export class KitapDetayPageModule {}
