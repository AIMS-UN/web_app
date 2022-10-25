import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-subject-search-page',
    templateUrl: './subject-search-page.component.html',
    styleUrls: ['./subject-search-page.component.css'],
})
export class SubjectSearchPageComponent implements OnInit {
    searchState: string = '';

    constructor() {}

    ngOnInit() {
        return;
    }
}
