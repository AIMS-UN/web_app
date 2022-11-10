import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingOverlayService } from 'src/app/services/loading.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './loginPage.component.html',
    styleUrls: ['./loginPage.component.css'],
})
export class LoginPageComponent implements OnInit {
    firstFormGroup!: FormGroup;

    constructor(
        private authService: AuthService,
        private _formBuilder: FormBuilder,
        private snackBar: SnackbarService,
        private loading: LoadingOverlayService
    ) {
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', Validators.required],
            passCtrl: ['', [Validators.required, Validators.minLength(5)]],
        });
    }

    ngOnInit() {
        this.authService.autoLogin();
    }

    async loginUser() {
        if (this.firstFormGroup.invalid) return;

        this.loading.show();
        let value = this.firstFormGroup.value;

        try {
            await this.authService.login(value.nameCtrl!, value.passCtrl!);
        } catch (err) {
            this.snackBar.openSnackBar(`ERROR: ${err}`);
        } finally {
            this.loading.hide();
        }
    }
}
