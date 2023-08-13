import { Component, Input } from '@angular/core';
import { product } from 'src/app/FilterPage/models/product';

@Component({
  selector: 'app-card-produitsimilaire',
  templateUrl: './card-produitsimilaire.component.html',
  styleUrls: ['./card-produitsimilaire.component.css']
})
export class CardProduitsimilaireComponent {
  @Input('produitinfo') public produitinfo!:product;

}
