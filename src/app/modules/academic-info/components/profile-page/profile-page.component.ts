import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    GetMyProfileGQL,
    GetMyProfileQuery,
    UpdateProfileGQL,
} from 'src/app/services/graphql/generated/profile.gql.service';
import { LoadingOverlayService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
    firstFormGroup!: FormGroup;
    editable: boolean = false;
    profile: GetMyProfileQuery['getMyProfile'];

    constructor(
        private profileGQL: GetMyProfileGQL,
        private updateProfileGQL: UpdateProfileGQL,
        private _snackBar: MatSnackBar,
        private loading: LoadingOverlayService,
        private _formBuilder: FormBuilder
    ) {
        this.profile = {
            user_id: '',
            doc_id: 0,
            name: '',
            lastname: '',
            email: '',
            birthdate: '',
            phone_number: '',
            address: '',
            historials: [
                {
                    career: 0,
                    coursed_credits: 0,
                    approved_credits: 0,
                    reprobed_credits: 0,
                    GPA: 0,
                },
            ],
        };

        this.firstFormGroup = this._formBuilder.group({
            docCtrl: ['', [Validators.required, Validators.min(0)]],
            nameCtrl: ['', Validators.required],
            lastnameCtrl: ['', Validators.required],
            emailCtrl: ['', [Validators.required, Validators.email]],
            birthdayCtrl: ['', Validators.required],
            phoneCtrl: [
                '',
                [
                    Validators.pattern('[0-9]*'),
                    Validators.maxLength(10),
                    Validators.minLength(10),
                ],
            ],
            addressCtrl: [''],
        });

        this.firstFormGroup.disable();
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
        } catch (err) {
            this.openSnackBar(`ERROR: ${err}`);
        } finally {
            this.loading.hide();
        }

        this.showFields();
    }

    async loadProfile() {
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

    showFields() {
        let date = formatDate(this.profile.birthdate, 'yyyy-MM-dd', 'fr-FR');

        this.firstFormGroup.setValue({
            docCtrl: this.profile.doc_id,
            nameCtrl: this.profile.name,
            lastnameCtrl: this.profile.lastname,
            emailCtrl: this.profile.email,
            birthdayCtrl: date,
            phoneCtrl: this.profile.phone_number,
            addressCtrl: this.profile.address,
        });
    }

    async toggleEdit() {
        if (this.firstFormGroup.invalid) return;

        this.editable = !this.editable;
        if (this.editable) {
            this.firstFormGroup.enable();
            return;
        }

        this.loading.show();
        try {
            await this.updateProfile();
        } catch (err) {
            this.openSnackBar(`ERROR: ${err}`);
        } finally {
            this.loading.hide();
        }
        this.firstFormGroup.disable();
    }

    async updateProfile() {
        try {
            let values = this.firstFormGroup.value;

            let profileInput = {
                doc_id: values.docCtrl,
                name: values.nameCtrl,
                lastname: values.lastnameCtrl,
                email: values.emailCtrl,
                birthdate: values.birthdayCtrl,
                phone_number: values.phoneCtrl,
                address: values.addressCtrl,
                historials: [
                    {
                        career: 0,
                        coursed_credits: 0,
                        approved_credits: 0,
                        reprobed_credits: 0,
                        GPA: 0,
                    },
                ],
            };

            await firstValueFrom(
                this.updateProfileGQL.mutate({ profileInput })
            );

            this.profile = { user_id: this.profile.user_id, ...profileInput };
        } catch (err) {
            throw 'PROFILE_NOT_UPDATED';
        }
    }
}
