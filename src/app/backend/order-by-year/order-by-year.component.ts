import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/entity/Orders';
import { OderService } from 'src/app/service/order/oder.service';

@Component({
  selector: 'app-order-by-year',
  templateUrl: './order-by-year.component.html',
  styleUrls: ['./order-by-year.component.scss']
})
export class OrderByYearComponent implements OnInit {

  orders: Orders[];

  constructor(
    private orderService: OderService
  ) { }

  ngOnInit(): void {
    this.getOrdersByYear();
  }

  getOrdersByYear() {
    this.orderService.getOrdersByYear().subscribe(data => {
      console.log(data)
      this.orders = data;
    })
  }
}