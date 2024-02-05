import { Component, Input, OnInit } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { Product } from "../models/product.model";
import {CurrencyPipe } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    CurrencyPipe,
    MatIconModule
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

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const element of this.TabArticles) {
      if (element) { // Vérifiez si l'article est sélectionné
        totalPrice += element.price;
      }
    }
    return totalPrice;
  }

  deleteItem(id: number) {
    const itemId = id.toString(); // Convert number id to a string
    localStorage.removeItem("id: 1")

  }
}
