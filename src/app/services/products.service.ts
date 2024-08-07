import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Data, Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products!: any;
  private skip: number = 20;
  private url: string = `https://dummyjson.com/products?limit=24&skip=${this.skip}`;
  private httpClient = inject(HttpClient);
  constructor() {}

  getAllProducts(): Observable<Data> {
    return this.httpClient.get<Data>(this.url);
  }
}
