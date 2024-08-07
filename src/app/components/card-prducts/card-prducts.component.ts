import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-card-prducts',
  templateUrl: './card-prducts.component.html',
  styleUrls: ['./card-prducts.component.css'],
})
export class CardPrductsComponent {
  @Input() product!: Product;
  //TODO:Diseñar viwe-product
}
