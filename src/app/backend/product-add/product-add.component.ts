import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/entity/Category';
import { Product } from 'src/app/entity/Product';
import { ProductRespon } from 'src/app/entity/ProductRespon';
import { Supplier } from 'src/app/entity/Supplier';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';
import { SupplierService } from 'src/app/service/supplier/supplier.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productResponse:ProductRespon = new ProductRespon();
  product: Product = new Product();
  categorys: Category[];
  suppliers: Supplier[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCategorys();
    this.getSuppliers();
  }

  addProduct() {
    this.productService.addProduct(this.product).subscribe(data =>{
      this.productResponse = data;
      console.log(data);
          this.router.navigateByUrl('/admin/manager')
    });
  }

  getCategorys() {
    this.categoryService.getListCategory().subscribe(data =>{
      if(data) {
        this.categorys = data;
        console.log(this.categorys)
      }
    })
  }
  getSuppliers() {
    this.supplierService.getAll().subscribe(data =>{
      if(data) {
        this.suppliers = data;
        console.log(this.suppliers)
      }
    })
  }

  public onFileChanged(event) {
    //Select File
    this.product.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.product.file);
    reader.onload = () => {
      this.product.imageBase64 = reader.result.toString();
    };
  }

 }
