import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/entity/User';
import { map } from 'rxjs/operators';
import { TokenDto } from 'src/app/entity/TokenDTO';

const AUTH_API = 'http://localhost:8080/api/';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private oauthURL = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}

public google(tokenDto: TokenDto): Observable<any> {
  return this.http.post<any>(this.oauthURL + 'google', tokenDto, httpOptions).pipe(map(user => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }));;
}

public facebook(tokenDto: TokenDto): Observable<any> {
  return this.http.post<any>(this.oauthURL + 'facebook', tokenDto, httpOptions).pipe(map(user => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }));;
}

login(user): Observable<any> {
  return this.http.post<any>(AUTH_API + 'login', {
    userName: user.userName,
    password: user.password
  }).pipe(map(user => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
  }));;
}


register(user): Observable<any> {
  return this.http.post(AUTH_API + 'register', {
    firstName : user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    userName:user.userName,
    email: user.email,
    password: user.password
  }, httpOptions);
}

changePassword(changePassword): Observable<any> {
  return this.http.put<any>(AUTH_API + 'change-password', {
    userName: changePassword.userName,
    password: changePassword.password,
    passwordNew: changePassword.passwordNew,
    confirmNewPassword: changePassword.confirmNewPassword
  }, httpOptions);
}

  signOut() {
   // xóa người dùng khỏi bộ nhớ cục bộ để đăng xuất người dùng
   localStorage.removeItem('currentUser');
   this.currentUserSubject.next(null);
   window.sessionStorage.removeItem(TOKEN_KEY);
   window.sessionStorage.removeItem(USER_KEY);
  }
}