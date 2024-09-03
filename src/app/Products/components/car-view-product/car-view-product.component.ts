import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interface';
import { Router } from '@angular/router';

import * as dayjs from 'dayjs';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-car-view-product',
  templateUrl: './car-view-product.component.html',
  styleUrls: ['./car-view-product.component.css'],
})
export class CarViewProductComponent {
  @Input() product: Product | any;
  private router = inject(Router);
  public cantidad: number = 1;
  private productService = inject(ProductsService);
  deliveryDate(): string {
    const date = dayjs().add(4, 'days');
    return date.format('D-MM-YYYY');
  }

  fasterDelivery(): string {
    const date = dayjs().add(3, 'days');
    return date.format('D-MM-YYYY');
  }
  getStock(): string {
    return this.product?.stock > 0 ? 'Stock' : 'Sin Stock';
  }
  addProduct(product: Product) {
    product['amount'] = this.cantidad;
    // this.store.dispatch(SHOPPINGCAR({ products: product }));
    // this.car$ = this.store.select(selectCarShopping);
    this.productService.setTagHistory(product);
    this.router.navigate(['/car', product.id]);
    // console.log(this.cantidad);
    // console.log(product);
    // this.carServices.addNewProduct(product);
  }
}
