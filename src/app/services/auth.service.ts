import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { firstValueFrom } from 'rxjs';
import { LoginGQL } from './graphql/generated/accounts.gql.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    redirectUrl: string = '';
    constructor(
        private loginGQL: LoginGQL,
        private apollo: Apollo,
        private router: Router,
        private cookieService: CookieService
    ) {}

    setSession(token: string) {
        let now = new Date();
        sessionStorage.setItem('token', token);
        sessionStorage.setItem(
            'expiration',
            now.setHours(now.getHours() + 2).toString()
        );
    }

    redirect() {
        this.setRedirectUrl(this.redirectUrl);
        this.router.navigate([this.redirectUrl]);
    }

    async login(username: string, password: string) {
        try {
            const logUser = await firstValueFrom(
                this.loginGQL.mutate({
                    username: username,
                    password: password,
                })
            );

            this.setSession(logUser.data!.login.token);
            this.redirect();
        } catch (err) {
            throw 'LOGIN ERROR';
        }
    }

    autoLogin(): boolean {
        if (this.isLogged()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('expiration');
        this.apollo.client.resetStore();
        this.router.navigate(['/login']);
    }

    setRedirectUrl(url: string) {
        this.redirectUrl = url === '' ? '/dashboard' : url;
    }

    isLogged(): boolean {
        return sessionStorage.getItem('token') !== null;
    }
}
