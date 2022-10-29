import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    GetSubjectByCodeGQL,
    GetSubjectByCodeQuery,
} from 'src/app/services/graphql/generated/subjects.gql.service';

@Component({
    selector: 'app-subject-search-page',
    templateUrl: './subject-search-page.component.html',
    styleUrls: ['./subject-search-page.component.css'],
})
export class SubjectSearchPageComponent implements OnInit {
    searchState: string = '';
    searchCode: string = '';

    subjects$!: Observable<GetSubjectByCodeQuery['getSubjectByCode']>;
    subjects: any;

    foundResult = false;

    constructor(private subjectGQL: GetSubjectByCodeGQL) {}

    ngOnInit() {
        return;
    }

    getSubjectByCode() {
        console.log(this.searchCode);

        this.subjects$ = this.subjectGQL
            .watch({ subjectCode: this.searchCode })
            .valueChanges.pipe(
                map((result) => {
                    return result.data.getSubjectByCode;
                })
            );

        this.subjects$.subscribe((result) => {
            this.subjects = result;
            this.foundResult = true;
        });
    }
}
