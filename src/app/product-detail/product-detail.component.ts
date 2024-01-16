import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: 'product-detail.component.html',
  styleUrl: `product-detail.component.css`
})
export class ProductDetailComponent {
  id: string = "";

constructor(private route:ActivatedRoute, private router: Router)
{}

ngOnInit(): void {
  let res = this.route.snapshot.paramMap.get('id')
  if(res) {
    this.id = res
  }
  else {
    this.router.navigate(['404'])
  }
}
}
