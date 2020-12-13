import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/entity/Category';
import { totalCategory } from 'src/app/entity/TotalCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = "http://localhost:8080/api/category";
  private top4CategoryUrl ="http://localhost:8080/api/top4category";
  private Url = "http://localhost:8080/api/totalCategory";
  constructor(private http: HttpClient) { }

  getListCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`);
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  addCategory(category: Category) {
    // console.log(Category);
    return this.http.post(`${this.baseUrl}`, category);
  }

  updateCategory(Category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/${Category.id}`, Category);
  }

  removeCategory(id): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`)
  }

  getTop4Category(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.top4CategoryUrl}`);
  }
  public totalCategory(): Observable<totalCategory> {
    return this.http.get<totalCategory>(`${this.Url}`);
  }
}
