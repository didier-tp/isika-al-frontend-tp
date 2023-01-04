import { Injectable } from '@angular/core';
import { Devise } from '../models/devise';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';


export interface ConvertResult {
  source :string; //ex: "EUR",
  target :string; //ex: "USD",
  amount :number; //ex: 200.0
  result :number; //ex: 217.3913
};


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //private _apiBaseUrl ="http://localhost:8282/devise-api"; 
  _apiBaseUrl ="/devise-api"; //with ng serve --proxy-config proxy.conf.json
  publicBaseUrl = `${this._apiBaseUrl}/public`;
  privateBaseUrl = `${this._apiBaseUrl}/private/role_admin`;

  constructor(private _http : HttpClient){}

  public getAllDevises$() : Observable<Devise[]>{
    const url = `${this.publicBaseUrl}/devise`;
    console.log( "url = " + url);
    return this._http.get<Devise[]>(url);
  }

  public convertir$(montant: number,
                   codeDeviseSrc : string, 
                   codeDeviseTarget : string
                   ) : Observable<number> {

      const params = new HttpParams()
	                    .set('amount', montant.toString())
                      .set('source', codeDeviseSrc)
                      .set('target', codeDeviseTarget);
      let url = this._apiBaseUrl 
             + `/public/convert?${params.toString()}`;
      //console.log( "url = " + url);
      return this._http.get<ConvertResult>(url)
            .pipe(
              map( (res:ConvertResult) => res.result)
            );
  }

  public deleteDeviseServerSide$(deviseCode : string):Observable<any>{
    const url = `${this.privateBaseUrl}/devise/${deviseCode}`;
    console.log("deleteUrl=" + url );
    return this._http.delete<any>(url);
  }

  postDevise$(d :Devise): Observable<Devise>{
    const url = `${this.privateBaseUrl}/devise`;
    return this._http.post<Devise>(url,d /*input envoyé au serveur*/);
    //this.http.post<TypeReponseRetourneParServeur>(url_web_service , donnee_a_envoyer)
  }

  putDevise$(d :Devise): Observable<Devise>{
    const url = `${this.privateBaseUrl}/devise`;
    return this._http.put<Devise>(url,d /*input envoyé au serveur*/);
    //this.http.put<TypeReponseRetourneParServeur>(url_web_service , donnee_a_envoyer)
  }

}
