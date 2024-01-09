import { Component, LOCALE_ID, OnInit } from "@angular/core";
import { CommonModule, NgIf, registerLocaleData } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from "./models/product.model";
import localesfr from "@angular/common/locales/fr";
import { TriArticlesComponent } from "./tri-articles/tri-articles.component";
import { SortByDate, SortByName } from "./pipes/product.pipe";
import {ProductsService} from './services/products.service'
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

registerLocaleData(localesfr);


@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, ProductCardComponent, NgIf, SortByDate, SortByName, TriArticlesComponent,MatGridListModule, FooterComponent, SearchBarComponent, MatCheckboxModule,MatRadioModule, FormsModule],
  templateUrl: "./app.component.html",
  styles: [`mat-checkbox{float: right}`],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr-FR", // 'de-DE' for Germany, 'fr-FR' for France...
    },
  ],
})
export class AppComponent implements OnInit {
  title = "angularprojectII";
  ChoixPresentation = "desc";
  searchTerm: string = '';
  product!: Product[];
  filteredProducts: Product[] = [];
  OnlyFavorite: boolean = false;
  TriNom: string = "";
  
  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.product = this.productsService.getProducts();
    this.filteredProducts = this.product
  }
  
  onSelectionChange(newValue: string) {
    this.ChoixPresentation = newValue;
    console.log(newValue)

  }
  

  handleSearchTermChange(newSearchTerm: string) {
    this.searchTerm = newSearchTerm;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.product
      .filter(product => product.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
  
    if(this.OnlyFavorite===true)
    {
      this.filteredProducts = this.filteredProducts
      .filter(product => product.favorite===true)
    }



    }

    

}
