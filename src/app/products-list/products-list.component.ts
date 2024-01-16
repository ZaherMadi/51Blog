import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from "../services/products.service";
import localesfr from "@angular/common/locales/fr";
import { TriArticlesComponent } from "../tri-articles/tri-articles.component";
import { SortByDate, SortByName } from "../pipes/product.pipe";
import { MatGridListModule } from "@angular/material/grid-list";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    ProductCardComponent,
    NgIf,
    HeaderComponent,
    SortByDate,
    SortByName,
    TriArticlesComponent,
    MatGridListModule,
    FooterComponent,
    SearchBarComponent,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl:'products-list.component.html',
  styles: `      mat-checkbox {
    float: right;
  }`
})
export class ProductsListComponent {
  title = "angularprojectII";
  ChoixPresentation = "desc";
  searchTerm: string = "";
  product!: Product[];
  filteredProducts: Product[] = [];
  OnlyFavorite: boolean = false;
  TriNom: string = "";

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.product = this.productsService.getProducts();
    this.filteredProducts = this.product;
  }
  
  onSelectionChange(newValue: string) {
    this.ChoixPresentation = newValue;
    console.log(newValue);
  }

  handleSearchTermChange(newSearchTerm: string) {
    this.searchTerm = newSearchTerm;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.product.filter((product) =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.OnlyFavorite === true) {
      this.filteredProducts = this.filteredProducts.filter(
        (product) => product.favorite === true
      );
    }
  }
}
