import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGQL } from 'src/app/services/graphql/generated/accounts.gql.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './loginPage.component.html',
    styleUrls: ['./loginPage.component.css'],
})
export class LoginPageComponent implements OnInit {
    username: string = '';
    password: string = '';
    logged: boolean = false;

    constructor(private loginGQL: LoginGQL, private router: Router) {}

    ngOnInit() {
        return;
    }

    loginUser() {
        this.loginGQL
            .mutate({
                username: this.username,
                password: this.password,
            })
            .subscribe(({ data, loading }) => {
                if (data) {
                    this.logged = true;
                    this.redirect();
                }
            });
    }

    redirect() {
        this.router.navigate(['']);
    }
}
