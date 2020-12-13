import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/User';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  users : User[];
  user : User
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.userService.getListUser().subscribe( data=> {   
      this.users = data;
    })
  }
  delete(id: number) {
    
    this.userService.removeUser(this.user)
      .subscribe(
        data => {
          this.getAll();
        },
        error => console.log(error));
  }
}
