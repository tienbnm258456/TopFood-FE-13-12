import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryAll } from 'src/app/entity/HistoryAll';
import { HistoryDetail } from 'src/app/entity/HistoryDetail';
import { OrderAll } from 'src/app/entity/OrderAll';
import { History } from 'src/app/entity/History';
import { Order } from 'src/app/entity/Order';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: History;
  historyDetail : HistoryDetail;
  private baseUrl = "http://localhost:8080/api/history"
  private baseUrls = "http://localhost:8080/api/history/all"
  constructor(
    private http: HttpClient
  ) { }

  getHistoryAll(order: String): Observable<HistoryAll[]> {
    return this.http.get<HistoryAll[]>(`${this.baseUrls}?orderId=${order}`);
  }

  getHistory(userId: number, order: String): Observable<History[]> {
    return this.http.get<History[]>(`${this.baseUrl}?userId=${userId}&orderId=${order}`);
  }
  
  getHistoryDetail(orderId: number, orderDetail: String ) : Observable<HistoryDetail[]>{
    return this.http.get<HistoryDetail[]>(`${this.baseUrl + "/detail"}/${orderId}?orderDetailId=${orderDetail}`)
  }

  updateStatus(id): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl + "/update"}/${id}`);
  }
}