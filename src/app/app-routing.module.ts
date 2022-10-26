import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DummyComponent } from './components/dummy/dummy.component';
import { HomeComponent } from './components/home-page/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'dummy', component: DummyComponent },
    { path: '**', redirectTo: 'dummy' }, //TODO: PageNotFoundComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
