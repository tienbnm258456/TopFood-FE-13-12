import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/entity/Product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  product: Product = new Product();
  products: Product[];
  productId: number;
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.searchProduct("");
    // this.getProducts();
  }

  getProducts() {
    this.productService.getAll().subscribe(data => {
      console.log(data)
      this.products = data;
    })
  }

  delete(id: number) {
    this.productId = id;
  }

  checkDelete(){
    this.productService.removeProduct(this.productId)
      .subscribe(
        data => {
          console.log(data);
          this.getProducts();
        },
        error => console.log(error));
        console.log(this.productId);
  }

  searchProduct(productName: any) {
    this.productService.search(productName).subscribe(result => {
      if (result) {
        this.products = result;
        console.log(this.products);
      }else {
        this.products = [];
      }
      
    });
  }

}
