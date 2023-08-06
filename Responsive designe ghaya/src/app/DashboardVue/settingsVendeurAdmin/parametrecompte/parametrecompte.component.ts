import { Component } from '@angular/core';

@Component({
  selector: 'app-parametrecompte',
  templateUrl: './parametrecompte.component.html',
  styleUrls: ['./parametrecompte.component.css']
})
export class ParametrecompteComponent {
  username: string = '';
  telephone: string = '';
  Email: string = '';
  motDePasse: string = '';

  constructor() {}

  Updatecompte() {
    if (window.confirm('Êtes-vous sûr de modifier votre compte ?')) {
      // Logique pour mettre à jour le compte ici
      console.log(' Votre compte  a été modifié avec succès !');
    } else {
      console.log('Modification annulée.');
    }
  }


  Updatemail() {
    if (window.confirm('Êtes-vous sûr de modifier votre adresse email ?')) {
      // Logique pour mettre à jour le compte ici
      console.log('Adresse email a été  modifié avec succès !');
    } else {
      console.log('Modification annulée.');
    }
  }

  Updateinfos() {
    if (window.confirm('Êtes-vous sûr de modifier vos informations personnelles ?')) {
      // Logique pour mettre à jour le compte ici
      console.log(' informations personnelles ont été  modifié avec succès !');
    } else {
      console.log('Modification annulée.');
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
