import { Component, OnInit } from '@angular/core';
import { AppConfigService, IAppConfig } from '../../../shared/configs/app-config.service';

@Component({
  selector: 'core-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  message = "welcome";

  constructor(private appConfigService : AppConfigService) { 
  }

  ngOnInit(): void {
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
