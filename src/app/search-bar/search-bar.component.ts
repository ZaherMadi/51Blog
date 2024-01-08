import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatIconModule],
  templateUrl: "search-bar.component.html",
  styleUrls: ["search-bar.component.css"]
})
export class SearchBarComponent {
searchTerm: string = ' ';


@Output() searchTermChange = new EventEmitter<string>();

onSearchTermChange(): void {
  this.searchTermChange.emit(this.searchTerm);
}

}



