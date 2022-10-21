import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    MyAccountGQL,
    MyAccountQuery,
} from 'src/app/services/graphql/generated/accounts.gql.service';

@Component({
    selector: 'app-dummy',
    templateUrl: './dummy.component.html',
    styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit {
    myAccount: Observable<MyAccountQuery['myAccount']>;
    constructor(myAccountGQL: MyAccountGQL) {
        this.myAccount = myAccountGQL
            .watch()
            .valueChanges.pipe(map((result) => result.data.myAccount));
    }

    ngOnInit() {
        return;
    }
}
