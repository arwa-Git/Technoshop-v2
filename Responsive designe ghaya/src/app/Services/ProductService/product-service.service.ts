import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDTO } from '../../classes/PoductDTO';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:6002/register/product';
  private apigetUrl = 'http://localhost:6002/getProducts';
  private apideleteUrl = 'http://localhost:6002/delete';
  private getproduct = 'http://localhost:6002/getProductById';
  private apiUpdateUrl = 'http://localhost:6002/UpdateProducts';

  

  constructor(private httpClient: HttpClient) { }

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
    return this.httpClient.post<any>(this.apiUrl, formData);
  }

  getAllProducts(): Observable<ProductDTO[]> {

     // Get the token from localStorage using the provided token name
     const token = localStorage.getItem('Token');

     // Set up the headers with the token
     const headers = new HttpHeaders({
       'Authorization': `Bearer ${token}` // Assuming your API uses Bearer token authentication
     });
    return this.httpClient.get<ProductDTO[]>(this.apigetUrl , {headers});
  }

  
  deleteProduct(product: ProductDTO): Observable<any> {
    
     // Get the token from localStorage using the provided token name
     const token = localStorage.getItem('Token');

     // Set up the headers with the token
     const headers = new HttpHeaders({
       'Authorization': `Bearer ${token}` // Assuming your API uses Bearer token authentication
     });
    const url = `${this.apideleteUrl}/${product.id}`;
    return this.httpClient.delete<any>(url , {headers});
  }
  
  
  getProductById(id:String):Observable<ProductDTO>{
    
     // Get the token from localStorage using the provided token name
     const token = localStorage.getItem('Token');

     // Set up the headers with the token
     const headers = new HttpHeaders({
       'Authorization': `Bearer ${token}` // Assuming your API uses Bearer token authentication
     });

    return this.httpClient.get<ProductDTO>(`${this.getproduct}/${id}` , {headers});
  }

  updateProduct(id:string , productData: any, imageFile: File): Observable<any> {
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
    return this.httpClient.put<any>(`${this.apiUpdateUrl}/${id}`, formData);
  }
}
