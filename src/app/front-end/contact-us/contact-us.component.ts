import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'src/app/entity/Report';
import { ReportService } from 'src/app/service/report/report.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  report: Report = new Report();

  constructor(
    private reportService: ReportService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.reportService.addReport(this.report).subscribe(data => {
      this.report = data;
      window.alert("Gửi thành công")
    })
  }

}