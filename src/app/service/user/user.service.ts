import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoUser } from 'src/app/entity/InfoUser';
import { totalUser } from 'src/app/entity/TotalUser';
import { User } from 'src/app/entity/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl ="http://localhost:8080/api/user";
  private deleteUrl = 'http://localhost:8080/api/delete/user';
  private totalUserUrl = 'http://localhost:8080/api/totalUser';
  private updateUserUrl ="http://localhost:8080/api/update-user";
  private getUserUrl ="http://localhost:8080/api/info-user";
  constructor(private http: HttpClient) { }
  getListUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getUser(id): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  // addCategory(category: Category){
  //   // console.log(Category);
  //   return this.http.post(`${this.baseUrl}`,category);
  // }

  updateUser(User: User): Observable<User>{  
    return this.http.put<User>(`${this.baseUrl}/${User.id}`,User);
    console.log(User);
    
  }
  updateInfoUser(id: number, user: InfoUser): Observable<InfoUser>{  
    return this.http.put<InfoUser>(`${this.updateUserUrl}?userId=${id}`, user); 
  }

  getInfoUser(id : number): Observable<User>{
    return this.http.get<User>(`${this.getUserUrl}?userId=${id}`);
  }

  removeUser(User : User): Observable<User>{
    return this.http.put<User>(`${this.baseUrl}/${User.id}`,User)
  }
  public totalUser(): Observable<totalUser> {
    return this.http.get<totalUser>(`${this.totalUserUrl}`);
  }
}
