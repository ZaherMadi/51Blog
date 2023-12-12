import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent],
  template: `
  <app-product-card></app-product-card>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angularprojectII';
}
