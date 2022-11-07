import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingOverlayService } from 'src/app/services/loading.service';

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
        private _snackBar: MatSnackBar,
        private loading: LoadingOverlayService
    ) {
        this.firstFormGroup = this._formBuilder.group({
            nameCtrl: ['', Validators.required],
            passCtrl: ['', [Validators.required, Validators.minLength(5)]],
        });
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, undefined, {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 2000,
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
            this.openSnackBar(`ERROR: ${err}`);
        } finally {
            this.loading.hide();
        }
    }
}
