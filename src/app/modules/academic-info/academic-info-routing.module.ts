import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ReportComponent } from './components/report-page/report.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { StudentGradingPageComponent } from './components/student-grading-page/student-grading-page.component';

const routes: Routes = [
    { path: 'report', component: ReportComponent },
    { path: 'studentGrading', component: StudentGradingPageComponent },
    { path: 'profile', component: ProfilePageComponent },
    { path: 'schedule', component: SchedulePageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AcademicInfoRoutingModule {}
