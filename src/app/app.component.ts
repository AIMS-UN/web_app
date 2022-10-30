import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'aims_wa';
    logged = true;

    logout() {
        // Logout the cookie and redirect to login

        this.logged = false;
    }
}
