import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/entity/Category';
import { User } from 'src/app/entity/User';
import { CategoryService } from 'src/app/service/category/category.service';
import { AuthService } from 'src/app/service/login/auth.service';
import { TokenStorageService } from 'src/app/service/login/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: Category[];
  isLoggedIn = false;
  isLoggedOut = false;
  user: User
  username: User[];
  IsmodelShow: boolean = false;
  form: any = {};
  currentUser = this.authService.currentUserValue;
  @Input('count') count: number;
  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }


  ngOnInit(): void {
    this.loadAllUsers();
    this.getCategories();
    if (localStorage.getItem("currentUser")) {
      this.isLoggedIn = true;
      this.isLoggedOut = false;
    }
  }

  exit() {
    this.IsmodelShow = !this.IsmodelShow
  }
  getCategories() {
    this.categoryService.getListCategory().subscribe(data => {
      this.categories = data;
    })
  }

  login() {
    this.router.navigateByUrl('/login');
  }
  logout() {
    this.authService.signOut();
    this.router.navigateByUrl('/home');
    window.location.reload();
  }

  private loadAllUsers() {
    this.username = this.tokenStorage.getUser() ? this.tokenStorage.getUser().username : '';
  }
}