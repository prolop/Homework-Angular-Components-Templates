import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products: Product[];
  @Output() changeFavoriteProduct: EventEmitter<Product> = new EventEmitter<Product>();

  changeFavorite(product) {
    this.changeFavoriteProduct.emit(product);
  }

}
