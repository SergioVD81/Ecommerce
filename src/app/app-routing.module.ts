import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./Products/products.module').then((m) => m.ProductsModule),
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./Login/login.module').then((m) => m.LoginModule), //Falta los guards
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
