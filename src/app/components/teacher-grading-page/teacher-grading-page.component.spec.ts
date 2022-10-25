/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeacherGradingPageComponent } from './teacher-grading-page.component';

describe('TeacherGradingPageComponent', () => {
    let component: TeacherGradingPageComponent;
    let fixture: ComponentFixture<TeacherGradingPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TeacherGradingPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TeacherGradingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
