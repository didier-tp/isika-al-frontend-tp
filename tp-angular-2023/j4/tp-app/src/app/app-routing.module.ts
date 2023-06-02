import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DemoComponent } from './demo/demo.component';
import { DeviseComponent } from './devise/devise.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { LogInOutComponent } from './log-in-out/log-in-out.component';
import { ConversionComponent } from './conversion/conversion.component';
import { StandaloneLoginComponent } from './standalone-login/standalone-login.component';

const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-user', component: UserComponent },
  { path: 'ngr-basic', component: BasicComponent },
  { path: 'ngr-devise', component: DeviseComponent },
  { path: 'ngr-demo', component: DemoComponent },
  { path: 'ngr-logInOut', component: LogInOutComponent },
  { path: 'ngr-standalone-login', component: StandaloneLoginComponent },
  { path: 'ngr-conversion', component: ConversionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
