import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: "./product-card.component.html",
  styles: ``
})

export class ProductCardComponent{
@Input() myProduct!: Product;



onAddLike()
{
  

  if(this.myProduct.isLiked===false)
  {
    this.myProduct.likes++;
    this.myProduct.isLiked =true;
  } 
  else
  {
    this.myProduct.likes--;
    this.myProduct.isLiked = false;
  }
}
}
