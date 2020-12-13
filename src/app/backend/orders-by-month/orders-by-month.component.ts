import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/entity/Orders';
import { OderService } from 'src/app/service/order/oder.service';

@Component({
  selector: 'app-orders-by-month',
  templateUrl: './orders-by-month.component.html',
  styleUrls: ['./orders-by-month.component.scss']
})
export class OrdersByMonthComponent implements OnInit {

  orders: Orders[];

  constructor(
    private orderService: OderService
  ) { }

  ngOnInit(): void {
    this.getOrdersByMonth();
  }

  getOrdersByMonth() {
    this.orderService.getOrdersByMonth().subscribe(data => {
      this.orders = data;
    })
  }
}
