import { Component } from '@angular/core';
import { StandaloneLoginRequest, StandaloneLoginResponse } from '../common/data/standalone_login';
import { messageFromError } from '../common/util/util';
import { StandaloneLoginService } from '../common/service/standalone-login.service';
import { SessionService } from '../common/service/session.service';

@Component({
  selector: 'app-standalone-login',
  templateUrl: './standalone-login.component.html',
  styleUrls: ['./standalone-login.component.scss']
})
export class StandaloneLoginComponent {
  public login = new StandaloneLoginRequest("admin1","pwd1");
  public message :string ="" ;
  public authenticated : boolean = false;

  public onLogin(){
     this.message = "donnees saisies = " + JSON.stringify(this.login);
     this.authenticated = false ; //before try 
     this._loginService.postLogin$(this.login)
     .subscribe({
       next : (response :StandaloneLoginResponse) => { this.traiterReponseLogin(response); } ,
       error : (err:any) => { console.log("error:"+err);
                          this.message= messageFromError(err);
                          this._sessionService.userInSession.username = "?";
                          this._sessionService.userInSession.grantedScopes = [];
                          this._sessionService.userInSession.authenticated = false;
                        }
       });
  }

  private traiterReponseLogin(loginResponse :StandaloneLoginResponse){
    this.message = loginResponse.message;//améliorable !!!
    this.authenticated = loginResponse.status;
    console.log("loginResponse="+JSON.stringify(loginResponse));
    this._sessionService.userInSession.authenticated =  this.authenticated;
    if(this.authenticated){
      this._sessionService.userInSession.username = loginResponse.username;
      this._sessionService.userInSession.grantedScopes = loginResponse.scope.split(" ");
    }else{
      this._sessionService.userInSession.username = "?";
      this._sessionService.userInSession.grantedScopes = [];
    }
  }

  constructor(private _loginService :StandaloneLoginService,
              private _sessionService : SessionService) { }

  ngOnInit(): void {
  }
}
