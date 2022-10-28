import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { LoginGQL } from './graphql/generated/accounts.gql.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLogged: boolean = false;
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
                console.log(data);
                this.isLogged = true;
                this.router.navigate([this.redirectUrl]);
            });
    }

    logout() {
        this.isLogged = false;
        this.apollo.client.resetStore();
    }

    setRedirectUrl(url: string) {
        this.redirectUrl = url;
    }
}
