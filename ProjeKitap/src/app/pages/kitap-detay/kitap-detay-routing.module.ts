import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitapDetayPage } from './kitap-detay.page';

const routes: Routes = [
  {
    path: '',
    component: KitapDetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitapDetayPageRoutingModule {}
