import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';

@Component({
//  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Details';
  product: Product | undefined;

  constructor(private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `:  ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
