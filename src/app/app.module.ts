import { NgModule } from '@angular/core';
import { SharedModule } from './app.shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DummyComponent } from './components/dummy/dummy.component';
import { HomeComponent } from './components/home-page/home.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcademicInfoModule } from './modules/academic-info/academic-info.module';
import { AuthModule } from './modules/auth/auth.module';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { TeachersModule } from './modules/teachers/teachers.module';

import { CookieService } from 'ngx-cookie-service';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DummyComponent,
        DashboardComponent,
        LoadingScreenComponent,
    ],
    imports: [
        SharedModule,
        AuthModule,
        SubjectsModule,
        TeachersModule,
        AcademicInfoModule,
        AppRoutingModule,
    ],
    providers: [CookieService],
    bootstrap: [AppComponent],
})
export class AppModule {}
