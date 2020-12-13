import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/entity/Orders';
import { OderService } from 'src/app/service/order/oder.service';

@Component({
  selector: 'app-orders-by-week',
  templateUrl: './orders-by-week.component.html',
  styleUrls: ['./orders-by-week.component.scss']
})
export class OrdersByWeekComponent implements OnInit {

  orders: Orders[];

  constructor(
    private orderService: OderService
  ) { }

  ngOnInit(): void {
    this.getOrdersByWeek();
  }

  getOrdersByWeek() {
    this.orderService.getOrdersByWeek().subscribe(data => {
      this.orders = data;
    })
  }
}