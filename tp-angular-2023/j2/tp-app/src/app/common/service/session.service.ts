import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  //classe de service à injecter dans footerComponent
  //afficher le nom de la personne connectée dans le html du footerComponent

  public username : string = "?";
  public isConnected : boolean = false;

  constructor() {
       //simulation d'un login réussi:
       this.isConnected = true;
       this.username = "didier formateur fou";
   }
}
