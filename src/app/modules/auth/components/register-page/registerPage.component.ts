import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterGQL } from 'src/app/services/graphql/generated/accounts.gql.service';
import { CreateProfileGQL } from 'src/app/services/graphql/generated/profile.gql.service';
import * as Types from 'src/app/services/graphql/generated/types';
import { LoadingOverlayService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './registerPage.component.html',
    styleUrls: ['./registerPage.component.css'],
})
export class RegisterPageComponent implements OnInit {
    firstFormGroup!: FormGroup;
    secondFormGroup!: FormGroup;
    thirdFormGroup!: FormGroup;

    constructor(
        private registerGQL: RegisterGQL,
        private createProfileGQL: CreateProfileGQL,
        private _formBuilder: FormBuilder,
        private dateAdapter: DateAdapter<Date>,
        private authService: AuthService,
        private loading: LoadingOverlayService,
        private _snackBar: MatSnackBar
    ) {
        this.dateAdapter.setLocale('fr-FR');

        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', Validators.required],
            passCtrl: ['', [Validators.required, Validators.minLength(5)]],
            roleCtrl: ['student', Validators.required],
        });

        this.secondFormGroup = this._formBuilder.group({
            docCtrl: ['', [Validators.required, Validators.min(0)]],
            firstnameCtrl: ['', Validators.required],
            lastnameCtrl: ['', Validators.required],
            emailCtrl: ['', [Validators.required, Validators.email]],
            dateCtrl: ['', Validators.required],
            phoneCtrl: [
                '',
                [
                    Validators.pattern('[0-9]*'),
                    Validators.maxLength(10),
                    Validators.minLength(10),
                ],
            ],
            addressCtrl: [''],
            careerCtrl: ['', Validators.required],
        });

        this.thirdFormGroup = this._formBuilder.group({
            termsCtrl: ['', Validators.requiredTrue],
        });
    }

    ngOnInit() {
        return;
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, undefined, {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 2000,
        });
    }

    async register() {
        this.loading.show();

        try {
            await this.registerUser();
            await this.registerProfile();
            this.authService.setSession();
        } catch (err) {
            this.openSnackBar(`ERROR: ${err}`);
        } finally {
            this.loading.hide();
        }
    }

    async registerUser() {
        let value = this.firstFormGroup.value;

        try {
            await firstValueFrom(
                this.registerGQL.mutate({
                    username: value.nameCtrl!,
                    password: value.passCtrl!,
                    role: value.roleCtrl!,
                })
            );
        } catch (err) {
            throw 'USER_REGISTER_PROCESS_ERROR';
        }
    }

    async registerProfile() {
        let value = this.secondFormGroup.value;

        let profileInput: Types.ProfileInput = {
            address: value.addressCtrl!,
            doc_id: value.docCtrl!,
            birthdate: value.dateCtrl!,
            email: value.emailCtrl!,
            historials: [
                {
                    career: 1,
                    coursed_credits: 0,
                    approved_credits: 0,
                    reprobed_credits: 0,
                    GPA: 0,
                },
            ],
            lastname: value.lastnameCtrl!,
            name: value.firstnameCtrl!,
            phone_number: value.phoneCtrl!,
        };

        try {
            const result = await firstValueFrom(
                this.createProfileGQL.mutate({ profileInput })
            );
            console.log(result);
        } catch (err) {
            throw 'PROFILE_REGISTER_PROCESS_ERROR';
        }
    }
}
