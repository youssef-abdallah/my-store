import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/models/cart.item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemList: CartItem[] = [];
  totalCost: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItemList = this.cartService.getItemList();
    this.totalCost = this.cartService.getTotalCost();
  }

  quantityChanged(cartItem: CartItem): void {
    if (cartItem.quantity === 0) {
      this.cartItemList = this.cartService.removeItem(cartItem)
      alert(`Item ${cartItem.name} has been removed from cart.`);
    }
    else
      this.cartService.addOrUpdateCartItem(cartItem);
    this.totalCost = this.cartService.getTotalCost();
  }
}
