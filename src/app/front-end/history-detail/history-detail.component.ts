import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/entity/Cart';
import { HistoryDetail } from 'src/app/entity/HistoryDetail';
import { HistoryService } from 'src/app/service/history/history.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  historyDetails: HistoryDetail[];
  carts: Cart[];
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
