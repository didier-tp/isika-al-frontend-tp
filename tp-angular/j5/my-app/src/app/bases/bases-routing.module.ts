import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { CalculatriceComponent } from './components/basic/calculatrice/calculatrice.component';
import { TvaWithServiceComponent } from './components/basic/tva-with-service/tva-with-service.component';
import { TvaComponent } from './components/basic/tva/tva.component';
import { DemoComponent } from './components/demo/demo.component';

const basesLazyRoutes: Routes = [
{ path: 'demo', component: DemoComponent } ,
{ path: 'basic', component: BasicComponent,
  children: [
   { path: 'tva', component: TvaComponent },
   { path: 'tvaWithService', component: TvaWithServiceComponent },
   { path: 'calculatrice/:mode', component: CalculatriceComponent },
   { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
   ]
},
{ path: '', redirectTo: 'basic', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(basesLazyRoutes)],
  exports: [RouterModule]
})
export class BasesRoutingModule { }
