import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyAccountGQL } from 'src/app/services/graphql/generated/accounts.gql.service';
import { LoadingOverlayService } from 'src/app/services/loading.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    username!: String;

    constructor(
        private accountGQL: MyAccountGQL,
        private _snackBar: MatSnackBar,
        private loading: LoadingOverlayService
    ) {}

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
            this.username = await firstValueFrom(
                this.accountGQL.watch().valueChanges.pipe(
                    map((result) => {
                        return result.data.myAccount.username;
                    })
                )
            );
        } catch (err) {
            this.openSnackBar(`ERROR: ${err}`);
        } finally {
            this.loading.hide();
        }
    }
}
