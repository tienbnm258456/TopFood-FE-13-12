import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OderService } from 'src/app/service/order/oder.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {
  IsmodelShow: boolean = false;
  userId: number;
  currentUser = '';
  constructor(
    private activeRouter: ActivatedRoute,
    private orderService: OderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem("currentUser");
    if (this.currentUser) {
      this.userId = JSON.parse(localStorage.getItem("currentUser")).id;
    }
    this.activeRouter.queryParams.subscribe(param => {
      if (param['paymentId']) {
        this.orderService.approve(this.userId, param['paymentId'], param['PayerID']).subscribe(() => {
          console.log("Payment successfully");
        })
      }
    });
  }
  exit() {
    this.IsmodelShow = true;
  }

}
