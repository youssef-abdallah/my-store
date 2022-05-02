import { Injectable } from '@angular/core';

import { CartItem } from './models/cart.item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemList: CartItem[] = [];

  constructor() { }

  addOrUpdateCartItem(item: CartItem): CartItem[] {
    let itemIndex = this.itemList
      .findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex === -1)
      this.itemList.push(item);
    else
      this.itemList[itemIndex] = item;

    return this.getItemList();
  }

  getItemList(): CartItem[] {
    return [...this.itemList];
  }

  removeItem(item: CartItem): CartItem[] {
    let itemIndex = this.itemList
      .findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex !== -1)
      this.itemList.splice(itemIndex, 1);

    return this.getItemList();
  }

  getTotalCost(): number {
    let totalCost = 0;
    this.itemList.forEach(item => {
      totalCost += item.price * item.quantity;
    })
    return totalCost;
  }
}
