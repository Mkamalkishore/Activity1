import { Component, Input, Output,EventEmitter } from '@angular/core';
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
  //selectedProduct: Product | undefined;
  @Input() product: Product | undefined;
  @Input() productId: number | null=null;
@Output() updated= new EventEmitter<Product>();

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService)
    {  }
  
    addToCart(product: Product): void{
      this.cartService.addToCart(product);
    }

    ngOnInit(){
      if(this.productId){
        this.product = this.productService.getProductById(this.productId)
      }
    }
  
  //getProductById(id: number): void{
    //this.selectedProduct= this.productService.getProductById(id);
  //}

  editProduct(){
    if(this.product){
     this.updated.emit(this.product);
  }
}
}
  
