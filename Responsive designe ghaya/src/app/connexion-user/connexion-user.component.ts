import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../Services/UserService/user.service';
import { UserLogin } from '../classes/UserLogin';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/User';

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion-user.component.html',
  styleUrls: ['./connexion-user.component.css']
})
export class ConnexionUserComponent {
    user:any;
    variable !: string
  userLogin:UserLogin = new UserLogin();
  constructor(private fb :FormBuilder,private userService:UserService,private route:Router,private httpClient : HttpClient){}
  ConnexionForm= this.fb.group({
    email: ['', [Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+(com|org|net|edu|gov|mil|biz|info|mobi|name|aero|jobs|museum)$/i), Validators.required, Validators.email]],
    pwd:['',[Validators.pattern(/^.{8,}$/),Validators.required]]
  })
  validertous(){return this.ConnexionForm?.invalid == false;}
  get emailC(){return this.ConnexionForm.get('email');}
  get pwdC(){return this.ConnexionForm.get('pwd');}
  msg!:string
  Connexion(){
    this.msg = '';
    if(this.emailC?.hasError('pattern') || this.emailC?.hasError('required')){
      this.msg="check your email !"
    }else if(this.pwdC?.hasError('pattern') || this.pwdC?.hasError('required')){
        this.msg="password should contain at least 8 caracters "
      }
      if (this.msg) {
        alert(this.msg);
      } else{
        //Login To DB
       // this.userService.Login(this.userLogin).subscribe();
        this.userService.Login(this.userLogin).subscribe(
          response => {
            const token = localStorage.getItem('Token');
              // console.log("Logged successfully");
              //console.log(token);
              console.log(this.userLogin.email)
              this.userService.getUserByEmail(this.userLogin.email)
              .subscribe(
                (user: User) => {
                  this.user = user;
                  console.log(user.name);

                  // Store the user's name in localStorage
                  localStorage.setItem('userName', this.user.name);

                  // Store the user's role Id in localStorage
                  localStorage.setItem('role', this.user.role);
            
                  // Pass the user's name as a parameter to the dashboard route
                  this.route.navigate(['/dashboard']);
                },
                (error) => {
                  console.error('Error fetching user:', error);
                }
              );
             // const token = localStorage.getItem('Token');
              const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
             
              const options = { headers:headers };
              
              this.httpClient.get('http://localhost:6002/hello', options).subscribe(
                response => {
                  console.log(response);          
                },
                error => {
                  this.variable = error.error.t
    
                }
              );
          },
          error => {
            alert("Incorrect Password!");
            // Handle the error response
            //this.loginError = error.message;
          }
        );
    }    
  }
}
