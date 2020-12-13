import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataDTO } from 'src/app/entity/DataDTO';
import { SalesReport } from 'src/app/entity/SalesReport';
import { SalesReportDTO } from 'src/app/entity/SalesReportDTO ';

@Injectable({
  providedIn: 'root'
})
export class SalesReportService {
  private baseUrl ="http://localhost:8080/api/sales-report";
  constructor(private http: HttpClient) { }

  salesReport(salesReport: SalesReport): Observable<SalesReportDTO[]>{
    return this.http.post<SalesReportDTO[]>(`${this.baseUrl}`, salesReport);
  }
}