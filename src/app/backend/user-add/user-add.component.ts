import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/entity/Role';
import { User } from 'src/app/entity/User';
import { AuthService } from 'src/app/service/login/auth.service';
import { RoleService } from 'src/app/service/role/role-service.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  user: User = new User();
  error = '';
  roles : Role[];
  
  form = new FormGroup({
    fname: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    uname: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required, Validators.min(6)]),
    phone: new FormControl('',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    email: new FormControl('',[ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
  });
  constructor(
    private userService: UserService, private route: ActivatedRoute, private router: Router,
    private authService: AuthService,
    private roleService : RoleService
  ) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getAll().subscribe(data =>{
      if(data) {
        this.roles = data;
        console.log(this.roles)
      }
    })
  }
  onSubmit() {
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/admin/user-manager');
      },
      error => {
        this.error = error;
      }
    );
  }
  get f() {
    return this.form.controls;
  }
  checkValidateFirstName() {
    this.user.firstName = this.user.firstName.trim();
  }
  checkValidateLastName() {
    this.user.lastName = this.user.lastName.trim();
  }
  checkValidateUserName() {
    this.user.userName = this.user.userName.trim();
  }
  checkValidateEmail() {
    this.user.email = this.user.email.trim();
  }
  checkValidatePhone() {
    this.user.phone = this.user.phone.trim();
  }
  checkValidatePassword() {
    this.user.password = this.user.password.trim();
  }
}
