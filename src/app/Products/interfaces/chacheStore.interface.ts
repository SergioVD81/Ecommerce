import { Product } from './product.interface';

export interface CacheStore {
  allProducts: AllProducts;
  byIdProduct: IdProduct;
}
export interface AllProducts {
  products: Product[];
}
export interface IdProduct {
  product: Product[];
}
