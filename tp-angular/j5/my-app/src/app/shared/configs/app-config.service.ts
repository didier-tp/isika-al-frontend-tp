import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IAppConfig {
  [key:string]:any
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfigUrl = "/assets/app-config.json";
  //or "https://my-api.com/path-to-endpoint"

  private appConfig : IAppConfig = {};
  private appConfigBs$ = new  BehaviorSubject<IAppConfig> (this.appConfig);


    constructor (private injector: Injector) { }

    loadAppConfig() {
        let http = this.injector.get(HttpClient);

        return http.get<IAppConfig>(this.appConfigUrl)
        .subscribe(data => {
            this.appConfig = data;
            console.log("in AppConfigService , loaded appConfig="+JSON.stringify(this.appConfig));
            //NB: take a little time (asynchrone)
            this.appConfigBs$.next(this.appConfig);
        })
    }

    get config() {
        return this.appConfig;
    }


    get configBs$() {
     return this.appConfigBs$;
    }

}
