import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnrollmentPageComponent } from './components/enrollment-page/enrollment-page.component';
import { SubjectSearchPageComponent } from './components/subject-search-page/subject-search-page.component';

const routes: Routes = [
    { path: 'subject', component: SubjectSearchPageComponent },
    { path: 'enrollment', component: EnrollmentPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SubjectsRoutingModule {}
