import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/classes/PoductDTO';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/ProductService/product-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'],
})
export class AjouterComponent implements OnInit {
  productDTO: ProductDTO = new ProductDTO(); // Corrected the instance creation
  msg?: string;
  selectedImageFile!: File; 
  fileName: string = ''; // Variable to store the selected file name
  constructor(private fb: FormBuilder, private productService: ProductService, private route: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ProductRegistrationForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    description: ['', Validators.required],
    category: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{2,}$/)]],
    urls: ['', [Validators.required]],
    image: ['', [Validators.required]],
    


  });
  get name() { return this.ProductRegistrationForm.get('name') }
  get price() { return this.ProductRegistrationForm.get('price') }
  get image() { return this.ProductRegistrationForm.get('image') }
  get description() { return this.ProductRegistrationForm.get('description') }
  get category() { return this.ProductRegistrationForm.get('category') }
  get url() { return this.ProductRegistrationForm.get('urls') }

  onSelectFile(event: any) {
    const file = event.target.files[0];
    this.selectedImageFile = file;
    this.fileName = file ? file.name : ''; // Update the selected file name for display
  }


  
  addProduct() {
    this.msg = '';
    if (this.name?.hasError('pattern') || this.name?.hasError('required')) {
      this.msg = "check the product name !";
      alert(this.msg);
    } else if (this.price?.hasError('pattern') || this.price?.hasError('required')) {
      this.msg = "check the product price !";
      alert(this.msg);
    } else if (this.category?.hasError('pattern') || this.category?.hasError('required')) {
      this.msg = "please select product category !";
      alert(this.msg);
    } else if (this.description?.hasError('pattern') || this.description?.hasError('required')) {
      this.msg = "check the product description !";
      alert(this.msg);
    } else if (this.url?.hasError('required')) {
      this.msg = "check the product URL !";
      alert(this.msg);
    } else if (this.image?.hasError('required')) {
      this.msg = "please select product image !";
      alert(this.msg);
    } else {
      if (!this.selectedImageFile) {
        alert("Please select a product image!");
        return; // Stop further execution if no image selected
      }
  
      const productToAdd = this.ProductRegistrationForm.value;
      console.log(productToAdd);
      this.productService.createProduct(productToAdd, this.selectedImageFile).subscribe(
        (res) => {
          alert("Product has been Added Succefully !");
           // Refresh the page after successful response
           window.location.reload();

        },
        (error) => {
          alert("An error occurred");
        }
      );
    }
  }
  
}
