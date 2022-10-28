import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const url: string = state.url;
        console.log('Auth Guard');
        return this.checkLogin(url);
    }

    checkLogin(url: string): true | UrlTree {
        if (this.authService.isLogged) {
            console.log('You are logged');
            return true;
        }

        console.log('You are not logged');

        this.authService.setRedirectUrl(url);
        console.log(url);

        return this.router.parseUrl('/login');
    }
}
