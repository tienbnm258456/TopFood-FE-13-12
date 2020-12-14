import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/User';
import { TokenStorageService } from 'src/app/service/login/token-storage.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  users : User[];
  user : User
  userId : number;
  userName : String;
  password : String;
  constructor(
    private tokenStorage: TokenStorageService,
    private userService : UserService
    ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.userService.getListUser().subscribe( data=> {   
      this.users = data;
    })
  }
  delete(id: number) {
    this.userId = id;
    this.userName = this.tokenStorage.getUser().username;
}

checkDelete(){
  this.userService.removeUser(this.userId, this.userName)
    .subscribe(
      data => {
        console.log(data);
        this.getAll();
      },
      error => console.log(error));
      console.log(this.userId);
}
}
