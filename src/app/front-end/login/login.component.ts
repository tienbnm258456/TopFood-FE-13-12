import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/login/auth.service';
import { TokenStorageService } from 'src/app/service/login/token-storage.service';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { TokenService } from 'src/app/service/login/token.service';
import { TokenDto } from 'src/app/entity/TokenDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  user: any = {};
  socialUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private fb: FormBuilder,
    private router: Router,
    private authServiceSocial: SocialAuthService,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      
      userName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(11),
      ]],
     
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]],
    })
  }

  get userName() {
    return this.form.get('userName');
  }
  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.user).subscribe(
      data => {

        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
        this.roles = this.tokenStorage.getUser().roles;
        if (this.roles.toString() == "ROLE_ADMIN") {
          this.router.navigateByUrl('/admin');
        }
        else if (this.roles.toString() == "ROLE_USER") {
          this.router.navigateByUrl('/home');
        }

      },
      error => {
        this.error = error;
        this.loading = false;
      }
      
    );
  }

  reloadPage() {
    window.location.reload();
  }
  
  isLogin(){
    if(localStorage.getItem("currentUser") && this.roles.toString() == "ROLE_ADMIN" ){
      this.isLoggedIn = true;
      this.router.navigateByUrl('/admin');
    }
    else if(localStorage.getItem("currentUser") && this.roles.toString() == "ROLE_USER" ){
      this.isLoggedIn = true;
      this.router.navigateByUrl('/home');
    }
  }

  checkValidateUserName() {
    this.user.userName = this.user.userName.trim();
  }
  checkValidatePassword() {
    this.user.password = this.user.password.trim();
  }

  loginGG() {
    this.authServiceSocial.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialUser = data;
        const tokenGoogle = new TokenDto(this.socialUser.idToken);
        this.authService.google(tokenGoogle).subscribe(
          res => {
            this.tokenService.setToken(res.token);
            this.isLogged = true;
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.tokenStorage.saveToken(res.token);
            this.tokenStorage.saveUser(res);
            this.router.navigate(['/']);
          },
          err => {
            console.log(err);
            this.logOut();
          }
        );
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  loginFB(){
    this.authServiceSocial.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialUser = data;
        const tokenFace = new TokenDto(this.socialUser.authToken);
        this.authService.facebook(tokenFace).subscribe(
          res => {
            this.tokenService.setToken(res.token);
            this.isLogged = true;
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.tokenStorage.saveToken(res.token);
            this.tokenStorage.saveUser(res);
            this.router.navigate(['/']);
          },
          err => {
            console.log(err);
            this.logOut();
          }
        );
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  logOut(): void {
    this.authServiceSocial.signOut().then(
      data => {
        this.tokenService.logOut();
        this.isLogged = false;
      }
    );
  }
}
