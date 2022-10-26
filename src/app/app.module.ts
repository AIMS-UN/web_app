import { NgModule } from '@angular/core';
import { SharedModule } from './app.shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DummyComponent } from './components/dummy/dummy.component';
import { HomeComponent } from './components/home-page/home.component';

import { AcademicInfoModule } from './modules/academic-info/academic-info.module';
import { AuthModule } from './modules/auth/auth.module';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { TeachersModule } from './modules/teachers/teachers.module';

@NgModule({
    declarations: [AppComponent, DummyComponent, HomeComponent],
    imports: [
        SharedModule,
        AuthModule,
        SubjectsModule,
        TeachersModule,
        AcademicInfoModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
