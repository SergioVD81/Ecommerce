import { inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCarShopping } from '../state/selector/products.selector';
import { Product } from '../Products/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private product$: Observable<Product> = new Observable();
  private arrayProducts!: Product[];
  private store = inject(Store);
  addProductCar() {
    this.product$ = this.store.select(selectCarShopping);
    this.product$.subscribe((data) => {
      this.arrayProducts.push(data);
      console.log(this.arrayProducts);
      return this.arrayProducts;
    });
  }
}
