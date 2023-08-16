import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../../classes/User';
import { UserLogin } from '../../classes/UserLogin';
import { LoginResponse } from '../../classes/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  baseUrl = "http://localhost:6002";
  forgotUrl = "http://localhost:6002/forgotPassword";
  apigetUsersUrl ="http://localhost:6002/api/users";
  getUserByEmailUrl = "http://localhost:6002/api/user";
  deleteUserUrl = "http://localhost:6002/api/deleteByEmail";
  constructor(private httpClient : HttpClient) { }


  //Post Methode to Send CreatedUser To MongoDB
  addUser(user?:User):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}/register`,user);
  }

  getAllUsers(): Observable<User[]> {
    
     // Get the token from localStorage using the provided token name
     const token = localStorage.getItem('Token');

     // Set up the headers with the token
     const headers = new HttpHeaders({
       'Authorization': `Bearer ${token}` // Assuming your API uses Bearer token authentication
     });
    return this.httpClient.get<User[]>(this.apigetUsersUrl , {headers});
  }

  getUserByEmail(email: string): Observable<User> {
    
     // Get the token from localStorage using the provided token name
     const token = localStorage.getItem('Token');

     // Set up the headers with the token
     const headers = new HttpHeaders({
       'Authorization': `Bearer ${token}` // Assuming your API uses Bearer token authentication
     });
    const url = `${this.getUserByEmailUrl}?email=${email}`;
    return this.httpClient.get<User>(url , {headers});
  }


  //Post Methode to Login
  Login(userLogin?: UserLogin): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.baseUrl}/authenticate`, userLogin).pipe(
      tap(response => {
        const token = response.jwt.toString();
        localStorage.setItem('Token', token);
      })
    );
  }

  //Get Method to pubilsh secret message 
  hello():Observable<Object>{
      // Retrieve the token from wherever it is stored (e.g., local storage, session storage)
      const token = localStorage.getItem('Token');
      
      // Create the headers object and set the Authorization header with the token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   
      // Make the GET request with the headers
      return this.httpClient.get<Object>(`${this.baseUrl}/api/hello`, { headers });   
  }

  ForgotPassword(adress?: any): Observable<string> {
    const url = `${this.forgotUrl}/${adress}`;
    console.log(url);
    alert("An email verification link will be sent to you")
    return this.httpClient.get<string>(`${this.forgotUrl}/${adress}`);
  }




  deleteUserByEmail(email: string): Observable<any> {
    const url = `${this.deleteUserUrl}/deleteByEmail`;
    return this.httpClient.delete(this.deleteUserUrl, { params: { email } });
  }

  updateUser(email: string, updatedUser: any): Observable<any> {
    const url = `${this.baseUrl}/api/UpdateUser/${email}`;
    return this.httpClient.put(url, updatedUser);
  }

  updateUserEmail(email: string, newEmail: string): Observable<User> {
    const url = `${this.baseUrl}/api/update-email?email=${email}&newEmail=${newEmail}`;
    return this.httpClient.put<User>(url, null); // Sending null as request body
}

}
