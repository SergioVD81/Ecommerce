import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent {
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
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.activedRoute.params.subscribe(async (paramas: any) => {
      let idproduct: number = Number(paramas.idproduct);

      this.product = await this.productService.getProductById(idproduct);
      console.log(this.product);

      this.rating = this.product?.rating;

      this.pushIcons(this.rating);
      this.getReturnPolicy();
    });
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
