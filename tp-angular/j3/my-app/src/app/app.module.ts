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
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DeviseComponent } from './devise/devise.component';
import { TogglePanelComponent } from './toggle-panel/toggle-panel.component';
import { ConversionComponent } from './conversion/conversion.component';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';

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
    DeviseComponent,
    TogglePanelComponent,
    ConversionComponent,
    AdminDeviseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule.forRoot(),
    HttpClientModule
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
