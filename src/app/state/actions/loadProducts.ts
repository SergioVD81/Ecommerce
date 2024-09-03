import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/Products/interfaces/product.interface';

//las acciones expresan eventos unicos ,son las entradas o salidas del sistemas  y pueden ejecutar otras acciones. Denro de los corchetes debe de hacer  referencia a lo que se esté realizando una autenticacion del login por ejemplo[Auth API] login succes:

export const LOADPRODUCTS = createAction('[Products] Load Products');
export const LOADESPRODUCTS = createAction(
  '[Products All] Loaded success',
  props<{ products: Product[] }>()
);
export const SHOPPINGCAR = createAction(
  '[ShoppingCar] add product',
  props<{ products: Product }>()
);
