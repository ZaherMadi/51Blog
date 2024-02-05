import { Component, Input, OnInit } from '@angular/core';
import { CartItem, Product } from '../models/product.model';
import { NgIf,NgFor, CommonModule, registerLocaleData } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroupDirective, NgForm, Validators,FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf,NgFor, MatCardModule, MatIconModule, MatButtonModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule,MatGridListModule, CommonModule],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.css"
})

export class ProductCardComponent{
@Input() myProduct!: Product;
@Input() ChoixPresentation!:string
selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

 nativeSelectFormControl = new FormControl('valid', [
  Validators.required,
  Validators.pattern('valid'),
]);

matcher = new MyErrorStateMatcher();



onAddLike()
{
  

  if(this.myProduct.isLiked===false)
  {
    this.myProduct.likes++;
    this.myProduct.isLiked =true;
  } 
  else
  {
    this.myProduct.likes--;
    this.myProduct.isLiked = false;
  }
}

onAddFavorite()
{
  if(this.myProduct.favorite==false)
  {
    this.myProduct.favorite = true;
  } 
  else
  {
    this.myProduct.favorite = false;
  }

}

addToCart(product: Product) {
  let cart = localStorage.getItem('panier');
  let cartItems = cart ? JSON.parse(cart) : [];

  let existingItem = cartItems.find((item: CartItem) => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ product: product, quantity: 1 });
  }

  localStorage.setItem("panier", JSON.stringify(cartItems));
  console.log("Article Added to Cart");
}

}
