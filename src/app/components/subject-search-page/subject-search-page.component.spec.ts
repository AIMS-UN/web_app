/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubjectSearchPageComponent } from './subject-search-page.component';

describe('SubjectSearchPageComponent', () => {
    let component: SubjectSearchPageComponent;
    let fixture: ComponentFixture<SubjectSearchPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubjectSearchPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SubjectSearchPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
