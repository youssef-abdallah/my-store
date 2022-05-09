import { Component, OnInit } from '@angular/core';

import { CartItem } from 'src/app/models/cart.item.model';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  constructor
    (private productService: ProductService,
     private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    });
  }

  addItemToCart(cartItem: CartItem): void {
    this.cartService.addOrUpdateCartItem(cartItem);
    alert(`Product ${cartItem.name} was added to cart successfully!`);
  }
}
