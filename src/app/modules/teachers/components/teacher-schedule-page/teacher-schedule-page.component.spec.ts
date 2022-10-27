/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSchedulePageComponent } from './teacher-schedule-page.component';

describe('TeacherSchedulePageComponent', () => {
    let component: TeacherSchedulePageComponent;
    let fixture: ComponentFixture<TeacherSchedulePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeacherSchedulePageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeacherSchedulePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
