import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { NgIf,NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf,NgFor, MatCardModule, MatButtonModule],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.css"
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
