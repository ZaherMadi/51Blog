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

@Pipe({ name: "sortByName", standalone: true })
export class SortByName implements PipeTransform {
  transform(products: Product[], order? :any): Product[] {
    if(!order.includes('Name')) return products
    
    return products.sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();

      if (order === 'AscName') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  }
}

// @Pipe({ name: "research", standalone: true })
// export class Research implements PipeTransform {
//   transform(products: Product[], order?: any) {
//  }
  
// }

