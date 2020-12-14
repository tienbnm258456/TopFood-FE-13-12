import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/entity/Role';

import { Supplier } from 'src/app/entity/Supplier';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseUrl ="http://localhost:8080/api/role"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Role[]>{
    return this.http.get<Role[]>(`${this.baseUrl}`);
  }
}
