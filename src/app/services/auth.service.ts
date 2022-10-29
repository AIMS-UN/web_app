import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LoginGQL } from './graphql/generated/accounts.gql.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    redirectUrl: string = '';
    constructor(
        private loginGQL: LoginGQL,
        private apollo: Apollo,
        private router: Router
    ) {}

    login(username: string, password: string) {
        this.loginGQL
            .mutate({
                username: username,
                password: password,
            })
            .subscribe(({ data, loading }) => {
                let now = new Date();
                sessionStorage.setItem(
                    'expiration',
                    now.setHours(now.getHours() + 2).toString()
                );
                this.setRedirectUrl(this.redirectUrl);
                this.router.navigate([this.redirectUrl]);
            });
    }

    autoLogin(): boolean {
        if (this.isLogged()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    logout() {
        sessionStorage.removeItem('expiration');
        this.apollo.client.resetStore();
        this.router.navigate(['/login']);
    }

    setRedirectUrl(url: string) {
        this.redirectUrl = url === '' ? '/dashboard' : url;
    }

    isLogged(): boolean {
        return sessionStorage.getItem('expiration') !== null;
    }
}
