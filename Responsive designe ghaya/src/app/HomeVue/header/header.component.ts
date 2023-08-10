import { Component, EventEmitter, OnInit, Output, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  isLoggedIn: boolean = false;
  nomUtilisateur: string = ''; // Variable pour stocker le nom de l'utilisateur
  isSlidenavOpen = false;
  menuVariable:boolean=false;
  menu_icon_variable:boolean=false;

  @ViewChild('showLoginButton', { static: true }) showLoginButton!: TemplateRef<any>;

  constructor(private router: Router) { }
 

  ngOnInit() {
   
 
  }

  onCategoryChange(event: Event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
  }
  Search() {
    console.log('Recherche pour:', this.searchTerm);
  }

  deconnexion() {}

  goToParametresCompte() {
    // Rediriger vers le composant "connexion" pour afficher les paramètres du compte
    this.router.navigate(['/dashboardConsommateur']);
  }
  openMenu(){
    this.menuVariable =! this.menuVariable;
    this. menu_icon_variable =! this.menu_icon_variable;
  }
}
