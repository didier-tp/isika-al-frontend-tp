import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login'
import { LoginResponse } from '../../models/loginResponse';
import { SessionService } from '../../services/session.service';
import { messageFromError } from '../../../shared/utils/util';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'core-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //public login : Login = new Login();
  public login : Login = new Login("admin1","pwdadmin1","admin");
  public message :string ="" ;
  public authenticated : boolean = false;

  public onLogin(){
     this.message = "donnees saisies = " + JSON.stringify(this.login);
     this.authenticated = false ; //before try 
     this._loginService.postLogin$(this.login)
     .subscribe({
       next : (response :LoginResponse) => { this.traiterReponseLogin(response); } ,
       error : (err) => { console.log("error:"+err);
                          this.message= messageFromError(err);
                          this._sessionService.user.username = "?";
                          this._sessionService.user.roles = "?";
                          this._sessionService.user.authenticated = false;
                        }
       });
  }

  private traiterReponseLogin(loginResponse :LoginResponse){
    this.message = loginResponse.message;//améliorable !!!
    this.authenticated = loginResponse.status;
    console.log("loginResponse="+JSON.stringify(loginResponse));
    this._sessionService.user.authenticated =  this.authenticated;
    if(this.authenticated){
      this._sessionService.user.username = loginResponse.username;
      this._sessionService.user.roles = loginResponse.roles;
    }else{
      this._sessionService.user.username = "?";
      this._sessionService.user.roles = "?";
    }
  }

  constructor(private _loginService :LoginService,
              private _sessionService : SessionService) { }

  ngOnInit(): void {
  }

}
