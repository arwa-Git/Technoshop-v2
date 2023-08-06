import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../classes/PoductDTO';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:6002/register/product';
  private apigetUrl = 'http://localhost:6002/getProducts';
  private apideleteUrl = 'http://localhost:6002/delete';

  

  constructor(private http: HttpClient) { }

  createProduct(productData: any, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price.toString());
    formData.append('category', productData.category);
    formData.append('description', productData.description);
    formData.append('image', imageFile); // Append the file directly

    //const urlsArray = Array.isArray(productData.urls) ? productData.urls : [productData.urls];
    //const urlsString = urlsArray.join(',');
    formData.append('urls', productData.urls);

    // Send the FormData object as the request body
    /////
    return this.http.post<any>(this.apiUrl, formData);
  }

  getAllProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>(this.apigetUrl);
  }

  
  deleteProduct(product: ProductDTO): Observable<any> {
    const url = `${this.apideleteUrl}/${product.id}`;
    return this.http.delete<any>(url);
  }
  
  

}
