import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/app.shared.module';

import { SubjectsRoutingModule } from './subjects-routing.module';

import { EnrollmentPageComponent } from './components/enrollment-page/enrollment-page.component';
import { SubjectSearchPageComponent } from './components/subject-search-page/subject-search-page.component';

@NgModule({
    declarations: [EnrollmentPageComponent, SubjectSearchPageComponent],
    imports: [SharedModule, SubjectsRoutingModule],
})
export class SubjectsModule {}
