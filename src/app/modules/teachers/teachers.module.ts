import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/app.shared.module';

import { TeachersRoutingModule } from './teachers-routing.module';

import { TeacherGradingPageComponent } from './components/teacher-grading-page/teacher-grading-page.component';
import { TeacherSchedulePageComponent } from './components/teacher-schedule-page/teacher-schedule-page.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
registerLocaleData(localeEs);

@NgModule({
    declarations: [TeacherGradingPageComponent, TeacherSchedulePageComponent],
    imports: [
        SharedModule,
        TeachersRoutingModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
    ],
})
export class TeachersModule {}
