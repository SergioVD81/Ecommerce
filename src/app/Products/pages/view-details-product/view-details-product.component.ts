import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import {
  faStar,
  faStarHalfAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import { Store } from '@ngrx/store';

import { Observable, switchMap } from 'rxjs';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
//import { selectIdProductAPI } from 'src/app/state/selector/products.selector';

@Component({
  selector: 'products-view-product',
  templateUrl: './view-details-product.component.html',
  styleUrls: ['./view-details-product.component.css'],
})
export class ViewDetailsProductComponent {
  private activedRoute = inject(ActivatedRoute);
  private productService = inject(ProductsService);
  private sanitizer = inject(DomSanitizer);
  private rating: number = 0;
  state!: boolean;
  arr: any[] = [];
  product: Product | any;
  faTimes = faTimes;
  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  faStarEmpty = faStarEmpty;
  prodcts$: Observable<any> = new Observable();
  constructor(private store: Store) {}
  //FIXME:arregla el redimensionamiento de la imagen
  //TODO :Cambiar las propiedades de publicas a privadas
  ngOnInit() {
    this.activedRoute.params
      .pipe(
        switchMap(({ idProduct }) =>
          this.productService.getProductById(idProduct)
        )
      )
      .subscribe((response) => {
        this.product = response;
        this.pushIcons(this.product?.rating);
      });

    this.rating = this.product?.rating;

    this.getReturnPolicy();
  }

  sanitizerImg(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(this.product?.images[0]);
  }

  pushIcons(rat: number) {
    for (let i = 1; i <= 5; i++) {
      if (i <= rat) {
        this.arr.push('full');
      } else if (i - rat <= 0.99) {
        this.arr.push('half');
      } else {
        this.arr.push('empty');
      }
    }
  }

  getPriceDescount(): number {
    const des = this.product?.price * (this.product?.discountPercentage / 100);

    return this.product?.price - des;
  }
  getStateWarranty() {
    this.state = !this.state;
  }
  getReturnPolicy(): string {
    return this.product?.returnPolicy.substring(0, 2);
  }
}
