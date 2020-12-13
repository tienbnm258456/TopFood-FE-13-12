import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/entity/Report';
import { ReportService } from 'src/app/service/report/report.service';

@Component({
  selector: 'app-report-manager',
  templateUrl: './report-manager.component.html',
  styleUrls: ['./report-manager.component.scss']
})
export class ReportManagerComponent implements OnInit {
reports : Report[];
  constructor(private reportService : ReportService) { }

  ngOnInit(): void {
    this.getListReport();
  }

  getListReport(){
    this.reportService.getAll().subscribe(data => {
      this.reports = data;
    })
  }
}