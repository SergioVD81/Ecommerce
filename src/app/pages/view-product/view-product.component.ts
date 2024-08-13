import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent {
  private activedRoute = inject(ActivatedRoute);
  private productService = inject(ProductsService);
  product!: Product;
  ngOnInit() {
    this.activedRoute.params.subscribe(async (paramas: any) => {
      let idproduct: number = Number(paramas.idproduct);
      console.log(idproduct);
      this.product = await this.productService.getProductById(idproduct);
      console.log(this.product);
    });
  }
}
