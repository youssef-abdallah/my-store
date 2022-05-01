import { Component, Input, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  quantityOptions = Array.from({length: 10}, (_, i) => i + 1);
  selectedQuantity: number = 1;
 
  @Input() product: Product = {
    id: 1,
    name: '',
    price: 0,
    url: '',
    description: ''
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addItemToCart(product: Product, quantity: number): void {
    this.cartService.addOrUpdateCartItem
      ({...product, quantity: quantity});
    alert(`Product ${product.name} was added to cart successfully!`);
  }
}
