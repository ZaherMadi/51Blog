import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators,FormsModule, ReactiveFormsModule,} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tri-articles',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl:"./tri-articles.component.html",
  styles: ``
})

export class TriArticlesComponent {
@Input() ChoixPresentation!: String;

// @Output() ChoixPresentationChange;

// function onSelectionChange(value: string) {
//   this.ChoixPresentation = value;
//   this.ChoixPresentationChange.emit(this.ChoixPresentation);
// }

};
