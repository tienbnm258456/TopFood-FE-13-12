import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/entity/Cart';
import { HistoryAll } from 'src/app/entity/HistoryAll';
import { HistoryService } from 'src/app/service/history/history.service';

@Component({
  selector: 'app-history-manager',
  templateUrl: './history-manager.component.html',
  styleUrls: ['./history-manager.component.scss']
})
export class HistoryManagerComponent implements OnInit {
  history : HistoryAll = new HistoryAll();
  historys: HistoryAll[];
  userId: number;
  currentUser = '';
  totalPrice = 0;
  carts: Cart[];
  page = 1;
  pageSize = 10;
  orderId : number;
  constructor(
    private historyService : HistoryService
  ) { }

  ngOnInit(): void {
    this.getHistoryAlls("");
  }

  getHistoryAlls(order: String) {
    if(order == null){
      this.getHistoryAlls("");
    }
    this.historyService.getHistoryAll(order).subscribe(data => {
      if (data) {
        this.historys = data;
        console.log(this.historys);
      }
      else {
        this.historys = [];
      }
    });
  }

  update(id: number) {
    this.orderId = id;
  }

  checkUpdate(){
    this.historyService.updateStatus(this.orderId)
      .subscribe(
        data => {
          console.log(data);
          this.getHistoryAlls("");
        },
        error => console.log(error));
        console.log(this.orderId);
  }
}
