import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';

import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';

import { LOADESPRODUCTS, LOADPRODUCTS } from '../actions/loadProducts';
import { ProductsService } from 'src/app/Products/services/products.service';

@Injectable()
export class ProductEffects {
  private productService = inject(ProductsService);
  private actions$ = inject(Actions);
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Products] Load Products'),
      exhaustMap(() =>
        this.productService.getAllProducts().pipe(
          map((product) => ({
            type: LOADESPRODUCTS.type,
            products: product,
          })),
          catchError(() => of({ type: LOADPRODUCTS.type }))
        )
      )
    )
  );

  constructor() {}
}
