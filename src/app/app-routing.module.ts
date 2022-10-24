import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/loginPage/loginPage.component';
import { RegisterPageComponent } from './components/registerPage/registerPage.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'report', component: ReportComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
