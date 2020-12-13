import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/entity/Cart';
import { InfoUser } from 'src/app/entity/InfoUser';
import { User } from 'src/app/entity/User';
import { UserService } from 'src/app/service/user/user.service';


@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.scss']
})
export class InfoPersonalComponent implements OnInit {
  user: InfoUser;
  currentUser = '';
  id: number;
  carts: Cart[];
  message = '';
  loading = false;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem("currentUser");
    if (this.currentUser) {
      this.id = JSON.parse(localStorage.getItem("currentUser")).id;
      // this.updateProduct(this.id);
      this.getInfoUser(this.id);
    }
  }
  updateProduct(id: number) {
    this.userService.updateInfoUser(id, this.user).subscribe(data => {
      this.user = data;
      this.loading = true;
      this.router.navigateByUrl('/info');
      this.message = 'Sửa thành công'
    })
  }

  getInfoUser(id: number){
    this.userService.getInfoUser(id).subscribe(data => {
      this.user = data;
    })
  }
}
