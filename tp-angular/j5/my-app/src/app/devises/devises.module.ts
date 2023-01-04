import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminDeviseComponent } from './components/admin-devise/admin-devise.component';
import { ConversionComponent } from './components/conversion/conversion.component';
import { DeviseComponent } from './components/devise/devise.component';
import { DevisesRoutingModule } from './devises-routing.module';

@NgModule({
  declarations: [
    DeviseComponent,
    ConversionComponent,
    AdminDeviseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DevisesRoutingModule
  ]
})
export class DevisesModule { }
