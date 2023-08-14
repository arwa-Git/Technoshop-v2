import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';
import { UpdatedUser } from 'src/app/classes/UpdatedUser';

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
  updatedUser:UpdatedUser = new UpdatedUser();
  userEmail!:any;



  constructor(private route: ActivatedRoute , private userService:UserService ,private router:Router) {}



  ngOnInit(): void {
    this.userEmail = this.route.snapshot.params['email'];
    this.userService.getUserByEmail(this.userEmail).subscribe(
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
      this.updatedUser.name = this.user.name;
      this.updatedUser.email = this.user.email;
      this.updatedUser.phone = this.user.phone;
      this.updatedUser.role = this.user.role;
      this.userService.updateUser(this.userEmail, this.updatedUser)
        .subscribe(
          response => {
            console.log('User updated successfully', response);
          },
          error => {
            console.error('Error updating user', error);
          }
        );
        this.router.navigate(['/dashboard/gerervendeur']);
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
