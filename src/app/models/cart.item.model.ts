import { Product } from "./product.model";

export class CartItem extends Product {

    quantity: number = 1;

    constructor() { 
        super();
    }
}
