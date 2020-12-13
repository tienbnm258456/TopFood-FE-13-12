import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Supplier } from 'src/app/entity/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private baseUrl ="http://localhost:8080/api/supplier"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(`${this.baseUrl}`);
  }

  getSupplier(id): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.baseUrl}/${id}`);
  }

  addSupplier(supplier: Supplier) {
    console.log(supplier);
    return this.http.post(`${this.baseUrl}`, supplier);
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.baseUrl}/${supplier.id}`, supplier);
  }
  removeSupplier(id): Observable<Supplier> {
    return this.http.delete<Supplier>(`${this.baseUrl}/${id}`)
  }
}
