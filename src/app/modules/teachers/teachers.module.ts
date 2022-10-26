import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/app.shared.module';

import { TeachersRoutingModule } from './teachers-routing.module';

import { TeacherGradingPageComponent } from './components/teacher-grading-page/teacher-grading-page.component';

@NgModule({
    declarations: [TeacherGradingPageComponent],
    imports: [SharedModule, TeachersRoutingModule],
})
export class TeachersModule {}
