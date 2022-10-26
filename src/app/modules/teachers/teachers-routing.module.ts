import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherGradingPageComponent } from './components/teacher-grading-page/teacher-grading-page.component';

const routes: Routes = [
    { path: 'teacherGrading', component: TeacherGradingPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeachersRoutingModule {}
