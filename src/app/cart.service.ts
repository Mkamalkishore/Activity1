import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cartItems:Product[]=[];

addToCart(product: Product):void{
  this.cartItems.push(product);
}
  removeFromCart(product: Product): void{
    const index =this.cartItems.indexOf(product);
    if (index !== -1){
      this.cartItems.splice(index, 1);
    }  }
    clearCart():void{
      this.cartItems=[];
    }
    getCartItems(): Product[]{
      return this.cartItems;
    }
}
