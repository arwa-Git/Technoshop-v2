import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produit2 } from '../../model/produit2.model';
import { Produit2Service } from '../../service/produit2/produit2.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css'],
})
export class ModifierComponent {
  currentProduit: Produit2 = new Produit2();
  currentProduitUrl!: string;

  //

  // currentProduit =new Produit();
  categorie!: string;
  nom!:string
  prix!:number
  description!:string
  
  constructor(
    private produitService: Produit2Service,
    private ref: MatDialogRef<ModifierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.categorie = data.categorie;
    this.currentProduit = this.produitService.consulterProduit(this.categorie);
    this.currentProduitUrl = this.currentProduit?.urls[0] ;
    this.nom=this.currentProduit?.nomProduit
    this.description=this.currentProduit?.description

  }
  // constructor(){   }
  // ngOnInit():void{
  //   this.currentProduit = this.produitService.consulterProduit(this.id);

  // }
  // updateProduit()
  // {
  // this.produitService.updateProduit(this.currentProduit);
  // }

  //

  ngOnInit(): void {
     // Assign the product's urls to the currentProduitUrls, or an empty array if undefined
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit); // Call the updateProduit method of the service to update the product
    // this.router.navigate(["produits"]);
  }

  Updatep() {
    if (window.confirm('Êtes-vous sûr de modifier votre  produit ?')) {
      // Logique pour mettre à jour le compte ici
      console.log('produit a été  modifié avec succès !');
    } else {
      console.log('Modification annulée.');
    }
  }

  url = 'https://img.icons8.com/ios/100/000000/contract-job.jpg';
  onImageSelect(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedImage = files[0];
      // Read the selected image and store its data in the currentProduit.imageUrl property
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = (event: any) => {
        this.currentProduit.imageUrl = event.target.result;
      };
    }
  }
}
