import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/classes/PoductDTO';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/ProductService/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css'],
})


export class ModifierComponent implements OnInit{
  productDTO: ProductDTO = new ProductDTO();
  msg?: string;
  selectedImageFile!: File;
  fileName: string = '';
  id:any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private routerActive:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.routerActive.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      data => {this.productDTO = data;console.log(this.productDTO)
      },error => console.log(error)
    );
  }

 /* ProductRegistrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{2,}$/)]],
    price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    description: ['', Validators.required],
    category: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{2,}$/)]],
    urls: ['', Validators.required],
    image: ['', Validators.required],
  });

  get name() {
    return this.ProductRegistrationForm.get('name');
  }
  get price() {
    return this.ProductRegistrationForm.get('price');
  }
  get image() {
    return this.ProductRegistrationForm.get('image');
  }
  get description() {
    return this.ProductRegistrationForm.get('description');
  }
  get category() {
    return this.ProductRegistrationForm.get('category');
  }
  get url() {
    return this.ProductRegistrationForm.get('urls');
  }
*/
  onSelectFile(event: any) {
    const file = event.target.files[0];
    this.selectedImageFile = file;
    this.fileName = file ? file.name : '';
  }

 /* updateProduct() {
    this.msg = '';

    if (this.ProductRegistrationForm.invalid) {
      alert('Please fill all the required fields correctly!');
      return;
    }

    if (!this.selectedImageFile) {
      alert('Please select a product image!');
      return;
    }

    const productToUpdate = this.ProductRegistrationForm.value;
    console.log(productToUpdate);

    this.productService
      .addProduct(productToUpdate, this.selectedImageFile)
      .subscribe(
        (res) => {
          alert('Product has been updated successfully!');
          // Redirect to the appropriate page after successful update
          this.router.navigate(['/dashboard']); // Change '/dashboard' to the desired destination
        },
        (error) => {
          alert('An error occurred during product update.');
        }
      );
  }*/
}
