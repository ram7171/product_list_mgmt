import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
//  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {

  pageTitle: string = "Product List! ";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';

  // sub: Subscription | undefined;
  sub!: Subscription ;
  
  private _listFilter: string = '';
  get listFilter(): string {

    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("in setter:", value);
    this.filteredProduct = this.performFilterOperation(value);
  }

  filteredProduct: Product[] = [];

  products: Product[] = [];


  private _productService;
// //one way of definition
//   constructor(productService: ProductService) {
//     this._productService = productService;
//   }
  // another way of definition
  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log("compoent initialization");
    // this.products = this.productService.getProduct();
    this.sub = this.productService.getProductFromServer().subscribe({
      next: products => {
         this.products = products;
         this.filteredProduct = this.products;
      },
      error: err => this.errorMessage = err
    });
    
    
    // this._listFilter = 'cart';

  }

  ngOnDestroy() {
    console.log("un subscribe");
    this.sub.unsubscribe();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilterOperation(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(msg: string): void {
    this.pageTitle = 'Product List:' + msg;
  }
}
