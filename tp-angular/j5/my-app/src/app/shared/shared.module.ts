import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TogglePanelComponent } from './components/toggle-panel/toggle-panel.component';
import { AppConfigService } from './configs/app-config.service';


//fonction d'initialiation supplementaire de l'application angular
//ici pour charger la configuration de assets/app-config.json
//NB: APP_INITIALIZER in providers : [ ...] below
const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
      return appConfig.loadAppConfig();
  }
};

@NgModule({
  imports: [
    CommonModule , FormsModule , HttpClientModule , 
  ],
  exports: [
    TogglePanelComponent
  ],
  declarations: [
    TogglePanelComponent
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    }
  ],
})
export class SharedModule { }
