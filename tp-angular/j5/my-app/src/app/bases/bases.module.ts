import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './components/basic/basic.component';
import { CalculatriceComponent } from './components/basic/calculatrice/calculatrice.component';
import { TvaWithServiceComponent } from './components/basic/tva-with-service/tva-with-service.component';
import { TvaComponent } from './components/basic/tva/tva.component';
import { DemoComponent } from './components/demo/demo.component';
import { ListProdComponent } from './components/demo/list-prod/list-prod.component';
import { RegletteComponent } from './components/demo/reglette/reglette.component';
import { SeuilComponent } from './components/demo/seuil/seuil.component';
import { ZzComponent } from './components/demo/zz/zz.component';
import { BasesRoutingModule } from './bases-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { C3Component } from './components/c3/c3.component';

@NgModule({
  declarations: [
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    DemoComponent,
    SeuilComponent,
    ZzComponent,
    RegletteComponent,
    ListProdComponent,
    TvaWithServiceComponent,
    C3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    BasesRoutingModule,
    SharedModule
  ],
  
})
export class BasesModule { }
