import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SessionService } from "../service/session.service";

@Injectable({
    providedIn: 'root'
})
export class GardienAuth implements CanActivate{

    constructor(private _sessionService: SessionService,
                private _router : Router){
        //injection de dépendance.
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this._sessionService.user.authenticated){
            return true;//navigation possible 
        }else{
            //return false; //navigation bloquée
            return this._router.parseUrl('/ngr-not-authorized');
        }
    }
    
}

