import { createReducer, on } from '@ngrx/store';

import {
  LOADPRODUCTS,
  LOADESPRODUCTS,
  SHOPPINGCAR,
} from '../actions/loadProducts';

import {
  CarState,
  ProductState,
} from 'src/app/interfaces/product-state.interface';
import { Product } from 'src/app/Products/interfaces/product.interface';

//Los reducers son los causantes de pasar de un estadoActual a (oldState) a un estado nuevo,es decir, transisionan los cambios
export const initialState: ProductState = { loading: false, products: [] };

export const loadProducts = createReducer(
  initialState,
  on(LOADPRODUCTS, (state) => {
    //El state es el estado inicial de products[]
    return { ...state, loading: true };
  }),
  on(LOADESPRODUCTS, (state, { products }) => {
    //El state es el estado inicial de products[]
    return { ...state, loading: false, products: products };
  })
);
export const initialCarState: CarState = { products: {} as Product };

export const addProductCar = createReducer(
  initialCarState,
  on(SHOPPINGCAR, (state, { products }) => {
    return { ...state, products };
  })
); //Se utiliz ... para clonar el estado del objeto
//TODO:crear la funcion reductora para cargar el productId
