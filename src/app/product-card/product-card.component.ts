import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { NgIf,NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroupDirective, NgForm, Validators,FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


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
  imports: [NgIf,NgFor, MatCardModule, MatButtonModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: "./product-card.component.html",
  styleUrl: "./product-card.component.css"
})

export class ProductCardComponent{
@Input() myProduct!: Product;
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
}
