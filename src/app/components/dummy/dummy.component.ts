import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/*import {
    MyAccountGQL,
    MyAccountQuery,
} from 'src/app/services/graphql/generated/accounts.gql.service';*/
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
    //account: Observable<MyAccountQuery['myAccount']>;
    //accountJson: string;
    ping: Observable<PingQuery['ping']>;
    pingJson: string;

    constructor(/*myAccountGQL: MyAccountGQL*/ pingGQL: PingGQL) {
        /*
        this.account = myAccountGQL.watch().valueChanges.pipe(
            map((result) => {
                console.log(result);
                return result.data.myAccount;
            })
        );
        this.accountJson = JSON.stringify(this.account);
        */

        this.ping = pingGQL.watch().valueChanges.pipe(
            map((result) => {
                console.log(result.data.ping);
                return result.data.ping;
            })
        );
        this.pingJson = JSON.stringify(this.ping);
    }

    ngOnInit() {
        return;
    }
}
