import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/entity/Product';
import { ProductRespon } from 'src/app/entity/ProductRespon';
import { totalProduct } from 'src/app/entity/TotalProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl ="http://localhost:8080/api";
  private amountProduct = "/totalProduct";;
  private products = "/products";
  private product = "/product";
  private top8Fruit = "/top8fruit";
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl + this.products}`);
  }

  public getTop8Fruit(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl + this.top8Fruit}`);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl + this.product}/${id}`);
  }

  getProductsByCategoryId(categoryId): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl + this.products}/${categoryId}`);
  }

  getProductsByCategoryIdTop4(categoryId): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl + this.products + "/top4"}/${categoryId}`);
  }

  search(productName: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl + this.product + "/search"}?productName=${productName}`);
  }

  addProduct(product: Product): Observable<ProductRespon>{
    return this.http.post<ProductRespon>(`${this.baseUrl + this.product}/create`, product);
  }

  uploadImage(id: number, file: File): Observable<any>{
    const uploadImageData = new FormData();
    console.log(file);
    uploadImageData.append('imageFile', file, file.name);
    return this.http.post<any>(`${this.baseUrl + "/upload/" + id}`, uploadImageData, { observe: 'response' });
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl + this.product}/${product.id}`, product);
  }
  removeProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl + this.product}/${id}`);
  }
  addProductToCart(prodcuts: any) {
    localStorage.setItem("product", JSON.stringify(prodcuts));
  }
  getProductFromCart() {
    //return localStorage.getItem("product");
    return JSON.parse(localStorage.getItem('product'));
  }
  removeAllProductFromCart() {
    return localStorage.removeItem("product");
  }
  public totalProduct(): Observable<totalProduct> {
    return this.http.get<totalProduct>(`${this.baseUrl + this.amountProduct}`);
  }
}
