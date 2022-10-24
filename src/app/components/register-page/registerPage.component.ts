import { Component, OnInit } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';

@Component({
    selector: 'app-register-page',
    templateUrl: './registerPage.component.html',
    styleUrls: ['./registerPage.component.css'],
})
export class RegisterPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        return;
    }

    registerUser(
        userNameField: HTMLInputElement,
        passwordField: HTMLInputElement,
        teacherField: MatRadioButton
    ): boolean {
        const username = userNameField.value;
        const password = passwordField.value;
        const role = teacherField.checked ? 'teacher' : 'student';

        const data = {
            username,
            password,
            role,
        };

        console.log(data);
        return false;
    }
}
