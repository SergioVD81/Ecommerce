import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  CarState,
  ProductState,
} from 'src/app/interfaces/product-state.interface';

//Obtiene informacion del store , desgrana toda la informacion contenida y nos trae la que hayamos seleccionado

//El selector que hace referencia al futuro stado , tiene que tener relación con la propiedad declara en ROO_REDUCERS,ya que esta hace referencia al la funcion reductora
export const selectProductFeature = (state: AppState) => state.productsList;
export const selectCarFeature = (state: AppState) => state.shoopingCar;
//export const selectidProductFeature = (state: AppState) => state.idProduct;

export const selectListProducts = createSelector(
  selectProductFeature,
  (state: ProductState) => state.products
);

export const selectLoading = createSelector(
  selectProductFeature,
  (state: ProductState) => state.loading
);

export const selectCarShopping = createSelector(
  selectCarFeature,
  (state: CarState) => state.products
);
