import { Component, Input, OnInit } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { CartItem, Product } from "../models/product.model";
import {CurrencyPipe } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { User } from "../models/product.model";
import { Router } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule, 
    MatDatepickerModule
  ],
  templateUrl: "cart.component.html",
  styleUrl: "cart.component.css"
})
export class CartComponent implements OnInit {
  @Input() myProduct!: Product;
  TabArticles: CartItem[] = [];
  @Input() myUser: User = new User(0, '', '', '', '',0,new Date);
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router){}
  
  ngOnInit(): void {
    let storage = localStorage.getItem("panier");

    if (storage) {
      this.TabArticles = JSON.parse(storage);
    } else {
      this.TabArticles = [];
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.TabArticles) {
      if (item) {
        totalPrice += (item.product.price * item.quantity);
      }
    }
    return totalPrice;
  }

  updateCart(item: CartItem) {
    // If quantity is 0, remove the item
    if (item.quantity <= 0) {
      this.deleteItem(item.product.id);
    } else {
      // Update localStorage
      localStorage.setItem('panier', JSON.stringify(this.TabArticles));
    }
  }

  deleteItem(id: number) {
  // Supprimez l'élément du tableau TabArticles en utilisant filter ou une autre méthode appropriée.
  this.TabArticles = this.TabArticles.filter(element => element.product.id !== id);

  // Mettez à jour localStorage avec le nouveau tableau d'articles.
  localStorage.setItem('panier', JSON.stringify(this.TabArticles));

  }
  navigate(url: string){
    this.router.navigate([url]);
  }
   NumberOrder(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  Submit(){
    const userKey = 'User';

    const userJson = JSON.stringify(this.myUser);

    const NumberGenerate = this.NumberOrder(1, 10000000);
     
  
    localStorage.setItem(userKey, userJson);

    localStorage.setItem("NumberOfOrder", NumberGenerate.toString())

    this.navigate('/checkout');
  }
}
