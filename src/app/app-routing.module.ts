import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentPageComponent } from './components/enrollment-page/enrollment-page.component';
import { HomeComponent } from './components/home-page/home.component';
import { LoginPageComponent } from './components/login-page/loginPage.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RegisterPageComponent } from './components/register-page/registerPage.component';
import { ReportComponent } from './components/report-page/report.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { StudentGradingPageComponent } from './components/student-grading-page/student-grading-page.component';
import { SubjectSearchPageComponent } from './components/subject-search-page/subject-search-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'report', component: ReportComponent },
    { path: 'studentGrading', component: StudentGradingPageComponent },
    { path: 'profile', component: ProfilePageComponent },
    { path: 'schedule', component: SchedulePageComponent },
    { path: 'subject', component: SubjectSearchPageComponent },
    { path: 'enrollment', component: EnrollmentPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
