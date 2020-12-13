import { Component, OnInit } from '@angular/core';
import { Notifications } from 'src/app/entity/Notifications';
import { Revenua } from 'src/app/entity/Revenua';
import { SalesReport } from 'src/app/entity/SalesReport';
import { SalesReportDTO } from 'src/app/entity/SalesReportDTO ';
import { totalCategory } from 'src/app/entity/TotalCategory';
import { totalOrder } from 'src/app/entity/TotalOrder';
import { totalProduct } from 'src/app/entity/TotalProduct';
import { totalUser } from 'src/app/entity/TotalUser';
import { CategoryService } from 'src/app/service/category/category.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { OderService } from 'src/app/service/order/oder.service';
import { ProductService } from 'src/app/service/product/product.service';
import { SalesReportService } from 'src/app/service/sales report/sales-report.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalProduct: totalProduct;
  totalCategory: totalCategory;
  totalUser: totalUser;
  totalOrder: totalOrder;
  revenuaDay: Revenua;
  revenuaWeek: Revenua;
  revenuaMonth: Revenua;
  revenuaYear: Revenua;
  IsModelShow : boolean = true;
  notifications: Notifications[];

  salesReportRequest: SalesReport = new SalesReport();
  salesReportResponse : SalesReportDTO[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private userService: UserService,
    private orderService: OderService,
    private salesReportService : SalesReportService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getTotalProduct();
    this.getTotalCategory();
    this.getTotalOrder();
    this.getTotalUser();
    this.getRevenuaByDay();
    this.getRevenuaByWeek();
    this.getRevenuaByMonth();
    this.getRevenuaByYear();
    this.getSalesReport();
    this.getNotifications();
  }

  getTotalUser() {
    this.userService.totalUser().subscribe(data => {
      console.log(data);
      this.totalUser = data;
    })
  }

  getTotalProduct() {
    this.productService.totalProduct().subscribe(data => {
      console.log(data);
      this.totalProduct = data;
    })
  }

  getTotalCategory() {
    this.categoryService.totalCategory().subscribe(data => {
      this.totalCategory = data;
    })
  }

  getTotalOrder() {
    this.orderService.totalOrder().subscribe(data => {
      this.totalOrder = data;
    })
  }

  getRevenuaByDay() {
    this.orderService.revenuaByDay().subscribe(data => {
      this.revenuaDay = data;
    })
  }

  getRevenuaByWeek() {
    this.orderService.revenuaByWeek().subscribe(data => {
      this.revenuaWeek = data;
    })
  }

  getRevenuaByMonth() {
    this.orderService.revenuaByMonth().subscribe(data => {
      this.revenuaMonth = data;
    })
  }

  getRevenuaByYear() {
    this.orderService.revenuaByYear().subscribe(data => {
      this.revenuaYear = data;
    })
  }

  getSalesReport() {
    if(this.salesReportResponse == null){
      this.salesReportRequest.type = 'A';
      this.salesReportService.salesReport(this.salesReportRequest).subscribe(data => {
        this.salesReportResponse = data;
        console.log(this.salesReportResponse);
      })
    }
      this.salesReportService.salesReport(this.salesReportRequest).subscribe(data => {
      this.salesReportResponse = data;
      console.log(this.salesReportResponse);
    })  
  }

  change(event) {
    this.salesReportRequest.type = event.target.value;
  }

  getNotifications() {
    this.notificationService.findAll().subscribe(data => {
      this.notifications = data;
    })
  }

  exit(){
    this.IsModelShow = false;
  }
}