import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { lastValueFrom, Observable, map, tap, catchError, of } from 'rxjs';
import { Product, Data } from '../interfaces/product.interface';
import { CacheStore } from '../interfaces/chacheStore.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private skip: number = 20;
  private url: string = `https://dummyjson.com/products`;
  private httpClient = inject(HttpClient);
  public tagHistory: Product[] = [];
  public cacheStore: CacheStore = {
    allProducts: { products: [] },
    byIdProduct: { product: [] },
  };
  constructor() {
    this.loadLocalStore();
  }
  private saveLocalStore() {
    localStorage.setItem('product', JSON.stringify([...this.tagHistory]));
  }
  private loadLocalStore() {
    if (localStorage.getItem('product')) {
      this.tagHistory = JSON.parse(localStorage.getItem('product')!);
    }
  }
  getAllProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Data>(`${this.url}?limit=24&skip=${this.skip}`)
      .pipe(
        map((data: Data) => data.products),
        catchError((error) => {
          return of([]);
        }),
        tap((products) => {
          this.cacheStore.allProducts = { products };
        })
      );
  }
  getProductById(id: number): Observable<Product | null> {
    return this.httpClient.get<Product>(`${this.url}/${id}`).pipe(
      catchError((error) => {
        return of({} as Product);
      })
    );
  }

  getTagHistory(): Product[] {
    return [...this.tagHistory];
  }
  setTagHistory(product: Product): void {
    this.tagHistory.unshift(product);
    this.saveLocalStore();
  }
  setAllLocalStorage(products: Product[]) {
    this.tagHistory = products;
    localStorage.setItem('product', JSON.stringify(this.tagHistory));
    if (this.tagHistory.length === 0) localStorage.removeItem('product');
    return this.tagHistory;
  }
  deleteProduct(product: Product): Product[] {
    this.tagHistory = this.tagHistory.filter(
      (products) => products.id !== product.id
    );
    localStorage.setItem('product', JSON.stringify(this.tagHistory));
    if (this.tagHistory.length === 0) localStorage.removeItem('product');
    return this.tagHistory;
  }
}
