import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPrductsComponent } from './components/card-prducts/card-prducts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitleCardPipe } from './pipes/title-card.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ViewProductComponent,
    ShoppingCardComponent,
    LoginComponent,
    HeaderComponent,
    CardPrductsComponent,
    NotFoundComponent,
    TitleCardPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
