import { Product } from '../Products/interfaces/product.interface';

export interface ProductState {
  loading: boolean;
  products: Product[];
}

export interface CarState {
  products: Product;
}
