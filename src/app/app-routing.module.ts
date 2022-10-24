import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-page/home.component';
import { LoginPageComponent } from './components/login-page/loginPage.component';
import { RegisterPageComponent } from './components/register-page/registerPage.component';
import { ReportComponent } from './components/report-page/report.component';

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
