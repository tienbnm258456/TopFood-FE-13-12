import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/entity/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private Url: string;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:8080/api/contact';
   }

  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.Url}`);
  }   

  public getContact(id:number) {
    return this.http.get<Contact>(`${this.Url}/${id}`);
  }

  public addContact(Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.Url}`, Contact);
  }

  public editContact(Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.Url}/${Contact.id}`, Contact);
  }

  public removeContact(id): Observable<Contact> {
    return this.http.delete<Contact>(`${this.Url}/${id}`)
  }
}
