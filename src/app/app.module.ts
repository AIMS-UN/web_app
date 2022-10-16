import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppMaterialModule } from './app.material.module';
import { ExampleComponent } from './components/example/example.component';
import { Example2Component } from './components/example2/example2.component';

@NgModule({
    declarations: [AppComponent, ExampleComponent, Example2Component],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppMaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
