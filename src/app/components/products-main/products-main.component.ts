import { Component, OnInit } from '@angular/core';
import products from '../../constants/products';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent implements OnInit {

  public products = products;

  public filteredProducts = products;

  public favoriteProducts = [];

  public isSortDesc = true;

  constructor() { }

  ngOnInit() {
    this.sortProducts();
  }

  search(inputEl) {
    const value = inputEl.value;
    this.filteredProducts = this.products.filter(product => product.Title.toLowerCase().match(value.toLowerCase()));
  }

  sortProducts() {
    this.isSortDesc = !this.isSortDesc;
    this.filteredProducts.sort((a, b) => {
      return this.isSortDesc ? a.Rating - b.Rating : b.Rating - a.Rating;
    });
  }

  addFavoriteProduct(product) {
    product.Favorite = true;
    this.favoriteProducts.push(product);
    this.products.splice(this.products.indexOf(product), 1);
  }

  removeFavoriteProduct(product) {
    product.Favorite = false;
    this.products.push(product);
    this.favoriteProducts.splice(this.favoriteProducts.indexOf(product), 1);
    this.isSortDesc = !this.isSortDesc;
    this.sortProducts();
  }

}
