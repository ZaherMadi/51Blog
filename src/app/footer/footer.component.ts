import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      Created by Zaher Madi | 2024
    </footer>
  `,
  styles: `footer{
    text-align: center;
    font-family: "Raleway", sans-serif;
    background-color: rgb(59, 87, 144)}`
})
export class FooterComponent {

}
