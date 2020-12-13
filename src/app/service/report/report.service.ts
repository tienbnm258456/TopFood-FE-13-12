import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from 'src/app/entity/Report';
import { EmailMessage } from 'src/app/entity/EmailMessage ';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl ="http://localhost:8080/api/report";
  private sendMailUrl ="http://localhost:8080/api/send-email";
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.baseUrl}`);
  }
  addReport(report: Report) : Observable<Report>{
    return this.http.post<Report>(`${this.baseUrl}`, report);
  }
  sendEmail(email: EmailMessage): Observable<EmailMessage>{
    return this.http.post<EmailMessage>(`${this.sendMailUrl}`, email);
  }
  getReportById(id): Observable<Report> {
    return this.http.get<Report>(`${this.baseUrl}/${id}`);
  }
}