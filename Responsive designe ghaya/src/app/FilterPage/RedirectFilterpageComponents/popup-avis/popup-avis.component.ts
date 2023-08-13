import { product } from 'src/app/FilterPage/models/product';
import { Component, Inject } from '@angular/core';
import { ProductserviceService } from '../../services/servicep/productservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-popup-avis',
  templateUrl: './popup-avis.component.html',
  styleUrls: ['./popup-avis.component.css'],
})
export class PopupAvisComponent {
  // produits!: product[];
  // num!:number;
  datars: product;

  constructor(
    private produitService: ProductserviceService,
    private ref: MatDialogRef<PopupAvisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: product
  ) {
    this.datars = data;
  }
  ratingcontrol= new FormControl(0);
  totalrating=0
  ratingcount=0;
  FinalRating:any
    getRating(){
      this.ratingcount++;
      this.totalrating= this.ratingcontrol.value || 0
    console.log(this.ratingcontrol.value)
    this.FinalRating= (this.totalrating/this.ratingcount).toFixed(2)
  }
}
