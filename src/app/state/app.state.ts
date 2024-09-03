import { ActionReducerMap } from '@ngrx/store';
import { CarState, ProductState } from '../interfaces/product-state.interface';
import { addProductCar, loadProducts } from '../state/reducer/reducer.products';

export interface AppState {
  productsList: ProductState;
  shoopingCar: CarState;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  productsList: loadProducts,
  shoopingCar: addProductCar,
};
// ActionReducerMap<AppState> es un mecanismo central en NgRx que asocia el estado de tu aplicación con los reductores que lo manejan, permitiendo una gestión del estado estructurada y escalable.
