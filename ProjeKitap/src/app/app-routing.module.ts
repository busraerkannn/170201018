import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // { path: '', redirectTo: 'developers', pathMatch: 'full' },
  { path: 'developers', loadChildren: './pages/developers/developers.module#DevelopersPageModule' },
  { path: 'developers/:id', loadChildren: './pages/developer/developer.module#DeveloperPageModule' },
  { path: 'developer/:id', loadChildren: './pages/kitap-detay/kitap-detay.module#KitapDetayPageModule' },
  { path: 'arama/:id', loadChildren: './pages/detay/detay.module#DetayPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'home/:id', loadChildren: './pages/detay-home/detay-home.module#DetayHomePageModule' },
  { path: 'sale', loadChildren: './pages/sale/sale.module#SalePageModule' },
  { path: 'basket', loadChildren: './pages/basket/basket.module#BasketPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'hesap', loadChildren: './pages/hesap/hesap.module#HesapPageModule' },
  {
    path: 'arama',
    loadChildren: () => import('./pages/arama/arama.module').then( m => m.AramaPageModule)
  },
  {
    path: 'detay',
    loadChildren: () => import('./pages/detay/detay.module').then( m => m.DetayPageModule)
  },
  // {
  //   path: 'hesap',
  //   loadChildren: () => import('./pages/hesap/hesap.module').then( m => m.HesapPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
