import { Routes } from "@angular/router";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { RedirectionPageComponent } from "./redirection-page/redirection-page.component";
import { CheckoutComponent } from "./checkout/checkout.component";

export const routes: Routes = [
  
    {path: "", component: ProductsListComponent },
    {path: "shop", component: ProductsListComponent },
    {path: "cart" , component: CartComponent},
    {path: "Cart" , component: CartComponent},
    {path: "Details/:id" , component: ProductDetailComponent},
    {path: "checkout", component: CheckoutComponent},
    {path: "**" , component: RedirectionPageComponent},

];
