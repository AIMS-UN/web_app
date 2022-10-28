import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './loginPage.component.html',
    styleUrls: ['./loginPage.component.css'],
})
export class LoginPageComponent implements OnInit {
    username: string = '';
    password: string = '';

    constructor(private auth: AuthService) {}

    ngOnInit() {
        return;
    }

    loginUser() {
        this.auth.login(this.username, this.password);
    }
}
