import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DemoComponent } from './demo/demo.component';
import { DeviseComponent } from './devise/devise.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-login', component: LoginComponent },
  { path: 'ngr-basic', component: BasicComponent },
  { path: 'ngr-devise', component: DeviseComponent },
  { path: 'ngr-demo', component: DemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
