import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/order-details/order-details.module').then(m => m.OrderDetailsModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/cart-page/cart-page.module').then(m => m.CartPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
