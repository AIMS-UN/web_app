import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
    editable: boolean = false;

    constructor() {}

    ngOnInit() {
        return;
    }

    toggleEdit(fields: HTMLInputElement[]): void {
        fields.forEach((field) => {
            field.disabled = !field.disabled;
        });
    }
}
