import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private products:Product[]=[
    {id:1, title: 'mobile', description: 'Xiami mobiles (6+128gb)', price: 16000},
    {id:2, title: 'laptop', description: 'Hp laptop 1TB', price: 64000},

   ];

 getProducts(): Product[] {
  return this.products;
 }
 getProductById(id: number): Product | undefined{
  return this.products.find(product => product.id ===id);
 }

 addProduct(product: Product): void{
  this.products.push(product);
 }

 updateProduct(updateProduct:Product){
  const index = this.products.findIndex(p=> p.id === updateProduct.id);
  if(index !== -1){
    this.products[index]= updateProduct;
    
  }
}

 deleteProduct(id: number): void{
  this.products=this.products.filter(product => product.id !== id);
 }


}
