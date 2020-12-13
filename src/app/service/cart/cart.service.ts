import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entity/Product';
import { CartItem } from 'src/app/entity/CartItem';
import { Cart } from 'src/app/entity/Cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem;
  product: Product;
  private baseUrl = "http://localhost:8080/api/carts"
  constructor(private http: HttpClient) { }
  getListCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.baseUrl}`);
  }

  getCart(id): Observable<CartItem> {
    return this.http.get<CartItem>(`${this.baseUrl}/${id}`);
  }

  addCart(cart: CartItem): Observable<CartItem> {
    // console.log(Cart);
    return this.http.post<CartItem>(`${this.baseUrl}`, cart);
  }

  updateCart(Cart: CartItem): Observable<CartItem> {
    return this.http.put<CartItem>(`${this.baseUrl}/${Cart.id}`, Cart);
  }
  removeCart(id): Observable<CartItem> {
    return this.http.delete<CartItem>(`${this.baseUrl}/${id}`)
  }
  addProductToCart(products : Product){
    localStorage.setItem("product",JSON.stringify(products));
  }

  upAmount(id: number): Observable<CartItem> {
    return this.http.put<CartItem>(`${this.baseUrl + "/amount"}/${id}`, id);
  }

  downAmount(id: number): Observable<CartItem> {
    return this.http.put<CartItem>(`${this.baseUrl + "/amountDown"}/${id}`, id);
  }

  getAll(userId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.baseUrl}?userId=${userId}`);
  }
  deleteCartItem(cartId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${cartId}`);
  }
  create(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}`, cart);
  }
  getCountCart(userId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count?userId=${userId}`);
  }
  
  getItems(){
    console.log("Cart: ", JSON.parse(localStorage.getItem('cart')));
    return this.cart = JSON.parse(localStorage.getItem('cart'));
 
    //return this.items = 
   }
   deleteItem(item){
     item = item;
     console.log("Deleting : ",item);
     let shopping_cart;
     let index;
     shopping_cart = JSON.parse(localStorage.getItem('cart'));
     for(let i in shopping_cart){
       if (item.product.name == shopping_cart[i].product.name)
       {
         index = i;
         console.log(index);
       }
     }
     shopping_cart.splice(index, 1);
     console.log("shopping_cart ", shopping_cart);
     localStorage.setItem('cart', JSON.stringify(shopping_cart));
 
   }
  
}