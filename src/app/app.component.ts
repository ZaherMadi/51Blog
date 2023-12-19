import { Component, LOCALE_ID, OnInit } from "@angular/core";
import { CommonModule, NgIf, registerLocaleData } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from "./models/product.model";
import localesfr from "@angular/common/locales/fr";
import { TriArticlesComponent } from "./tri-articles/tri-articles.component";
import { SortByDate } from "./pipes/product.pipe";
registerLocaleData(localesfr);
import {ProductsService} from './services/products.service'

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent, NgIf, SortByDate, TriArticlesComponent],
  templateUrl: "./app.component.html",
  styles: [``],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr-FR", // 'de-DE' for Germany, 'fr-FR' for France...
    },
  ],
})
export class AppComponent implements OnInit {
  title = "angularprojectII";
  ChoixPresentation = "asc";
  product!: Product[];

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.product = this.productsService.getProducts();
  }
}
