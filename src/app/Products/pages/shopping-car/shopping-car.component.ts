import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css'],
})
export class ShoppingCardComponent {
  private producService = inject(ProductsService);
  public product: Product[] = [];
  public amount!: number;
  public total: number = 0;
  public totalProducts!: number;
  ngOnInit() {
    this.product = this.producService.getTagHistory();
  }
  getPriceDescount(product: Product): number | void {
    const des = parseFloat(
      (product.price * (product.discountPercentage / 100)).toFixed(2)
    );
    this.deleteProduct(product);

    let totalProduct = parseFloat(
      (product.amount! * (product.price - des)).toFixed(2)
    );
    product['total_price'] = totalProduct;
    this.getTotal();
    this.getTotalProducts();
    this.product = this.producService.setAllLocalStorage(this.product);
    return totalProduct;
  }
  getStock(product: Product): string {
    return product.stock > 0 ? 'Stock' : 'No hay Stock';
  }
  deleteProduct(product: Product): void {
    if (product.amount === 0)
      this.product = this.producService.deleteProduct(product);
  }

  getTotal() {
    this.total = this.product.reduce(
      (acc, element) => acc + (element.total_price || 0),
      0
    );
    this.total = parseFloat(this.total.toFixed(2));
  }
  getTotalProducts() {
    this.totalProducts = this.product.reduce(
      (accu, ele) => accu + (ele.amount || 0),
      0
    );
  }
}

//TODO:REVISAR
