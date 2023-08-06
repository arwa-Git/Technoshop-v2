import { Component } from '@angular/core';
import { MaselectionService } from '../../service/maselection/maselection.service';

@Component({
  selector: 'app-ma-selection',
  templateUrl: './ma-selection.component.html',
  styleUrls: ['./ma-selection.component.css'],
})
export class MaSelectionComponent {
  produitsSelectionnes: any[] = [];

  constructor(private selectionService: MaselectionService) {}

  ngOnInit(): void {
    this.produitsSelectionnes = this.selectionService.getProduitsSelectionnes();
  }

  supprimerProduit(produit: any): void {
    const confirmation = confirm(
      'Êtes-vous sûr de vouloir supprimer ce produit du panier ?'
    );
    if (confirmation) {
      this.selectionService.removeFromSelection(produit);
      console.log('Produit supprimé du panier :', produit);
    }
  }
}
