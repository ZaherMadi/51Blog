import { Component, Input } from "@angular/core";
import { User } from '../models/product.model';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: 'checkout.component.html',
  styleUrl:  'checkout.component.css',
})
export class CheckoutComponent {
   
  @Input() myUser!: User;
  @Input() myOrder!: number;

  ngOnInit(): void {
      this.getUserFromLocalStorage();
      this.getOrderNumberFromLocalStorage();
  }
  
  private getUserFromLocalStorage(): void {
    const storage = localStorage.getItem("User");
    if (storage) {
      this.myUser = JSON.parse(storage);
    } else {
      // Consider using a service or factory to create default users if this is common
      this.myUser = new User(0, '', '', '', '', 0, new Date());
    }
  }

  private getOrderNumberFromLocalStorage(): void {
    const ordernum = localStorage.getItem("NumberOfOrder");
    if (ordernum) {
      this.myOrder = JSON.parse(ordernum);
    } else {
      this.myOrder = 1234567899999;
    }
  }
}




