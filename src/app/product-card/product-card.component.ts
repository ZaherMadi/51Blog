import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
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

addToCart(product : Product)
{
let panier = localStorage.getItem('panier')
if(panier){
  let TabPanier = JSON.parse(panier)
  TabPanier.push(product)
  localStorage.setItem("panier", JSON.stringify(TabPanier))
  console.log("Cart created")
  console.log("Article Added to Cart")


}
  else
  {
    let TabPanier = []
    TabPanier.push(product)
    localStorage.setItem("panier", JSON.stringify(TabPanier))
    console.log("Article Added to Cart")
  }


}

}
