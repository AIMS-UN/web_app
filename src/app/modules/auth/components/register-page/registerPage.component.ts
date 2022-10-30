import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { RegisterGQL } from 'src/app/services/graphql/generated/accounts.gql.service';
import { CreateProfileGQL } from 'src/app/services/graphql/generated/profile.gql.service';
import * as Types from 'src/app/services/graphql/generated/types';

@Component({
    selector: 'app-register-page',
    templateUrl: './registerPage.component.html',
    styleUrls: ['./registerPage.component.css'],
})
export class RegisterPageComponent implements OnInit {
    firstFormGroup = this._formBuilder.group({
        nameCtrl: ['', Validators.required],
        passCtrl: ['', [Validators.required, Validators.minLength(5)]],
        roleCtrl: ['student', Validators.required],
    });

    secondFormGroup = this._formBuilder.group({
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

    thirdFormGroup = this._formBuilder.group({
        termsCtrl: ['', Validators.requiredTrue],
    });

    constructor(
        private registerGQL: RegisterGQL,
        private createProfileGQL: CreateProfileGQL,
        private _formBuilder: FormBuilder,
        private dateAdapter: DateAdapter<Date>
    ) {
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }

    ngOnInit() {
        return;
    }

    register() {
        this.registerUser();
        this.registerProfile();
    }

    registerUser() {
        let username = this.firstFormGroup.value.nameCtrl;
        let password = this.firstFormGroup.value.passCtrl;
        let role = this.firstFormGroup.value.roleCtrl;

        if (username == null) return;
        if (password == null) return;
        if (role == null || (role !== 'student' && role !== 'teacher')) return;

        this.registerGQL
            .mutate({
                username: username,
                password: password,
                role: role,
            })
            .subscribe((result) => {
                console.log(result);
            });
    }

    registerProfile() {
        let firstnameCtrl = this.secondFormGroup.value.firstnameCtrl;
        let lastnameCtrl = this.secondFormGroup.value.lastnameCtrl;
        let emailCtrl = this.secondFormGroup.value.emailCtrl;
        let dateCtrl = this.secondFormGroup.value.dateCtrl;
        let phoneCtrl = this.secondFormGroup.value.phoneCtrl;
        let addressCtrl = this.secondFormGroup.value.addressCtrl;
        let careerCtrl = this.secondFormGroup.value.careerCtrl;

        if (firstnameCtrl == null) return;
        if (lastnameCtrl == null) return;
        if (emailCtrl == null) return;
        if (dateCtrl == null) return;
        if (careerCtrl == null) return;
        if (addressCtrl == null) return;
        if (phoneCtrl == null) return;

        let profileInput: Types.ProfileInput = {
            address: addressCtrl,
            birthdate: dateCtrl,
            email: emailCtrl,
            historials: [],
            lastname: lastnameCtrl,
            name: firstnameCtrl,
            phone_number: phoneCtrl,
        };

        this.createProfileGQL.mutate({ profileInput }).subscribe((result) => {
            console.log(result);
        });
    }
}
