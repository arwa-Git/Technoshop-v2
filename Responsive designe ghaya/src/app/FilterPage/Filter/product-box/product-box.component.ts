import { PopupAvisComponent } from '../../RedirectFilterpageComponents/popup-avis/popup-avis.component';
import { product } from 'src/app/FilterPage/models/product';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { AlertFormComponent } from '../alert-form/alert-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input('dataresieved') public dataresieved!: product;
  @Input('senderisfilter') public filter: boolean;
  @Input('senderisRedirectP') public Rpage: boolean;
  // @Output() addToCart = new EventEmitter();
  // @ViewChild('myTextarea', { static: false })  myTextarea!: ElementRef<HTMLTextAreaElement>;

  thesender = 0;
  FinalRating = 0;
  nbrofpeoplerated = 0;
  constructor(private matDialog: MatDialog, private router: Router) {
    this.filter = false;
    this.Rpage = false;
  }
  intialiserRating() {
    this.nbrofpeoplerated =
      this.dataresieved.rate.one +
      this.dataresieved.rate.two +
      this.dataresieved.rate.three +
      this.dataresieved.rate.four +
      this.dataresieved.rate.five;
    this.FinalRating =
      (this.dataresieved.rate.one * 1 +
        this.dataresieved.rate.two * 2 +
        this.dataresieved.rate.three * 3 +
        this.dataresieved.rate.four * 4 +
        this.dataresieved.rate.five * 5) /
      this.nbrofpeoplerated;
  }
  ngOnInit() {
    if (this.filter) {
      console.log('The sender is Filter');
      this.thesender = 1;
    } else {
      if (this.Rpage) {
        console.log('The sender is  redirected page ');
        this.thesender = 2;
      } else {
        console.log('NO one considered ');
      }
    }
    this.intialiserRating();
  }

  openDialog(datars: any) {
    this.matDialog.open(AlertFormComponent, {
      width: '500px',
      data: datars,
    });
  }
  gotoRedirectPage() {
    this.router.navigate(['produit', this.dataresieved.id]);
  }

  // ratingcontrol= new FormControl(0);
  // totalrating=0
  // ratingcount=0;

  //   getRating(){
  //     this.ratingcount++;
  //     this.totalrating= this.ratingcontrol.value || 0
  //   console.log(this.ratingcontrol.value)
  //   this.FinalRating= (this.totalrating/this.ratingcount).toFixed(2)
  // }
  role = '';
  openAvis(datasent: any) {
    this.matDialog.open(PopupAvisComponent, {
      width: '500px',
      data: datasent,
    });
  }
  // adjustTextareaHeight() {
  //   const textareaElement: HTMLTextAreaElement = this.myTextarea.nativeElement;
  //   textareaElement.style.height = '65px';
  //   textareaElement.style.height = `${textareaElement.scrollHeight}px`;
  // }
}
