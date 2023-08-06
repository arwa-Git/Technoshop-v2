import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produit2 } from '../../model/produit2.model';
import { ModifierComponent } from '../modifier/modifier.component';
import { ProductDTO } from 'src/app/classes/PoductDTO';
import { ProductService } from 'src/app/Services/ProductService/product-service.service';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent {
  products: ProductDTO[] = [];
 // produits?: Produit2[];
  formModal: any

  constructor(private dialogref : MatDialog , private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.log('Error fetching products:', error);
      }
    );
  }
  deleteProduct(product: ProductDTO) {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');

    if (confirmDelete) {
      this.productService.deleteProduct(product).subscribe(
        (res) => {
          this.products = this.products.filter((product) => product.id !== product.id);
          alert(res); // Show the success message from the response directly
       
        },
        (error) => {
          alert("Product has been deleted Succefully !");
          console.log(error)
        }
      );
      window.location.reload();
    }
   // let conf = confirm("Etes-vous sur ?");
    //if (conf)
     // this.produitService.supprimerProduit(prod);
  }
  url = 'https://img.icons8.com/ios/100/000000/contract-job.jpg';

  openDialog( categorie : string){
    this.dialogref.open(ModifierComponent,{
     width:'500px' , 
     data:{categorie:categorie},
    })
  }
  
}