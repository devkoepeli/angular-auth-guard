import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  
  // key in localstorage
  private authTokenKey = 'Bearer Token';

  constructor(private http: HttpClient) { }

  // ** bearer token has no real use in this example ** just for demonstrational purpose **
  // define http headers with the bearer token in order to access the ressources without each time having to
  // authenticate username and password of the user
  private getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem(this.authTokenKey);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    });
  }

  // Send headers in the http request to the server to let the server know, that the request is authorized with a token
  getProducts(): Observable<Product[]> {
    const headers = this.getHeaders();
    return this.http.get<Product[]>(this.apiUrl, { headers });
  }
}
