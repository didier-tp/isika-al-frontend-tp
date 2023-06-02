import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandaloneLoginRequest, StandaloneLoginResponse } from '../data/standalone_login';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StandaloneLoginService {

  private _apiBaseUrl ="/tp/standalone-login-api";
  constructor(private _http : HttpClient) { }

  public postLogin$(login: StandaloneLoginRequest): Observable<StandaloneLoginResponse>{
    let url = this._apiBaseUrl +"/public/auth";
    sessionStorage.setItem('access_token',"");//reinit before try get token
    return this._http.post<StandaloneLoginResponse>(url,login )
           .pipe(
               tap((loginResponse)=>{ this.sauvegarderJeton(loginResponse);})
           );
 }

 private sauvegarderJeton(loginResponse:StandaloneLoginResponse){
      if(loginResponse.status){
        sessionStorage.setItem('access_token',loginResponse.token?loginResponse.token:"");
        //ou autre façon de mémoriser le jeton
      }
      else{
       sessionStorage.setItem('access_token',"");
      }
 }
}
