import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/entity/CartItem';
import { totalOrder } from 'src/app/entity/TotalOrder';
import { Order } from 'src/app/entity/Order';
import { Orders } from 'src/app/entity/Orders';
import { Revenua } from 'src/app/entity/Revenua';

@Injectable({
  providedIn: 'root'
})
export class OderService {
  cart: CartItem[] ;
  private baseUrl = "http://localhost:8080/payment";
  private Url = "http://localhost:8080/api/totalOrder";
  private ordersByDayUrl = 'http://localhost:8080/api/ordersByDay';
  private ordersByWeekUrl = 'http://localhost:8080/api/ordersByWeek';
  private ordersByMonthUrl = 'http://localhost:8080/api/ordersByMonth';
  private ordersByYearUrl = 'http://localhost:8080/api/ordersByYear';
  private revenueByDayUrl = 'http://localhost:8080/api/revenuaByDay';
  private revenueByWeekUrl = 'http://localhost:8080/api/revenuaByWeek';
  private revenuaByMonthUrl = 'http://localhost:8080/api/revenuaByMonth';
  private revenuaByYearUrl = 'http://localhost:8080/api/revenuaByYear';

  constructor(private http: HttpClient) { }
  addOrder(cart: CartItem[]){
    console.log("cart" + JSON.stringify(cart));
    return this.http.post(`${this.baseUrl}`,cart);
  }

  removeCart(id): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`)
  }
  public totalOrder(): Observable<totalOrder> {
    return this.http.get<totalOrder>(`${this.Url}`);
  }

  payment(order: Order): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}`, order, {responseType: 'text' as 'json'});
  }
  approve(userId: number, paymentId: string, PayerID: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?userId=${userId}&paymentId=${paymentId}&PayerID=${PayerID}`);
  }
  paymentLocal(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/local`, order);
  }

  public revenuaByDay(): Observable<Revenua> {
    return this.http.get<Revenua>(`${this.revenueByDayUrl}`);
  }

  public revenuaByWeek(): Observable<Revenua> {
    return this.http.get<Revenua>(`${this.revenueByWeekUrl}`);
  }

  public revenuaByMonth(): Observable<Revenua> {
    return this.http.get<Revenua>(`${this.revenuaByMonthUrl}`);
  }

  public revenuaByYear(): Observable<Revenua> {
    return this.http.get<Revenua>(`${this.revenuaByYearUrl}`);
  }

  public getOrdersByDay(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.ordersByDayUrl}`);
  }
  
  public getOrdersByWeek(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.ordersByWeekUrl}`);
  }

  public getOrdersByMonth(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.ordersByMonthUrl}`);
  }

  public getOrdersByYear(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.ordersByYearUrl}`);
  }
}
