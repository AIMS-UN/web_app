import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { HomeComponent } from './components/home-page/home.component';

const routes: Routes = [
    { path: 'dummy', component: DummyComponent /*canActivate: [AuthGuard]*/ },
    {
        path: '',
        component: DashboardComponent,
        children: [{ path: '', component: HomeComponent, pathMatch: 'full' }],
        //canActivate: [AuthGuard],
    },
    { path: '**', redirectTo: 'dummy' }, //TODO: PageNotFoundComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
