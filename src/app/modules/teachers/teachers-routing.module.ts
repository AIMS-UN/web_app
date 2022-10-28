import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';

import { TeacherGradingPageComponent } from './components/teacher-grading-page/teacher-grading-page.component';
import { TeacherSchedulePageComponent } from './components/teacher-schedule-page/teacher-schedule-page.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'teacherGrading',
                component: TeacherGradingPageComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'teacherSchedule',
                component: TeacherSchedulePageComponent,
                canActivate: [AuthGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeachersRoutingModule {}
