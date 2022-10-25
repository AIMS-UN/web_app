import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './graphql.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DummyComponent } from './components/dummy/dummy.component';
import { HomeComponent } from './components/home-page/home.component';
import { LoginPageComponent } from './components/login-page/loginPage.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RegisterPageComponent } from './components/register-page/registerPage.component';
import { ReportComponent } from './components/report-page/report.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';
import { StudentGradingPageComponent } from './components/student-grading-page/student-grading-page.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { EnrollmentPageComponent } from './components/enrollment-page/enrollment-page.component';
import { SubjectSearchPageComponent } from './components/subject-search-page/subject-search-page.component';
import { TeacherGradingPageComponent } from './components/teacher-grading-page/teacher-grading-page.component';

registerLocaleData(localeEs);

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegisterPageComponent,
        DummyComponent,
        HomeComponent,
        ReportComponent,
        StudentGradingPageComponent,
        ProfilePageComponent,
        SchedulePageComponent,
        SubjectSearchPageComponent,
        EnrollmentPageComponent,
        TeacherGradingPageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        GraphQLModule,
        HttpClientModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
