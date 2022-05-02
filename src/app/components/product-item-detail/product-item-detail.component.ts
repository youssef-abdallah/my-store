import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  quantityOptions = Array.from({length: 10}, (_, i) => i + 1);
  selectedQuantity: number = 1;
  id: number = 0;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idStr = params.get('id');
      this.id = idStr ? +idStr : 0;
    });

    this.productService.getProducts().subscribe(productList => {
      let productIdx = productList.findIndex(product => {
        return product.id === this.id;
      });
      this.product = (productIdx !== -1)
        ? productList[productIdx]
        : this.product;
    });
  }

  addItemToCart(product: Product, quantity: number): void {
    this.cartService.addOrUpdateCartItem
      ({...product, quantity: quantity});
    alert(`Product ${product.name} was added to cart successfully!`);
  }
}
