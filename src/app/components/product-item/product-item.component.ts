import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = {
    id: 1,
    name: '',
    price: 0,
    url: '',
    description: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
