import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-parametreconsommateur',
  templateUrl: './parametreconsommateur.component.html',
  styleUrls: ['./parametreconsommateur.component.css']
})
export class ParametreconsommateurComponent implements OnInit{
  nom: string = '';
  prenom: string = '';
  adresse: string = '';
  telephone: string = '';
  Email: string = '';
  motDePasse: string = '';
  user!:any;
  UserRole!:any;


  constructor(private route: ActivatedRoute , private userService:UserService) {}



  ngOnInit(): void {
    const userEmail = this.route.snapshot.params['email'];
    this.userService.getUserByEmail(userEmail).subscribe(
      response => {
        this.user = response;
        if (this.user.role === 0) {
          this.UserRole = "Consumer";
        } else if (this.user.role === 1) {
          this.UserRole = "Seller";
        } else if (this.user.role === 2) {
          this.UserRole = "Admin";
        } else {
          this.UserRole = "Unknown Role";
        }
      },      
      error => {
        console.error('Error retrieving user', error);
      }
    );

  console.log(this.role) 
  }
  get role(): number {
    const roleValue = localStorage.getItem('role'); // Get the role value from localStorage
    return roleValue ? +roleValue : 0; // Parse the role value as a number
  }

  handleUpdate() {
    if (window.confirm('Êtes-vous sûr de vouloir modifier votre compte ?')) {
      // Logique pour mettre à jour le compte ici
      console.log('Compte modifié avec succès !');
    } else {
      console.log('Modification annulée.');
    }
  }

  handleDelete() {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte définitivement ?')) {
      // Logique pour supprimer le compte ici
      console.log('Compte supprimé avec succès !');
      // Rediriger vers la page d'accueil (remplacez 'accueil' par le chemin approprié)
      window.location.href = '/';
    } else {
      console.log('Suppression annulée.');
    }
  }
}
