import { Component, OnInit } from '@angular/core';
import { AppConfigService, IAppConfig } from '../common/service/app-config.service';
import { SessionService } from '../common/service/session.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  message = "welcome";
  loginMessage="";

  constructor(private appConfigService : AppConfigService,
              public sessionService : SessionService) { 
  }

  ngOnInit(): void {
    this.loginMessage="username="+this.sessionService.user.username;
    /*
    setTimeout(()=>{
        this.message  = this.appConfigService.config["welcomeMessage"];
    }, 50);
    */

    this.appConfigService.configBs$.subscribe(
      (config:IAppConfig)=>{ this.message  = config["welcomeMessage"];}
    );
  }

}
