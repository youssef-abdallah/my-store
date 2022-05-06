import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitConfirmationForm(): void {
    
  }
}
