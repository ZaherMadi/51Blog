import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl:"header.component.html" ,
  styleUrls: ["header.component.css"]
})
export class HeaderComponent {
page :string = "51Shop 🛒"

constructor(private router: Router){}

navigate(url: string){
  this.router.navigate([url]);
}
}
