import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/entity/Cart';
import { HistoryService } from '../../service/history/history.service';
import { History } from 'src/app/entity/History';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history : History = new History();
  historys: History[];
  userId: number;
  currentUser = '';
  totalPrice = 0;
  carts: Cart[];
  page = 1;
  pageSize = 10;
  constructor(
    private historyService : HistoryService
  ) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem("currentUser");
    if (this.currentUser) {
      this.userId = JSON.parse(localStorage.getItem("currentUser")).id;
      this.getHistorys(this.userId, "");
    }
  }

  getHistorys(user: number, order: String) {
    if(order == null){
      this.getHistorys(this.userId, "");
    }
    this.historyService.getHistory(user, order).subscribe(data => {
      if (data) {
        this.historys = data;
      }
      else{
        this.historys = [];
      }
    });
  }
}