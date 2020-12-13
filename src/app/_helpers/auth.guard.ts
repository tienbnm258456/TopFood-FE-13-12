import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from 'src/app/service/login/auth.service';
import { TokenStorageService } from '../service/login/token-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    roles: string[] = [];
    
    constructor(
        private router: Router,
        private authService: AuthService,
        private tokenStorage: TokenStorageService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        this.roles = this.tokenStorage.getUser().roles;

        if (currentUser  && this.roles.toString() == "ROLE_ADMIN" ) {
            console.log(currentUser);
            // đăng nhập để trở về đúng
            return true;
        }
        else if(this.roles.toString() == "ROLE_USER"){
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        else{
        // chưa đăng nhập nên chuyển hướng đến trang đăng nhập bằng url trả về
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
        }
    }
}