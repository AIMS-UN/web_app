import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { RegisterGQL } from 'src/app/services/graphql/generated/accounts.gql.service';

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
        private _formBuilder: FormBuilder,
        private dateAdapter: DateAdapter<Date>
    ) {
        this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }

    ngOnInit() {
        return;
    }

    registerUser() {
        let username = this.firstFormGroup.value.nameCtrl;
        let password = this.firstFormGroup.value.passCtrl;
        let role = this.firstFormGroup.value.roleCtrl;

        if (username == null) return;
        if (password == null) return;
        if (role == null || (role !== 'student' && role !== 'teacher')) return;

        console.log(username, password, role);

        this.registerGQL
            .mutate({
                username,
                password,
                role,
            })
            .subscribe((result) => {
                console.log(result);
            });
    }
}
