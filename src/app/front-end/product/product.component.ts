import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/entity/CartItem';
import { Category } from 'src/app/entity/Category';
import { Product } from 'src/app/entity/Product';
import { CartService } from 'src/app/service/cart/cart.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[];
  top4Category: Category[]; 
  product: Product = new Product();
  cartItem : CartItem[];
  currentUser = '';
  cart: CartItem = new CartItem();
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.getProducts();
    this.getTop4Category();
    this.searchProduct("");
  }

  getProducts() {
    this.productService.getAll().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

  getTop4Category() {
    this.categoryService.getTop4Category().subscribe(data => {
      this.top4Category = data;
    })
  }

  OnAddCart(product: Product) {
    this.currentUser = localStorage.getItem("currentUser");
    if (this.currentUser) {
      this.cart.userId = JSON.parse(localStorage.getItem("currentUser")).id;
      this.cart.price = product.price;
      this.cart.productId = product.id;
      this.cart.productName = product.productName;
      this.cart.image = product.image;
      this.cartService.create(this.cart).subscribe(() => {
        window.alert("Thêm sản phẩm thành công!");
      }, err => {
        if(err.error) {
          window.alert(err.error.message);
        }
      })
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  searchProduct(productName: any) {
    if (productName == null) {
      this.getProducts();
    }
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
