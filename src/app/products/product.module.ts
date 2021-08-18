import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomPipes } from '../shared/custom-pipes';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    CustomPipes,
    ProductDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'product/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent

      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
