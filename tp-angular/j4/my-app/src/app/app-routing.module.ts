import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaWithServiceComponent } from './basic/tva-with-service/tva-with-service.component';
import { TvaComponent } from './basic/tva/tva.component';
import { GardienAuth } from './common/gard/gardiens';
import { ConversionComponent } from './conversion/conversion.component';
import { DemoComponent } from './demo/demo.component';
import { DeviseComponent } from './devise/devise.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'ngr-welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: 'ngr-login', component: LoginComponent },
  { path: 'ngr-basic', component: BasicComponent,
  children: [
   { path: 'tva', component: TvaComponent },
   { path: 'tvaWithService', component: TvaWithServiceComponent },
   { path: 'calculatrice/:mode', component: CalculatriceComponent },
   { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
   ]
},
  { path: 'ngr-devise', component: DeviseComponent },
  { path: 'ngr-admin-devise', component: AdminDeviseComponent , canActivate : [GardienAuth] },
  { path: 'ngr-conversion', component: ConversionComponent },
  { path: 'ngr-demo', component: DemoComponent },
  { path : "ngr-not-authorized" , component : NotAuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
