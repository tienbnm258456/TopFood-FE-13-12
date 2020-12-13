import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AboutUsComponent } from './front-end/about-us/about-us.component';
import { ContactUsComponent } from './front-end/contact-us/contact-us.component';
import { SlideComponent } from './front-end/slide/slide.component';
import { HomeComponent } from './front-end/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProductManagerComponent } from './backend/product-manager/product-manager.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { HeaderComponent } from './front-end/header/header.component';
import { FooterComponent } from './front-end/footer/footer.component';
import { ProductDetailComponent } from './backend/product-detail/product-detail.component';
import { ProductComponent } from './front-end/product/product.component';
import { CategoryManagerComponent } from './backend/category-manager/category-manager.component';
import { CategoryAddComponent } from './backend/category-add/category-add.component';
import { CategoryEditComponent } from './backend/category-edit/category-edit.component';
import { CategoryDetailComponent } from './backend/category-detail/category-detail.component';
import { SupplierManagerComponent } from './backend/supplier-manager/supplier-manager.component';
import { SupplierAddComponent } from './backend/supplier-add/supplier-add.component';
import { SupllierEditComponent } from './backend/supllier-edit/supllier-edit.component';
import { SupllierDetailComponent } from './backend/supllier-detail/supllier-detail.component';
import { UserManagerComponent } from './backend/user-manager/user-manager.component';
import { UserAddComponent } from './backend/user-add/user-add.component';
import { UserEditComponent } from './backend/user-edit/user-edit.component';
import { UserDetailComponent } from './backend/user-detail/user-detail.component';
import { LoginComponent } from './front-end/login/login.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ShoppingCartComponent } from './front-end/shopping-cart/shopping-cart.component';
import { PaymentSuccessComponent } from './front-end/payment-success/payment-success.component';
import { ProductSaleComponent } from './front-end/product-sale/product-sale.component';
import { SlideRunComponent } from './front-end/slide-run/slide-run.component';
import { RegisterComponent } from './front-end/register/register.component';
import { ProductSingleComponent } from './front-end/product-single/product-single.component';
import { LoaderComponent } from './front-end/loader/loader.component';
import { LoaderService } from './service/loader/loader.service';
import { OrdersByDayComponent } from './backend/orders-by-day/orders-by-day.component';
import { OrdersByWeekComponent } from './backend/orders-by-week/orders-by-week.component';
import { OrdersByMonthComponent } from './backend/orders-by-month/orders-by-month.component';
import { OrderByYearComponent } from './backend/order-by-year/order-by-year.component';
import { HistoryComponent } from './front-end/history/history.component';
import { HistoryDetailComponent } from './front-end/history-detail/history-detail.component';
import { HistoryManagerComponent } from './backend/history-manager/history-manager.component';
import { HistoryDetailAdminComponent } from './backend/history-detail-admin/history-detail-admin.component';
import { InfoPersonalComponent } from './front-end/info-personal/info-personal.component';
import { ChangePasswordComponent } from './front-end/change-password/change-password.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider} from 'angularx-social-login';
import { ReportManagerComponent } from './backend/report-manager/report-manager.component';
import { SendEmailComponent } from './backend/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    SlideComponent,
    HomeComponent,
    AdminComponent,
    DashboardComponent,
    ProductManagerComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductComponent,
    CategoryManagerComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    SupplierManagerComponent,
    SupplierAddComponent,
    SupllierEditComponent,
    SupllierDetailComponent,
    UserManagerComponent,
    UserAddComponent,
    UserEditComponent,
    UserDetailComponent,
    LoginComponent,
    ShoppingCartComponent,
    PaymentSuccessComponent,
    ProductSaleComponent,
    SlideRunComponent,
    RegisterComponent,
    ProductSingleComponent,
    LoaderComponent,
    OrdersByDayComponent,
    OrdersByWeekComponent,
    OrdersByMonthComponent,
    OrderByYearComponent,
    HistoryComponent,
    HistoryDetailComponent,
    HistoryManagerComponent,
    HistoryDetailAdminComponent,
    InfoPersonalComponent,
    ChangePasswordComponent,
    ReportManagerComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, FormsModule, ReactiveFormsModule, SocialLoginModule
  ],

  providers: [authInterceptorProviders, LoaderService,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '572160132289-3ut26djpsogn8vfqgdf4k4g4otr1tpi1.apps.googleusercontent.com'
          ),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('2795394087454225'),
        },
      ],
    } as SocialAuthServiceConfig,
  },],

  bootstrap: [AppComponent]
})
export class AppModule { }
