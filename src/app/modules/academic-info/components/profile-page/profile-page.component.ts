import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    GetMyProfileGQL,
    GetMyProfileQuery,
} from 'src/app/services/graphql/generated/profile.gql.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
    editable: boolean = false;
    profile$!: Observable<GetMyProfileQuery['getMyProfile']>;
    profile: any;

    constructor(private profileGQL: GetMyProfileGQL) {}

    ngOnInit() {
        //TO-DO obtener datos en graphql
        this.profile$ = this.profileGQL.watch().valueChanges.pipe(
            map((result) => {
                return result.data.getMyProfile;
            })
        );

        this.profile$.subscribe((result) => {
            this.profile = result;
        });
    }

    toggleEdit(fields: HTMLInputElement[]): void {
        fields.forEach((field) => {
            field.disabled = !field.disabled;
        });
    }
}
