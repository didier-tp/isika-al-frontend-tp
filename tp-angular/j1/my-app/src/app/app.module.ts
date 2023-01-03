import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SeuilComponent } from './demo/seuil/seuil.component';
import { DemoComponent } from './demo/demo.component';
import { ZzComponent } from './demo/zz/zz.component';
import { RegletteComponent } from './demo/reglette/reglette.component';
import { ListProdComponent } from './demo/list-prod/list-prod.component';
//import { TabsModule } from 'ngx-bootstrap/tabs';
import { DeviseComponent } from './devise/devise.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    LoginComponent,
    WelcomeComponent,
    DemoComponent,
    SeuilComponent,
    ZzComponent,
    RegletteComponent,
    ListProdComponent,
    DeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /*TabsModule.forRoot(),*/
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
