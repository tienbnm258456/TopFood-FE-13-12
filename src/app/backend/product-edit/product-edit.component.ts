import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entity/Product';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';
import { SupplierService } from 'src/app/service/supplier/supplier.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  suppliers: any;
  categorys:any;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategorys();
    this.getSuppliers();
  }

  getProduct() {
    this.route.params.subscribe(param =>{
      this.productService.getProduct(param.id).subscribe(data =>{
        this.product = data;
      })
    })
  }
  updateProduct(){
    // this.productService.updateProduct(this.product).subscribe(data =>{
    //   if(this.product.file) {
    //     this.productService.uploadImage(this.product.id,this.product.file).subscribe(response =>{
    //       this.router.navigateByUrl('/admin/manager')
    //       alert("Sửa thành công Sản Phẩm");
    //     });
    //   }else {
    //     this.router.navigateByUrl('/admin/manager')
    //     alert("Sửa thành công Sản Phẩm");
    //   }
    // })
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/admin/manager')
          alert("Sửa thành công Sản Phẩm");
    })
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
