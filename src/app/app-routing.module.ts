import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { HomeComponent } from './components/home-page/home.component';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'dashboard',
                component: HomeComponent,
                canActivate: [AuthGuard],
            },
        ],
    },

    { path: 'dummy', component: DummyComponent /*canActivate: [AuthGuard]*/ },
    /*{ path: '**', redirectTo: 'dummy' }, //TODO: PageNotFoundComponent*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
