import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Observable, throwError } from "rxjs";
import { catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json';
    constructor(private http: HttpClient) {}

    getProductFromServer(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An Error Occurred : ${err.error.message}`; 
        } else {
            errorMessage = `Server return code : ${err.status}, error msg is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

    getProduct(): Product[] {
        return [
            {
                "productId": 2,
                "productCode": "cnd-56",
                "productName": "Garden Cart",
                "releaseDate": "March 18, 2021",
                "description": "15 gallon capacity rolling garden",
                "price": 32.34,
                "starRating": 4.2,
                "imageUrl": "file:///home/ram/data/angular/july-27/BigPic/src/assets/download.jpeg"
              },
              {
                "productId": 2,
                "productName": "Garden Cart12 from service",
                "productCode": "cnd-12",
                "releaseDate": "March 18, 2021",
                "description": "15 gallon capacity rolling garden",
                "price": 2.3,
                "starRating": 2.3,
                "imageUrl": "file:///home/ram/data/angular/july-27/BigPic/src/assets/download.jpeg"
              }
        ]
    }
}