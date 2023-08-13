import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { PaginatorIntlService } from '../paginator-intl.service';
import { ProductserviceService } from '../../services/servicep/productservice.service';
import { product } from 'src/app/FilterPage/models/product';
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }],
})
export class FilterComponent {


  produits! : product[];
  @ViewChild(MatDrawer) sidenav!: MatDrawer;
  // =====SIDE NAV Declarations  =======

  max = 100;
  min = 0;

  marque = [
    'Samsung',
    'LG',
    'Whirlpool',
    'Bosch',
    'Electrolux',
    'Siemens',
    'Panasonic',
    'Haier',
    'Miele',
    'Sony',
    'Apple',
    'Microsoft',
    'Dell',
    'HP',
    'Lenovo',
    'Asus',
    'Acer',
    'Toshiba',
    'TCL',
    'Hisense',
    'Sharp',
    'Philips',
    'Vizio',
    'Sanyo',
    'Huawei',
    'Xiaomi',
    'OnePlus',
    'Google',
    'Motorola',
    'Nokia',
  ];
  marquesAffichees: string[] = [];
  nombreMarquesAffichees = 4;
  indexMarqueActuel = 0;


  afficherProchainesMarques() {

    if(this.marque.length - this.indexMarqueActuel - this.nombreMarquesAffichees >= this.nombreMarquesAffichees) 
    {
    const prochainesMarques = this.marque.slice(this.indexMarqueActuel, this.indexMarqueActuel + this.nombreMarquesAffichees);
        this.marquesAffichees = this.marquesAffichees.concat(prochainesMarques);
        this.indexMarqueActuel += this.nombreMarquesAffichees;}
    else{
    const prochainesMarques = this.marque.slice(this.indexMarqueActuel);
      this.marquesAffichees = this.marquesAffichees.concat(prochainesMarques);
      this.indexMarqueActuel += this.nombreMarquesAffichees;}
  }

  voirPlus() {
    if (this.indexMarqueActuel < this.marque.length) {
      this.afficherProchainesMarques();
    }
  }

  // nbrofcards = 4;
  // marqueslice = this.marque.slice(0, this.nbrofcards);
  // pv: any;
  // pi: any;
  // startIndex!: number;
  // endIndex!: number;

  // ==========HEADER Declarations =======

  sort = 'desc';
  productslength!: number;
  
  nbrofproducts = 12;
  pvp: any;
  pip: any;
  startIndexp!: number;
  endIndexp!: number;
  data:product[]
  dataslice:product[]
  constructor(private sidenavob: BreakpointObserver , private produitService: ProductserviceService) {
    this.data = this.produitService.listeProduits();
     this.dataslice =this.data?.slice(0,this.nbrofproducts);
  }
  
  
  
  
  ngAfterViewInit() {
    this.sidenavob.observe(['(max-width : 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.opened = true;
       
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.opened = 'true';
       
      }
    });
  }
  // =====SIDE NAV Functions  =======

  // OnpageChange(event: PageEvent) {
  //   this.pv = event.previousPageIndex;
  //   this.pi = event.pageIndex;
  //   if (this.pv < this.pi) {
  //     if (this.pv === 0) {
  //       this.startIndex = this.pv + this.nbrofcards;
  //       this.endIndex = this.startIndex + this.nbrofcards;
  //     } else {
  //       this.startIndex = this.nbrofcards + this.nbrofcards * this.pv;
  //       this.endIndex = this.startIndex + this.nbrofcards;
  //     }
  //   } else {
  //     if (this.pv == Math.floor(this.marque.length / 4)) {
  //       let nbderniercard =
  //         (this.marque.length / this.nbrofcards -
  //           Math.floor(this.marque.length / this.nbrofcards)) *
  //         this.nbrofcards;
  //       this.endIndex = this.marque.length - nbderniercard;
  //       this.startIndex = this.endIndex - this.nbrofcards;
  //     } else {
  //       this.endIndex = this.pv * this.nbrofcards;
  //       this.startIndex = this.endIndex - this.nbrofcards;
  //     }
  //   }
  //   this.marqueslice = this.marque.slice(this.startIndex, this.endIndex);
  // }


  cardsLength!: number;
  ngOnInit() {
    // if (this.marque.length % this.nbrofcards != 0) {
    //   this.cardsLength =
    //     Math.ceil(this.marque.length / this.nbrofcards) * this.nbrofcards;
    //   console.log('this.cardsLength' + this.cardsLength);
    // } else {
    //   this.cardsLength = this.marque.length;
    // }
    if (this.data.length % this.nbrofproducts != 0) {
      this.productslength =
        Math.ceil(this.data.length / this.nbrofproducts) * this.nbrofproducts;
      console.log('this.productslength' + this.productslength);
    } else {
      this.productslength = this.data.length;
    }

    this.afficherProchainesMarques();
    
  }

  showfilter = false;

  // ======Content =======

  // cols = 3;
  // rowHeight: number = ROWS_HEIGHT[this.cols];

  // ==========HEADER Functions 

  OnpageChangep(event: PageEvent) {
    this.pvp = event.previousPageIndex;
    this.pip = event.pageIndex;
    if (this.pvp < this.pip) {
      if (this.pvp === 0) {
        this.startIndexp = this.pvp + this.nbrofproducts;
        this.endIndexp = this.startIndexp + this.nbrofproducts;
      } else {
        this.startIndexp = this.nbrofproducts + this.nbrofproducts * this.pvp;
        this.endIndexp = this.startIndexp + this.nbrofproducts;
      }
    } else {
      if (this.pvp == Math.floor(this.data.length / 4)) {
        let nbderniercard =
          (this.data.length / this.nbrofproducts -
            Math.floor(this.data.length / this.nbrofproducts)) *
          this.nbrofproducts;
        this.endIndexp = this.data.length - nbderniercard;
        this.startIndexp = this.endIndexp - this.nbrofproducts;
      } else {
        this.endIndexp = this.pvp * this.nbrofproducts;
        this.startIndexp = this.endIndexp - this.nbrofproducts;
      }
    }
    this.dataslice = this.data.slice(this.startIndexp, this.endIndexp);
  }
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }
  // ===== Data to send to the popup 
  datatosend: any;
  
}
// najem nest7a9hom *
// @Input('DisplayIcon') public showFilterIcon!: boolean;
  // <app-filtercontent  [DisplayIcon]="showFilterIcon" ></app-filtercontent>


  // service things 

  
  //  //un tableau de Produit

  // constructor(private produitService: ProduitService ) {
  //   this.produits=[];
  // }


  // ngOnInit():void{
  //   this.produits = this.produitService.listeProduits();

  // }
  // sending data to the card
  // ngOnInit(){
  //   if(this.data.length%this.nbrofcards !=0 ){
  //     this.productslength= ((Math.ceil(this.data.length/this.nbrofcards )) *this.nbrofcards)
  //     console.log("this.productslength"+this.productslength)
  //   }else{
  //     this.productslength=this.data.length
  //   }
  // }
  // p:any;
   // Paginator Header
  // data=[
  //   "1 ", "2", "3", "4", "5","6 ", "7", "8", "9", "10","11 ", "12", "13", "14", "15","16 ", "17", "18", "19", "20","21 ", "22", "23", "24", "25"
  // ]
  // this.sortChange.emit(newSort);
    //   this.produits = this.produitService.listeProduits();
     // this.showFilterIcon = false;
         // this.showFilterIcon = true;
        // showFilterIcon = false;
      // sidenavet=false; 
      // constructor(private produitService: ProduitService ) {
        // this.produits=[];
// }