import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardienAuth } from '../core/gards/gardiens';
import { AdminDeviseComponent } from './components/admin-devise/admin-devise.component';
import { ConversionComponent } from './components/conversion/conversion.component';
import { DeviseComponent } from './components/devise/devise.component';


const devisesLazyRoutes: Routes = [
  { path: 'devise', component: DeviseComponent },
  { path: 'admin-devise', component: AdminDeviseComponent , canActivate : [GardienAuth] },
  { path: 'conversion', component: ConversionComponent },
  { path: '', redirectTo: 'conversion', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(devisesLazyRoutes)],
  exports: [RouterModule]
})
export class DevisesRoutingModule { }
