import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-parametrecompte',
  templateUrl: './parametrecompte.component.html',
  styleUrls: ['./parametrecompte.component.css']
})
export class ParametrecompteComponent implements OnInit{
  username: string = '';
  telephone: string = '';
  Email: string = '';
  motDePasse: string = '';
  userEmail!:any;
  user!:any;

  constructor(private userService:UserService , private router:Router , private http: HttpClient) {}
  ngOnInit(): void {
    this.userEmail = localStorage.getItem('UserEmail');

    this.userService.getUserByEmail(this.userEmail).subscribe(
      response => {
        this.user = response;
      },      
      error => {
        console.error('Error retrieving user', error);
      }
    );
  }




  Updatecompte() {
    if (window.confirm('Êtes-vous sûr de modifier votre compte ?')) {
      // Logique pour mettre à jour le compte ici
      console.log(' Votre compte  a été modifié avec succès !');
    } else {
      console.log('Modification annulée.');
    }
  }


  Updatemail() {
    if (window.confirm("Are you sure you want to change your email address?")) {
      this.userService.updateUserEmail( this.userEmail, this.user.email)
      .subscribe(res => {
         console.log(res);
         localStorage.setItem('UserEmail', this.user.email);
         // Navigate to the home page
          this.router.navigate(['']);
      }, error => {
          console.error('Error updating email:', error);
      });
    }
  }

  
  UpdateInfos() {
    if (window.confirm('Êtes-vous sûr de modifier vos informations personnelles ?')) {
      const email = this.user.email;
      const newUsername = this.user.name;
      const newPhoneNumber = this.user.phone;

      this.userService.updateUserInfo(email, newUsername, newPhoneNumber).subscribe(
        response => {
          console.log('User information updated successfully.', response);
        },
        error => {
          console.error('Error updating user information:', error);
        }
      );
      window.location.reload();
    }
  }

  Updatemdp() {
    if (window.confirm('Êtes-vous sûr de modifier votre mot de passe ?')) {
      // Logique pour mettre à jour le compte ici
      console.log(' votre mot de passe a été  modifié avec succès !');
    } else {
      console.log('Modification annulée.');
    }
  }

  Delete() {
    if (window.confirm('Êtes-vous sûr de  supprimer votre compte ?')) {
      // Logique pour supprimer le compte ici
      console.log(' votre compte  a été supprimé avec succès !');
      // Rediriger vers la page d'accueil (remplacez 'accueil' par le chemin approprié)
      window.location.href = '/';
    } else {
      console.log('Suppression annulée.');
    }
  }
}
