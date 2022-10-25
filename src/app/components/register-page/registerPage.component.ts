import { Component, OnInit } from '@angular/core';
import { RegisterGQL } from 'src/app/services/graphql/generated/accounts.gql.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './registerPage.component.html',
    styleUrls: ['./registerPage.component.css'],
})
export class RegisterPageComponent implements OnInit {
    username: string = '';
    password: string = '';
    role: string = '';
    constructor(private registerGQL: RegisterGQL) {}

    ngOnInit() {
        return;
    }

    registerUser() {
        console.log(this.username, this.password, this.role);
        this.registerGQL
            .mutate({
                username: this.username,
                password: this.password,
                role: this.role,
            })
            .subscribe((result) => {
                console.log(result);
            });
    }
}
