import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'developers',
        loadChildren: () => import('../pages/developers/developers.module').then(m => m.DevelopersPageModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('../pages/sale/sale.module').then(m => m.SalePageModule)
      },
      {
        path: 'basket',
        loadChildren: () => import('../pages/basket/basket.module').then(m => m.BasketPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'hesap',
        loadChildren: () => import('../pages/hesap/hesap.module').then(m => m.HesapPageModule)
      },
      // {
      //   path: 'login',
      //   loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ],
    
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
