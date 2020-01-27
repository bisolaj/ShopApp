import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
    products: Product[] = [
      {
        id:'1',
        productName:'Naija Star A',
        productNameURL: 'NaijaStars',
        productDescription: 'Naija A',
        additionalInfo: 'The can cause a paper cut',
        price: '$20.00'
      },
      {
        id:'2',
        productName:'Naija Star B',
        productNameURL: 'NaijaStars',
        productDescription: 'Naija B',
        additionalInfo: 'The can cause a paper cut',
        price: '$30.00'
      },
      {
        id:'3',
        productName:'Naija Star C',
        productNameURL: 'NaijaStars',
        productDescription: 'Naija C',
        additionalInfo: 'The can cause a paper cut',
        price: '$40.00'
      },
      {
        id:'4',
        productName:'Naija Star D',
        productNameURL: 'NaijaStars',
        productDescription: 'Naija D',
        additionalInfo: 'The can cause a paper cut',
        price: '$50.00'
      }

    ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

  getItem(id: string): Observable <Product> {
    return of(this.products.find(
      product => product.id === id
    ));
  }
}
