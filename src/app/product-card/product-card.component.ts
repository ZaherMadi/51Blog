import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: "./product-card.component.html",
  styles: ``
})

export class ProductCardComponent implements OnInit {
  title: string = "";
  description : string = "";
  imageUrl: string= "../../assets/logo5.png";
  price: number= 0;
  likes: number=0;
  isLiked: boolean = false;
constructor() {}

ngOnInit(): void{
  this.title = "Article 1",
  this.description = "Description de mon article personnalisée",
  // this.imageUrl = "../../assets/51logo.png";
  this.imageUrl = "../../assets/prestationtech.jpg";
  this.price = 2300;
  this.isLiked = false;

}


onAddLike(clicked: boolean)
{
  

  if(clicked===false)
  {
    this.likes++;
    this.isLiked =true;
  } 
  else
  {
    this.likes--;
    this.isLiked = false;
  }
}
}
