import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/entity/Orders';
import { OderService } from 'src/app/service/order/oder.service';

@Component({
  selector: 'app-orders-by-day',
  templateUrl: './orders-by-day.component.html',
  styleUrls: ['./orders-by-day.component.scss']
})
export class OrdersByDayComponent implements OnInit {

  orders: Orders[];

  constructor(
    private orderService: OderService
  ) { }

  ngOnInit(): void {
    this.getOrdersByDay();
  }

  getOrdersByDay() {
    this.orderService.getOrdersByDay().subscribe(data => {
      this.orders = data;
    })
  }
}
