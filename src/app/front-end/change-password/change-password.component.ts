import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePassword } from 'src/app/entity/ChangePassword';
import { User } from 'src/app/entity/User';
import { AuthService } from 'src/app/service/login/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  changePassword: ChangePassword = new ChangePassword();
  form: FormGroup;
  loading = false;
  returnUrl: string;
  error = '';
  sucess = ''
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      userName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(11),
      ]],
      passwordNew: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]],
      confirmNewPassword: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]],
    })
  }
  get f() { return this.form.controls; }

  get userName() {
    return this.form.get('userName');
  }
  get passwordNew() {
    return this.form.get('passwordNew');
  }
  get confirmNewPassword() {
    return this.form.get('confirmNewPassword');
  }
  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.loading = true;
    this.authService.changePassword(this.changePassword).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/change-password');
        this.sucess = 'Đổi mật khẩu thành công';
      },
      error => {
        this.error = 'Không hợp lệ !';
      }
    );
  }
  checkValidateUserName() {
    this.changePassword.userName = this.changePassword.userName.trim();
  }
  checkValidatePasswordNew() {
    this.changePassword.passwordNew = this.changePassword.passwordNew.trim();
  }
  checkValidateConfirmNewPassword() {
    this.changePassword.confirmNewPassword = this.changePassword.confirmNewPassword.trim();
  }
  checkValidatePassword() {
    this.changePassword.password = this.changePassword.password.trim();
  }
}
