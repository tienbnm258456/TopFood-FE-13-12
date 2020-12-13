import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/entity/Cart';
import { CartItem } from 'src/app/entity/CartItem';
import { CartService } from 'src/app/service/cart/cart.service';
import { OderService } from 'src/app/service/order/oder.service';
import { ProductService } from 'src/app/service/product/product.service';
import { Order } from 'src/app/entity/Order';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/service/loader/loader.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: CartItem = new CartItem();
  cartItem: CartItem[];
  allTotal: number;
  allItems: number;
  order: Order = new Order();
  carts: Cart[];
  userId: number;
  currentUser = '';
  totalPrice = 0;
  form: FormGroup;
  submitted = false;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private orderService: OderService,
    private router: Router,
    private fb: FormBuilder,
    private loaderService: LoaderService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.compose([
        Validators.required,
        Validators.pattern('[(09|03|07|08|05]{2}[0-9]{8}')
      ])]],
    });
  }
  get name() {
    return this.form.get('name');
  }
  get address() {
    return this.form.get('address');
  }
  get phone() {
    return this.form.get('phone');
  }
  getFieldError(fieldName: string) {
    if (this.hasFieldError(fieldName)) {
      return this.form.controls[fieldName].errors;
    } else {
      return null;
    }
  }
  hasFieldError(fieldName: string): boolean {
    return this.form.controls[fieldName].invalid && (this.submitted || this.form.controls[fieldName].touched);
  }
  ngOnInit(): void {
    this.currentUser = localStorage.getItem("currentUser");
    if (this.currentUser) {
      this.userId = JSON.parse(localStorage.getItem("currentUser")).id;
      this.getCarts(this.userId);
    }
  }
  getCarts(user: number) {
    this.loaderService.show();
    this.cartService.getAll(user).subscribe(data => {
      if (data) {
        this.carts = data;
        this.countTotalPrice();
      }
    });
  }
  countTotalPrice() {
    this.totalPrice = this.carts.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
      this.loaderService.hide();
  }
  paypal() {
    this.loaderService.show();
    this.order.cancelUrl = "http://localhost:4200/payment-error";
    this.order.successUrl = "http://localhost:4200/payment-success";
    // this.order.price = this.carts.reduce((sum, {price, quantity}) => sum + price * quantity, 0);
    this.order.description = "thanh toan paypal";
    this.order.userId = this.userId;
    this.carts.forEach(x => {
      this.order.orderDetailRequests.push({
        "productId": x.productId,
        "quantity": x.quantity
      });
    });
    this.order.price = this.totalPrice;
    this.orderService.payment(this.order).subscribe(data => {
      if (data) {
        window.location.href = data;
      }
    }, err => {
      this.loaderService.hide();
      console.log(err);
    }
    );
  }
  upAmount(productId: number) {
    this.loaderService.show();
    let index = this.carts.findIndex(x => x.productId == productId);
    this.carts[index].quantity = this.carts[index].quantity + 1;
    this.countTotalPrice();
  }

  downAmount(productId: number) {
    this.loaderService.show();
    let index = this.carts.findIndex(x => x.productId == productId);
    let quantity = this.carts[index].quantity;
    if (quantity > 1) {
      this.carts[index].quantity = quantity - 1;
    }
    this.countTotalPrice();
  }
  delete(cartId: number) {
    this.loaderService.show();
    this.cartService.deleteCartItem(cartId).subscribe(() => {
      this.getCarts(this.userId);
    }, err => console.log(err)
    );
  }
  onSubmit() {
    this.loaderService.show();
    this.submitted = true;
    if (!this.form.invalid) {
      this.order.userId = this.userId;
      this.carts.forEach(x => {
        this.order.orderDetailRequests.push({
          "productId": x.productId,
          "quantity": x.quantity
        });
      });
      this.order.price = this.totalPrice;
      this.orderService.paymentLocal(this.order).subscribe(() => {
        this.loaderService.hide();
        this.router.navigateByUrl('/payment-success');
      }, err => {
        console.log(err);
        this.loaderService.hide();
        this.router.navigateByUrl('/payment-error');
      })
    }
  }
}