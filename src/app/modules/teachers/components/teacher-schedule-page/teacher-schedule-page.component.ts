import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';

const months: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

@Component({
    selector: 'app-teacher-schedule-page',
    templateUrl: './teacher-schedule-page.component.html',
    styleUrls: ['./teacher-schedule-page.component.css'],
})
export class TeacherSchedulePageComponent implements OnInit {
    viewDate: Date;
    view: CalendarView = CalendarView.Month;
    CalendarView = CalendarView;
    locale: string = 'es';

    constructor() {
        this.viewDate = new Date();
    }

    ngOnInit() {
        return;
    }

    setView(view: CalendarView) {
        this.view = view;
    }

    getMonth(): String {
        return `${
            months[this.viewDate.getMonth()]
        }, ${this.viewDate.getFullYear()}`;
    }
}
