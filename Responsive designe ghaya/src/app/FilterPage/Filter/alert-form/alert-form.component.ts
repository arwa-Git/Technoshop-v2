import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { product } from 'src/app/FilterPage/models/product';

@Component({
  selector: 'app-alert-form',
  templateUrl: './alert-form.component.html',
  styleUrls: ['./alert-form.component.css'],
})
export class AlertFormComponent {
  datars: product;
  constructor(
    private ref: MatDialogRef<AlertFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: product
  ) {
    this.datars = data;
  }
}
