import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/entity/CartItem';
import { Category } from 'src/app/entity/Category';
import { Product } from 'src/app/entity/Product';
import { CartService } from 'src/app/service/cart/cart.service';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];
  top4Categories: Category[];
  top8Fruits: Product[];
  productByCategory: Product[];
  productByCategory2: Product[];
  productByCategory3: Product[];
  productByCategory4: Product[];
  carts: CartItem[];
  cart: CartItem = new CartItem();
  userId: number;
  count: number;
  currentUser = '';
  productDetail: Product;
  isShowModal: boolean = true;
  // cartItem : CartItem[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private router: Router
  ) {
    this.currentUser = localStorage.getItem("currentUser");
    if (this.currentUser) {
      this.userId = JSON.parse(this.currentUser).id;
    }
  }

  ngOnInit(): void {
    // this.getAlls();
    this.getTop4Category();
    this.getTop8Fruits();
    this.getProductByCategory1(1);
    this.getProductByCategory2(2);
    this.getProductByCategory3(3);
    this.getProductByCategory4(4);
    this.getCountCart();
  }

  getId(id) {
    this.productService.getProduct(id).subscribe(data => {
      this.productDetail = data;
    })
  }
  exit() {
    this.isShowModal = false;
  }
  getAlls() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  getAllsCart() {
    this.cartService.getListCart().subscribe(result => {
      this.carts = result;
    });
  }

  getProductByCategory1(id: number) {
    this.productService.getProductsByCategoryIdTop4(id).subscribe(data => {
      this.productByCategory = data;
    })
  }

  getProductByCategory2(id: number) {
    this.productService.getProductsByCategoryIdTop4(id).subscribe(data => {
      this.productByCategory2 = data;
    })
  }
  getProductByCategory3(id: number) {
    this.productService.getProductsByCategoryIdTop4(id).subscribe(data => {
      this.productByCategory3 = data;
    })
  }

  getProductByCategory4(id: number) {
    this.productService.getProductsByCategoryIdTop4(id).subscribe(data => {
      this.productByCategory4 = data;
    })
  }

  OnAddCart(product: Product) {
    if (this.userId) {
      this.cart.userId = this.userId;
      this.cart.price = product.price;
      this.cart.productId = product.id;
      this.cart.productName = product.productName;
      this.cart.image = product.image;
      this.cartService.create(this.cart).subscribe(() => {
        this.getCountCart();
        window.alert("Product added successfully");
      }, err => {
        if (err.error) {
          window.alert(err.error.message);
        }
      })
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  getTop4Category() {
    this.categoryService.getTop4Category().subscribe(data => {
      this.top4Categories = data;
      console.log(this.top4Categories);

    })
  }

  getTop8Fruits() {
    this.productService.getTop8Fruit().subscribe(data => {
      this.top8Fruits = data;
    })
  }

  getCountCart() {
    if (this.userId) {
      this.cartService.getCountCart(this.userId).subscribe((data) => {
        if (data) {
          this.count = data;
        }
      });
    } else {
      this.count = 0;
    }
  }

  // OnAddCart(product) {

  //   this.cartItem = this.productService.getProductFromCart();
  //   if (this.cartItem == null) {
  //     this.cartItem = [];
  //     this.cartItem.push(product);
  //     this.productService.addProductToCart(this.cartItem);
  //     window.alert("Bạn đã thêm giỏ hàng")

  //   }
  //   else {
  //     let tempProduct = this.cartItem.find(p => p.id == product.id);
  //     if (tempProduct == null) {
  //       this.cartItem.push(product);
  //       this.productService.addProductToCart(this.cartItem);
  //       window.alert("Bạn đã thêm giỏ hàng")
  //     }
  //     else {
  //       window.alert('Sản phẩm đã có trong giỏ hàng')
  //     }

  //   }
  // }
}