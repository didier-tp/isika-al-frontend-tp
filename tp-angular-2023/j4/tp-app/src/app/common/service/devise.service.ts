import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { filter, flatMap, map, mergeMap, toArray } from 'rxjs/operators';
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

  private _withoutSecurity = false; 

  public set withoutSecurity(value:boolean){
    this._withoutSecurity=value;
    this.publicOrPrivateBaseUrl=this._withoutSecurity?this.publicBaseUrl:this.privateBaseUrl;
  }

  public get  withoutSecurity():boolean{
    return this._withoutSecurity;
  }

  //_apiBaseUrl ="https://www.d-defrance.fr/tp/devise-api";
  //_apiBaseUrl ="http://localhost:8233/devise-api"

  _apiBaseUrl ="/tp/devise-api"; //with ng serve --proxy-config proxy.conf.json
  publicBaseUrl = `${this._apiBaseUrl}/public`;
  privateBaseUrl = `${this._apiBaseUrl}/private`;
  publicOrPrivateBaseUrl : string =this.privateBaseUrl; //with security by default

  constructor(private _http : HttpClient){}

  public getAllDevises$() : Observable<Devise[]>{
    const url = `${this.publicBaseUrl}/devise`;
    console.log( "url = " + url);
    return this._http.get<Devise[]>(url);
  }

  public getDeviseByCode$(code:string) : Observable<Devise>{
    const url = `${this.publicBaseUrl}/devise/${code}`;
    console.log( "url = " + url);
    return this._http.get<Devise>(url);
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
    const url = `${this.publicOrPrivateBaseUrl}/devise/${deviseCode}?v=true`;
    console.log("deleteUrl=" + url );
    return this._http.delete<any>(url);
  }

  postDevise$(d :Devise): Observable<Devise>{
    const url = `${this.publicOrPrivateBaseUrl}/devise`;
    return this._http.post<Devise>(url,d /*input envoyé au serveur*/);
    //this.http.post<TypeReponseRetourneParServeur>(url_web_service , donnee_a_envoyer)
  }

  putDevise$(d :Devise): Observable<Devise>{
    const url = `${this.publicOrPrivateBaseUrl}/devise?v=true`; 
    return this._http.put<Devise>(url,d /*input envoyé au serveur*/);
    //this.http.put<TypeReponseRetourneParServeur>(url_web_service , donnee_a_envoyer)
  }

  //jeux de données (en dur) pour pré-version (simulation asynchrone)
  private _devises : Devise[] = [
    new Devise('EUR','euro',1.0),
    new Devise('USD','dollar',1.1),
    new Devise('GBP','livre',0.9),
    new Devise('JPY','Yen',128.5)
  ];

  public getAllDevisesSimu$() : Observable<Devise[]>{
    return of(this._devises)
           .pipe(
           		mergeMap(dInTab=>dInTab) ,
		          filter((p) => p.change <= 1.2) ,
           		map((d : Devise)=>{d.name = d.name.toUpperCase(); return d;}) ,
           		toArray(),
              map((tabDevise)=>tabDevise.sort((d1,d2)=>d1.change-d2.change))
           );
  }

}
