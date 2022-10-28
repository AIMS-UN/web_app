import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/app.shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/loginPage.component';
import { RegisterPageComponent } from './components/register-page/registerPage.component';

@NgModule({
    declarations: [LoginPageComponent, RegisterPageComponent],
    imports: [SharedModule, AuthRoutingModule],
    providers: [],
})
export class AuthModule {}
