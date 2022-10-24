import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './graphql.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';

import { DummyComponent } from './components/dummy/dummy.component';
import { HomeComponent } from './components/home-page/home.component';
import { LoginPageComponent } from './components/login-page/loginPage.component';
import { RegisterPageComponent } from './components/register-page/registerPage.component';
import { ReportComponent } from './components/report-page/report.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        RegisterPageComponent,
        DummyComponent,
        HomeComponent,
        ReportComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        GraphQLModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
