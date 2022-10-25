import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
    MyAccountGQL,
    MyAccountQuery,
} from 'src/app/services/graphql/generated/accounts.gql.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    username!: Observable<MyAccountQuery['myAccount']['username']>;

    constructor(private accountGQL: MyAccountGQL) {}

    ngOnInit() {
        this.username = this.accountGQL.watch().valueChanges.pipe(
            map((result) => {
                return result.data.myAccount.username;
            }),
            startWith('[usuario]')
        );
    }
}
