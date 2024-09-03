import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectListProducts } from 'src/app/state/selector/products.selector';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'products-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css'],
})
export class CardProductsComponent {
  arrayProdcts$: Observable<Product[]> = new Observable();
  private store = inject(Store<AppState>);
  ngOnInit() {
    this.arrayProdcts$ = this.store.select(selectListProducts);
  }
}
