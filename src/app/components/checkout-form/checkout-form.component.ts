import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';

  constructor(private router: Router,
              private cartService: CartService){ }

  ngOnInit(): void {
  }

  submitConfirmationForm(): void {
    this.router.navigate
      (['confirmation',
       { 'fullName': this.fullName,
         'totalCost': this.cartService.getTotalCost() }]);
  }
}
