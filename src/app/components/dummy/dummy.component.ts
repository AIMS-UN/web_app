import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    PingGQL,
    PingQuery,
} from 'src/app/services/graphql/generated/ping.gql.service';

@Component({
    selector: 'app-dummy',
    templateUrl: './dummy.component.html',
    styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit {
    ping!: Observable<PingQuery['ping']>;
    pingJson!: string;

    constructor(private pingGQL: PingGQL) {}

    ngOnInit() {
        this.ping = this.pingGQL.watch().valueChanges.pipe(
            map((result) => {
                console.log(result.data.ping);
                console.log(result.loading);
                this.pingJson = JSON.stringify(result);
                return result.data.ping;
            })
        );
    }
}
