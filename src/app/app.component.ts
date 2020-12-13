import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/login/auth.service';
import { TokenStorageService } from './service/login/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'topfood';
  currentUser = this.authService.currentUserValue;
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }


  ngOnInit(): void {
    this.saveToken();
  }
  private saveToken() {
    this.tokenStorage.saveUser(this.currentUser);
    this.tokenStorage.saveToken(this.currentUser.token);
  }
}
