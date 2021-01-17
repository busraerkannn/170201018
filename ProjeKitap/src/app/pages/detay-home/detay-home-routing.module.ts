import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetayHomePage } from './detay-home.page';

const routes: Routes = [
  {
    path: '',
    component: DetayHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetayHomePageRoutingModule {}
