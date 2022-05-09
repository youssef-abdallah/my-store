import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addItemToCart(product: Product, quantity: number): void {
    this.addToCart.emit({...product, quantity: quantity});
  }
}
