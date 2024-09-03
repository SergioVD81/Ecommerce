import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CardProductsComponent } from './components/card-products/card-products.component';
import { CarViewProductComponent } from './components/car-view-product/car-view-product.component';
import { HomeComponent } from './pages/home/home.component';
import { PorcentajePipe } from './pipes/porcentaje.pipe';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ShoppingCardComponent } from './pages/shopping-car/shopping-car.component';
import { TitleCardPipe } from './pipes/title-card.pipe';
import { ViewDetailsProductComponent } from './pages/view-details-product/view-details-product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    CardProductsComponent,
    CarViewProductComponent,
    HomeComponent,
    ReviewsComponent,
    ShoppingCardComponent,
    ViewDetailsProductComponent,
    PorcentajePipe,
    TitleCardPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ProductRoutingModule,
  ],
  exports: [],
})
export class ProductsModule {}
