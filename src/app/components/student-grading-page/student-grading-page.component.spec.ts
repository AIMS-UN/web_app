/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentGradingPageComponent } from './student-grading-page.component';

describe('StudentGradingPageComponent', () => {
    let component: StudentGradingPageComponent;
    let fixture: ComponentFixture<StudentGradingPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StudentGradingPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StudentGradingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
