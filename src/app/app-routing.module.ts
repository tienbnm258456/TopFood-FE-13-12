import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './backend/admin/admin.component';
import { CategoryAddComponent } from './backend/category-add/category-add.component';
import { CategoryDetailComponent } from './backend/category-detail/category-detail.component';
import { CategoryEditComponent } from './backend/category-edit/category-edit.component';
import { CategoryManagerComponent } from './backend/category-manager/category-manager.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ProductDetailComponent } from './backend/product-detail/product-detail.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { SupllierDetailComponent } from './backend/supllier-detail/supllier-detail.component';
import { SupllierEditComponent } from './backend/supllier-edit/supllier-edit.component';
import { SupplierAddComponent } from './backend/supplier-add/supplier-add.component';
import { SupplierManagerComponent } from './backend/supplier-manager/supplier-manager.component';
import { UserAddComponent } from './backend/user-add/user-add.component';
import { UserDetailComponent } from './backend/user-detail/user-detail.component';
import { UserEditComponent } from './backend/user-edit/user-edit.component';
import { UserManagerComponent } from './backend/user-manager/user-manager.component';
import { AboutUsComponent } from './front-end/about-us/about-us.component';
import { ContactUsComponent } from './front-end/contact-us/contact-us.component';
import { HomeComponent } from './front-end/home/home.component';
import { LoginComponent } from './front-end/login/login.component';
import { ProductSaleComponent } from './front-end/product-sale/product-sale.component';
import { ProductSingleComponent } from './front-end/product-single/product-single.component';
import { ProductComponent } from './front-end/product/product.component';
import { RegisterComponent } from './front-end/register/register.component';
import { ShoppingCartComponent } from './front-end/shopping-cart/shopping-cart.component';
import { AuthGuard } from './_helpers/auth.guard';
import { PaymentSuccessComponent } from './front-end/payment-success/payment-success.component';
import { PaymentErrorComponent } from './front-end/payment-error/payment-error.component';
import { HistoryDetailComponent } from './front-end/history-detail/history-detail.component';
import { HistoryComponent } from './front-end/history/history.component';
import { OrdersByDayComponent } from './backend/orders-by-day/orders-by-day.component';
import { OrdersByWeekComponent } from './backend/orders-by-week/orders-by-week.component';
import { OrdersByMonthComponent } from './backend/orders-by-month/orders-by-month.component';
import { OrderByYearComponent } from './backend/order-by-year/order-by-year.component';
import { HistoryManagerComponent } from './backend/history-manager/history-manager.component';
import { HistoryDetailAdminComponent } from './backend/history-detail-admin/history-detail-admin.component';
import { InfoPersonalComponent } from './front-end/info-personal/info-personal.component';
import { ChangePasswordComponent } from './front-end/change-password/change-password.component';
import { ReportManagerComponent } from './backend/report-manager/report-manager.component';
import { SendEmailComponent } from './backend/send-email/send-email.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'products/:categoryId', component: ProductSaleComponent }
      
    ]
  },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'info', component: InfoPersonalComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'history/detail/:orderId', component: HistoryDetailComponent },
  { path: 'products/:id', component: ProductSaleComponent },
  { path: 'product/detail/:id', component: ProductSingleComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'payment-error', component: PaymentErrorComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', canActivate: [AuthGuard], pathMatch: 'full' },
      { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
      { path: 'manager', canActivate: [AuthGuard], component: ProductManagerComponent },
      { path: 'add-product', canActivate: [AuthGuard], component: ProductAddComponent },
      { path: 'product/edit/:id', canActivate: [AuthGuard], component: ProductEditComponent },
      { path: 'product/detail/:id', canActivate: [AuthGuard], component: ProductDetailComponent },
      { path: 'category-manager', canActivate: [AuthGuard], component: CategoryManagerComponent },
      { path: 'add-category', canActivate: [AuthGuard], component: CategoryAddComponent },
      { path: 'category/edit/:id', canActivate: [AuthGuard], component: CategoryEditComponent },
      { path: 'category/detail/:id', canActivate: [AuthGuard], component: CategoryDetailComponent },
      { path: 'supplier-manager', canActivate: [AuthGuard], component: SupplierManagerComponent },
      { path: 'add-supplier', canActivate: [AuthGuard], component: SupplierAddComponent },
      { path: 'supplier/edit/:id', canActivate: [AuthGuard], component: SupllierEditComponent },
      { path: 'supplier/detail/:id', canActivate: [AuthGuard], component: SupllierDetailComponent },
      { path: 'user-manager', canActivate: [AuthGuard], component: UserManagerComponent },
      { path: 'add-user', canActivate: [AuthGuard], component: UserAddComponent },
      { path: 'user/edit/:id', canActivate: [AuthGuard], component: UserEditComponent },
      { path: 'user/detail/:id', canActivate: [AuthGuard], component: UserDetailComponent },
      { path: 'ordersByDay', canActivate: [AuthGuard], component: OrdersByDayComponent },
      { path: 'ordersByWeek', canActivate: [AuthGuard], component: OrdersByWeekComponent },
      { path: 'ordersByMonth', canActivate: [AuthGuard], component: OrdersByMonthComponent },
      { path: 'ordersByYear', canActivate: [AuthGuard], component: OrderByYearComponent },
      { path: 'history-manager', canActivate: [AuthGuard], component: HistoryManagerComponent },
      { path: 'history-detail/:orderId', component: HistoryDetailAdminComponent },
      { path: 'report-manager', canActivate: [AuthGuard], component: ReportManagerComponent},
      { path: 'report/:id', canActivate: [AuthGuard], component: SendEmailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
