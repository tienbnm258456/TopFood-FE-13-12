import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/entity/Category';
import { Product } from 'src/app/entity/Product';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent implements OnInit {

  products: Product[];
  top4Category: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getTop4Category();
  }

  getTop4Category() {
    this.categoryService.getTop4Category().subscribe(data => {
      this.top4Category = data;
    })
  }


  getProducts() {
    this.route.params.subscribe(param => {
      console.log(param);
      this.productService.getProductsByCategoryId(param.id).subscribe(data => {
        console.log(data);
        this.products = data;
      })
    })
  }
}