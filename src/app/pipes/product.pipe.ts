import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductCardComponent } from "../product-card/product-card.component";

@Pipe({ name: "sortByDate", standalone: true })
export class SortByDate implements PipeTransform {
  transform(products: Product[], order?: any) {
    let desc = !(order && order === "asc");

    return products.sort((a, b) => {
      if (desc) return b.DateOfCreation!.getTime() - a.DateOfCreation!.getTime();
      else return a.DateOfCreation!.getTime() - b.DateOfCreation!.getTime();
    });
  }
}
