import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryDetail } from 'src/app/entity/HistoryDetail';
import { HistoryService } from 'src/app/service/history/history.service';

@Component({
  selector: 'app-history-detail-admin',
  templateUrl: './history-detail-admin.component.html',
  styleUrls: ['./history-detail-admin.component.scss']
})
export class HistoryDetailAdminComponent implements OnInit {
  historyDetails: HistoryDetail[];
  page = 1;
  pageSize = 10;
  history : HistoryDetail = new HistoryDetail();
  constructor(
    private historyService : HistoryService,
    private route : ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getHistoryDetails("");
  }
  getHistoryDetails(orderDetail: String){
    if(orderDetail == null){
      this.getHistoryDetails("");
    }
    this.route.params.subscribe(param => {
      this.historyService.getHistoryDetail(param.orderId,orderDetail).subscribe(data => {
        this.historyDetails = data;
        console.log(data);
      })
    });
  }
}
