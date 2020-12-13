import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailMessage } from 'src/app/entity/EmailMessage ';
import { Report } from 'src/app/entity/Report';
import { ReportService } from 'src/app/service/report/report.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  email: EmailMessage = new EmailMessage();
  report: Report = new Report();
  constructor(private reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.getReport();
  }
  send() {
    this.reportService.sendEmail(this.email).subscribe(data => {
      this.router.navigateByUrl("/admin/dashboard")
    });
  }
  getReport() {
    this.route.params.subscribe(param =>{
      this.reportService.getReportById(param.id).subscribe(data =>{
        this.report = data;
      })
    })
  }
}