import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }


  product: Product[] = [
      new Product(
        1,
        "Prestation personnalisée",
        "On se like ?",
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
        new Date("2023-12-24"),
        false
      ),

      new Product(
        2,
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
        new Date("2023-12-29"),
        false
      ),

      new Product(
        3,
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
        new Date("2023-12-06"),
        false
      ),
      new Product(
        4,
        "Développement Web",
        "Création de sites web modernes et réactifs.",
        "../assets/webdev.jpg",
        1800,
        5,
        false,
        ["Choisir...", "Site vitrine", "E-commerce", "Application Web"],
        new Date("2023-11-15"),
        false
    ),
    new Product(
      5,
        "Conception Graphique",
        "Services de conception graphique pour tous vos besoins.",
        "../assets/internet.jpg",
        1500,
        8,
        false,
        ["Choisir...", "Logo Design", "Branding", "Publicité"],
        new Date("2023-10-20"),
        false
    ),
    new Product(
      6,
        "Marketing Digital",
        "Boostez votre présence en ligne avec nos solutions marketing.",
        "../assets/Vector_2646.jpg",
        2100,
        12,
        false,
        ["Choisir...", "SEO", "Publicité en ligne", "Marketing sur les réseaux sociaux"],
        new Date("2023-09-30"),
        false
    ),
    ];
  
    getProducts() {
      return this.product;
    }

    getOne(id: number) : Product
    {
      let res = this.product.find((product) => product.id === id)
      if(res) {
        return res;
      } else {
        throw new Error("Product not found")
      }
    }

    onLikeProduct(product: Product): void {
      if(product.isLiked)
      {}
    }


}
