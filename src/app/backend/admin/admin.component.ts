import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/User';
import { AuthService } from 'src/app/service/login/auth.service';
import { TokenStorageService } from 'src/app/service/login/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  username : User[];
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage : TokenStorageService
  ) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }
  logout() {
    this.authService.signOut();
    this.router.navigateByUrl('/login');
  }

  private loadAllUsers() {
    this.username = this.tokenStorage.getUser().username;
    console.log( this.tokenStorage.getUser());
  }
}