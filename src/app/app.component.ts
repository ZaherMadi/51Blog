import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from './models/product.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent,NgIf],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit{
  title = 'angularprojectII';
  product! : Product[];


ngOnInit(){
  this.product = [
    new Product(
    "Article Test",
     "Description de mon article personnalisée",
     "../assets/51logo.png",
    2300,
    0,
    false,
    ), new Product(
      "Prestations informatique - Network",
       "Plusieurs offre s'offre à vous..",
       "../assets/prestationtech.jpg",
      2300,
      0,
      false,
      ["XS","S","M"]      ),
      
      new Product(
        "Prestations informatique - Dev",
         "Plusieurs offre s'offre à vous..",
         "../assets/7055112.jpg",
        2000,
        0,
        false,
        ["XS","S","M"]      )
  ]

}



}