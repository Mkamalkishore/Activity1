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
}
