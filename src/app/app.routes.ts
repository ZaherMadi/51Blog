import { Routes } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";

export const routes: Routes = [
  { path: "", component: ProductsListComponent },
    {path: "Cart" , component: CartComponent}
];
