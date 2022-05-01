import { Injectable } from '@angular/core';

import { CartItem } from './models/cart.item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemList: CartItem[] = [];

  constructor() { }

  addOrUpdateCartItem(item: CartItem) {
    let itemIndex = this.itemList
      .findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex === -1)
      this.itemList.push(item);
    else
      this.itemList[itemIndex] = item;
  }

  getItemList(): CartItem[] {
    return [...this.itemList];
  }
}
