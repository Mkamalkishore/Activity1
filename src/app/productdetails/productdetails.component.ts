import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  selectedProduct: Product | undefined;
  
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService)
    {  }
  
    addToCart(product: Product): void{
      this.cartService.addToCart(product);
    }
  
  getProductById(id: number): void{
    this.selectedProduct= this.productService.getProductById(id);
  }
 }
  
