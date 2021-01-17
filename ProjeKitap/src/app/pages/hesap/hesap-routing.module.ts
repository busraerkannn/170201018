import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HesapPage } from './hesap.page';

const routes: Routes = [
  {
    path: '',
    component: HesapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HesapPageRoutingModule {}
