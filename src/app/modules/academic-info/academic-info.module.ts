import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/app.shared.module';

import { AcademicInfoRoutingModule } from './academic-info-routing.module';

import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ReportComponent } from './components/report-page/report.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { StudentGradingPageComponent } from './components/student-grading-page/student-grading-page.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
registerLocaleData(localeFr);

@NgModule({
    declarations: [
        ProfilePageComponent,
        ReportComponent,
        SchedulePageComponent,
        StudentGradingPageComponent,
    ],
    imports: [
        SharedModule,
        AcademicInfoRoutingModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
    ],
})
export class AcademicInfoModule {}
