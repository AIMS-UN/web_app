import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    GetCareerByIdGQL,
    GetCareerByIdQuery,
} from 'src/app/services/graphql/generated/college.gql.service';
import {
    GetMyProfileGQL,
    GetMyProfileQuery,
} from 'src/app/services/graphql/generated/profile.gql.service';
import { LoadingOverlayService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    profile: GetMyProfileQuery['getMyProfile'];
    career: GetCareerByIdQuery['getCareerById'];

    constructor(
        private profileGQL: GetMyProfileGQL,
        private careerGQL: GetCareerByIdGQL,
        private _snackBar: MatSnackBar,
        private loading: LoadingOverlayService
    ) {
        this.profile = {
            doc_id: 0,
            user_id: '',
            name: '',
            lastname: '',
            email: '',
            birthdate: '',
            phone_number: '',
            address: '',
            historials: [
                {
                    coursed_credits: 0,
                    approved_credits: 0,
                    reprobed_credits: 0,
                    GPA: 0,
                    career: 0,
                },
            ],
        };

        this.career = {
            careerId: 0,
            careerName: '',
            credits: '',
            department: {
                departmentId: 0,
                departmentName: '',
                faculty: {
                    facultyId: 0,
                    facultyName: '',
                },
            },
        };
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, undefined, {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 2000,
        });
    }

    async ngOnInit() {
        this.loading.show();
        try {
            await this.loadProfile();
            await this.loadCareer();
        } catch (err) {
            this.openSnackBar(`ERROR: ${err}`);
        } finally {
            this.loading.hide();
        }
    }

    private async loadProfile() {
        try {
            this.profile = await firstValueFrom(
                this.profileGQL.watch().valueChanges.pipe(
                    map((result) => {
                        return result.data.getMyProfile;
                    })
                )
            );
        } catch (err) {
            throw 'PROFILE_NOT_LOADED';
        }
    }

    private async loadCareer() {
        try {
            this.career = await firstValueFrom(
                this.careerGQL
                    .watch({ careerId: this.profile.historials[0].career })
                    .valueChanges.pipe(
                        map((result) => {
                            return result.data.getCareerById;
                        })
                    )
            );
        } catch (err) {
            throw 'CAREER_NOT_LOADED';
        }
    }
}
