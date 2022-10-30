import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-teacher-grading-page',
    templateUrl: './teacher-grading-page.component.html',
    styleUrls: ['./teacher-grading-page.component.css'],
})
export class TeacherGradingPageComponent implements OnInit {
    // Activar cuando ya se tengan los datos de una clase y la tabla esté lista para mostrar
    found: boolean = false;

    constructor() {}

    ngOnInit() {
        return;
    }

    // Probablemente toque colocar de parámetro la ID de la clase a consultar
    getGrades() {
        this.found = true;
    }
}
