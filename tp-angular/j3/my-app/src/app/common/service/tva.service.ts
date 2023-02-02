import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvaService {

  public tva(ht:number, tauxPct : number){
    return ht*tauxPct/100;
  }

  constructor(http: HttpClient) { }
}
