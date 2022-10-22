import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './loginPage.component.html',
    styleUrls: ['./loginPage.component.css'],
})
export class LoginPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        return;
    }

    loginUser(
        userNameField: HTMLInputElement,
        passwordField: HTMLInputElement
    ): boolean {
        const username = userNameField.value;
        const password = passwordField.value;

        const data = {
            username,
            password,
        };

        console.log(data);
        return false;
    }

    checkPass(passwordField: HTMLInputElement): void {
        const password = passwordField.value;
        if (password.length < 5) {
            console.log('less');
            passwordField.style.color = 'red';
        }
    }
}
