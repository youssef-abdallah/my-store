import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() id: number = 1;
  @Input() name: string = '';
  @Input() price: number = 0.0;
  @Input() imageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
