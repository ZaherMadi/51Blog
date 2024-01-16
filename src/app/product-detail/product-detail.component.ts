import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: 'product-detail.component.html',
  styleUrl: `product-detail.component.css`
})
export class ProductDetailComponent {
  id: number = 0;
  product!: Product;
constructor(private route:ActivatedRoute, private router: Router, private ProductServices : ProductsService)
{}

ngOnInit(): void {
  let res = this.route.snapshot.paramMap.get('id')
  if(res) {
    this.id = parseInt(res)
    try{
     this.product = this.ProductServices.getOne((this.id)) 
    }
    catch (e) {
      this.router.navigate(['404'])
    }
  }

  else {
    this.router.navigate(['404'])
  }
}
}
