import { Component, OnInit } from '@angular/core';
import {
    LoginGQL,
    LoginMutation,
} from 'src/app/services/graphql/generated/accounts.gql.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './loginPage.component.html',
    styleUrls: ['./loginPage.component.css'],
})
export class LoginPageComponent implements OnInit {
    username: string = '';
    password: string = '';
    account: LoginMutation['login'] | undefined;

    constructor(private loginGQL: LoginGQL) {}

    ngOnInit() {
        return;
    }

    loginUser() {
        console.log(this.username, this.password);
        this.loginGQL
            .mutate({
                username: this.username,
                password: this.password,
            })
            .subscribe(({ data, loading }) => {
                console.log(data);
                this.account = data?.login;
                console.log(this.account);
                console.log(loading);
            });
    }
}
