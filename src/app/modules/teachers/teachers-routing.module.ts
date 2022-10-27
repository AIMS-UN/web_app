import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherGradingPageComponent } from './components/teacher-grading-page/teacher-grading-page.component';
import { TeacherSchedulePageComponent } from './components/teacher-schedule-page/teacher-schedule-page.component';

const routes: Routes = [
    { path: 'teacherGrading', component: TeacherGradingPageComponent },
    { path: 'teacherSchedule', component: TeacherSchedulePageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeachersRoutingModule {}
