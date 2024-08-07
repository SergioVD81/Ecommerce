import { Component, inject } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private productsService = inject(ProductsService);
  private arrayProdcts!: Product[];
  constructor() {}

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data: any) => {
      this.arrayProdcts = data.products;
      console.log(this.arrayProdcts);
      console.log(data);
    });
  }
  getProducts(): Product[] {
    return this.arrayProdcts;
  }
}
