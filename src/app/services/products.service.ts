import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }


  product: Product[] = [
      new Product(
        "Article Test",
        "Il manque plus qu'un like pour avoir 510 like!",
        "../assets/51logo.png",
        510,
        509,
        false,
        [
          "Choisir...",
          "Installation de réseau",
          "Dépannage réseau",
          "Amélioration du réseau",
        ],
        new Date("2023-12-24")
      ),

      new Product(
        "Prestations informatique - Network",
        "Plusieurs offre s'offre à vous..",
        "../assets/prestationtech.jpg",
        2300,
        0,
        false,
        [
          "Choisir...",
          "Installation de réseau",
          "Dépannage réseau",
          "Amélioration du réseau",
        ],
        new Date("2023-12-29")
      ),

      new Product(
        "Prestations informatique - Dev",
        "Plusieurs offre s'offre à vous..",
        "../assets/7055112.jpg",
        2000,
        0,
        false,
        [
          "Choisir...",
          "Installation de réseau",
          "Dépannage réseau",
          "Amélioration du réseau",
        ],
        new Date("2023-12-06")
      ),
    ];
  
    getProducts() {
      return this.product;
    }


}
