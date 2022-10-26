import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    GetDataGQL,
    GetDataQuery,
    PingTeacherGQL,
    PingTeacherQuery,
} from 'src/app/services/graphql/generated/ping.gql.service';

@Component({
    selector: 'app-dummy',
    templateUrl: './dummy.component.html',
    styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit {
    data$!: Observable<GetDataQuery['getData']['name']>;
    dataJson!: string;

    pingTeacher$!: Observable<PingTeacherQuery['pingTeacher']>;

    constructor(
        private dataGQL: GetDataGQL,
        private teacherGQL: PingTeacherGQL
    ) {}

    ngOnInit() {
        this.data$ = this.dataGQL
            .watch({ msName: 'enrollments' })
            .valueChanges.pipe(
                map((result) => {
                    console.log(result.data.getData);
                    console.log(result.loading);
                    this.dataJson = JSON.stringify(result);
                    return result.data.getData.name;
                })
            );
    }

    doPing() {
        this.pingTeacher$ = this.teacherGQL.watch().valueChanges.pipe(
            map((result) => {
                console.log(result.data);
                return result.data.pingTeacher;
            })
        );
    }
}
