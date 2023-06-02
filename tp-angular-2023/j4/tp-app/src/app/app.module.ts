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
import { WelcomeComponent } from './welcome/welcome.component';
import { SeuilComponent } from './demo/seuil/seuil.component';
import { DemoComponent } from './demo/demo.component';
import { ZzComponent } from './demo/zz/zz.component';
import { RegletteComponent } from './demo/reglette/reglette.component';
import { ListProdComponent } from './demo/list-prod/list-prod.component';
import { DeviseComponent } from './devise/devise.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyTogglePanelComponent } from './common/component/my-toggle-panel/my-toggle-panel.component';
import { UserComponent } from './user/user.component';
import { LogInOutComponent } from './log-in-out/log-in-out.component';
import { ConversionComponent } from './conversion/conversion.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';
import { StandaloneLoginComponent } from './standalone-login/standalone-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    WelcomeComponent,
    DemoComponent,
    SeuilComponent,
    ZzComponent,
    RegletteComponent,
    ListProdComponent,
    DeviseComponent,
    MyTogglePanelComponent,
    UserComponent,
    LogInOutComponent,
    ConversionComponent,
    StandaloneLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
