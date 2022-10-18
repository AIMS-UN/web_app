import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './graphql.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';

import { ExampleComponent } from './components/example/example.component';
import { Example2Component } from './components/example2/example2.component';
import { LoginPageComponent } from './components/loginPage/loginPage.component';
import { RegisterPageComponent } from './components/registerPage/registerPage.component';

@NgModule({
    declarations: [
        AppComponent,
        ExampleComponent,
        Example2Component,
        LoginPageComponent,
        RegisterPageComponent,
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
