import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("assets/data.json");
  }
}
