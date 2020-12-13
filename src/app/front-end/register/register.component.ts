import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/User';
import { AuthService } from 'src/app/service/login/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  user: User = new User();
  form: FormGroup;
  loading = false;
  returnUrl: string;
  error = '';
  constructor(
    private authService: AuthService,
    private router : Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      firstName: ['', [
        Validators.required,
      ]],
      lastName: ['', [
        Validators.required,
      ]],
      userName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(11),
      ]],
      phone: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]],
    })
  }
  get f() { return this.form.controls; }

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get userName() {
    return this.form.get('userName');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.loading = true;
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/register');
      },
      error => {
        this.error = error;
      }
    );
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
