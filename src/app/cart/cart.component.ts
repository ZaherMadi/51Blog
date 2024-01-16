import { Component, Input, OnInit } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { Product } from "../models/product.model";
import {CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: "cart.component.html",
  styles: ``
})
export class CartComponent implements OnInit {
  @Input() myProduct!: Product;
  TabArticles: Product[] = [];

  ngOnInit(): void {
    let storage = localStorage.getItem("panier");

    if (storage) {
      this.TabArticles = JSON.parse(storage);
    } else {
      this.TabArticles = [];
    }
  }
}
