import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notifications } from 'src/app/entity/Notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private Url: String;

  constructor(private http: HttpClient) { 
    this.Url = 'http://localhost:8080/api/notifications';
  }

  public findAll(): Observable<Notifications[]> {
    return this.http.get<Notifications[]>(`${this.Url}`);
  }
}