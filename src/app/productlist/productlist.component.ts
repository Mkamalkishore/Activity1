import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

  
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products: Product[] = [];
  selectedProductId: number| null=null;

  constructor(private productService: ProductService){
    this.products=productService.getProducts();
  }
  selectedProduct: Product | null=null;

  showProductDetails(product:Product){
    this.selectedProduct = product;
  }

  ngOnInit(): void{
    this.products= this.productService.getProducts();
  }

createProduct(newProduct: Product): void{
  this.productService.addProduct(newProduct);
}

updateProduct(updateProduct: Product){
  const index = this.products.findIndex(p=> p.title=== updateProduct.title);
  if(index !== -1){
    this.products[index]=updateProduct;
    this.selectedProduct=null;
    console.log('Updated product:', updateProduct);
  }
}
}
