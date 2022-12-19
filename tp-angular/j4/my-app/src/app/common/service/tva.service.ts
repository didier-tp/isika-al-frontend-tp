import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvaService {

  constructor() { }

  public tva(ht : number, tauxTvaPct : number ) : number{
    return ht * tauxTvaPct / 100;
    }
}
