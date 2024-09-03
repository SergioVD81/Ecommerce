import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewDetailsProductComponent } from './pages/view-details-product/view-details-product.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ShoppingCardComponent } from './pages/shopping-car/shopping-car.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-product/:idProduct', component: ViewDetailsProductComponent },
  { path: 'review/:idproduct', component: ReviewsComponent },
  { path: 'car/:idProduct', component: ShoppingCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
