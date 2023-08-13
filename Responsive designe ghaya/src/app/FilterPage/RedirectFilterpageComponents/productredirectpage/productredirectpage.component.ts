import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PopupAvisComponent } from '../popup-avis/popup-avis.component';
import { MatDialog } from '@angular/material/dialog';
import { product } from 'src/app/FilterPage/models/product';
import { ProductserviceService } from '../../services/servicep/productservice.service';

@Component({
  selector: 'app-productredirectpage',
  templateUrl: './productredirectpage.component.html',
  styleUrls: ['./productredirectpage.component.css'],
})
export class ProductredirectpageComponent {
  @ViewChild('one') one!: ElementRef;
  @ViewChild('two') two!: ElementRef;
  @ViewChild('three') three!: ElementRef;
  @ViewChild('four') four!: ElementRef;
  @ViewChild('five') five!: ElementRef;
  data: product;
  similairproduit: product[];
  widthofone = 0;
  widthoftwo = 0;
  widthofthree = 0;
  widthoffour = 0;
  widthoffive = 0;
  nbrofpeoplerated = 0;
  ratesforone = 0;
  ratesfortwo = 0;
  ratesforthree = 0;
  ratesforfour = 0;
  ratesforfive = 0;
  FinalRating = 0;

  constructor(
    private activatedroute: ActivatedRoute,
    private produitService: ProductserviceService,
    private matDialog: MatDialog
  ) {
    this.data = this.produitService.consulterProduit(
      this.activatedroute.snapshot.params['id']
    );

    console.log(this.data);
    console.log(
      this.produitService.filterProducts(this.data.categorie, this.data.nom)
    );
    this.similairproduit = this.produitService.filterProducts(
      this.data.categorie,
      this.data.nom
    );
    this.IntialiseRatings();
  }
  IntialiseRatings() {
    this.nbrofpeoplerated =
      this.data.rate.one +
      this.data.rate.two +
      this.data.rate.three +
      this.data.rate.four +
      this.data.rate.five;
    this.ratesforone = (this.data.rate.one * 100) / this.nbrofpeoplerated;
    this.ratesfortwo = (this.data.rate.two * 100) / this.nbrofpeoplerated;
    this.ratesforthree = (this.data.rate.three * 100) / this.nbrofpeoplerated;
    this.ratesforfour = (this.data.rate.four * 100) / this.nbrofpeoplerated;
    this.ratesforfive = (this.data.rate.five * 100) / this.nbrofpeoplerated;

    this.widthofone = (this.data.rate.one * 400) / this.nbrofpeoplerated;
    this.widthoftwo = (this.data.rate.two * 400) / this.nbrofpeoplerated;
    this.widthofthree = (this.data.rate.three * 400) / this.nbrofpeoplerated;
    this.widthoffour = (this.data.rate.four * 400) / this.nbrofpeoplerated;
    this.widthoffive = (this.data.rate.five * 400) / this.nbrofpeoplerated;
    this.FinalRating =
      (this.data.rate.one * 1 +
        this.data.rate.two * 2 +
        this.data.rate.three * 3 +
        this.data.rate.four * 4 +
        this.data.rate.five * 5) /
      this.nbrofpeoplerated;
  }
  ngAfterViewInit() {
    const _one = this.one.nativeElement;
    _one.style.width = `${this.widthofone}px`;
    const _two = this.two.nativeElement;
    _two.style.width = `${this.widthoftwo}px`;
    const _three = this.three.nativeElement;
    _three.style.width = `${this.widthofthree}px`;
    const _four = this.four.nativeElement;
    _four.style.width = `${this.widthoffour}px`;
    const _five = this.five.nativeElement;
    _five.style.width = `${this.widthoffive}px`;
  }
  openAvis(datasent: any) {
    this.matDialog.open(PopupAvisComponent, {
      width: '500px',
      data: datasent,
    });
  }
}
