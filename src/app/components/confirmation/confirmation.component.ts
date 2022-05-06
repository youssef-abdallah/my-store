import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  fullName: string = '';
  totalCost: number = 0;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let fullName = params.get('fullName');
      let totalCost =  params.get('totalCost');

      this.fullName = fullName ? fullName : this.fullName;
      this.totalCost = totalCost ? +totalCost : this.totalCost;
    });
  }

  navigateToProducts(): void {
    this.router.navigate(['products']);
  }
}
