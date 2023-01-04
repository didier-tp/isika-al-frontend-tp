import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Devise } from '../../models/devise';
import { DeviseService } from '../../services/devise.service';
import { messageFromError } from '../../../shared/utils/util';

@Component({
  selector: 'devises-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.scss']
})
export class DeviseComponent implements OnInit {

  cloneDevise(d:Devise){
    return JSON.parse(JSON.stringify(d));
  }

  tabDevises : Devise[] = [];

  selectedDevise : Devise | undefined;

  //[(ngModel)]="deviseTemp.code" , ....
  deviseTemp : Devise = new Devise();

  message /*: string*/ ="";

  mode : "newOne" | "existingOne" = "newOne";

  onNew(){
    this.mode="newOne";
    this.selectedDevise=undefined;
    this.deviseTemp = new Devise();
  }

  onAdd(){
    this.deviseService.postDevise$(this.deviseTemp)
    .subscribe(
     { next: (savedDevise)=>{ this.message="devise ajoutée";
                   this.addClientSide(savedDevise); } ,
      error: (err)=>{ this.message = messageFromError(err,"echec post"); }
   });
  }

  addClientSide(savedDevise:Devise){
    this.tabDevises.push(savedDevise);
    this.onNew();
  }

  onDelete(){
    if(this.selectedDevise){
         this.deviseService.deleteDeviseServerSide$(this.selectedDevise.code)
             .subscribe(
              { next: ()=>{ this.message="devise bien supprimée";
                            this.deleteClientSide(); } ,
               error: (err)=>{ this.message = messageFromError(err,"echec suppression"); }
            });
    }
  }

  deleteClientSide(){
    if(this.selectedDevise){
      let indexToDelete = -1;
      this.tabDevises.forEach((devise,index)=>{if(devise==this.selectedDevise) indexToDelete=index; });
      if(indexToDelete>=0){
        this.tabDevises.splice(indexToDelete,1);
      }
    }
    this.onNew();
  }

  onUpdate(){
    this.deviseService.putDevise$(this.deviseTemp)
    .subscribe(
     { next: (updatedDevise)=>{ this.message="devise bien mise à jour";
                   this.updateClientSide(updatedDevise); } ,
      error: (err)=>{ this.message = messageFromError(err,"echec update (put)");}
   });
  }

  updateClientSide(updatedDevise:Devise){
    //test imposé par typescript sur this.selectedDevise potentiellement undefined
     if(this.selectedDevise != undefined){
      //Rappel: this.selectedDevise est ici une référence
      //qui pointe directement sur le i eme objet du tableau this.tabDevises
      //(selon ligne sélectionnée)
           this.selectedDevise.code = updatedDevise.code;
           this.selectedDevise.name = updatedDevise.name;
           this.selectedDevise.change = updatedDevise.change;
     }
    }

  //fonction évenementielle à appeler lorsque l'on
  //va sélectionner une des lignes du tableau
  onSelectDevise(d : Devise ){
    //NB: d:Devise est passé par référence (comportement de java/javascript)
    //et donc ici d et this.selectedDevise référencent
    //directement un des objets du tableau this.tabDevises
      this.selectedDevise = d;
      this.mode="existingOne";
      //via un clonage explicite , this.deviseTemp est une copie
      //indépendante de this.selectedDevise (et pas une référence sur l'objet original)
      this.deviseTemp = this.cloneDevise(this.selectedDevise);
      this.message = "devise selectionnée = " + JSON.stringify(this.selectedDevise);
  }

  constructor(private deviseService : DeviseService) {
    //injection de dépendance via constructeur
    //V2 (avec backend , api-rest)
   }

   ngOnInit(): void {
    this.deviseService.getAllDevises$()
        .pipe(
          map( (tabDev) => tabDev.sort((d1,d2)=>d1.change - d2.change) )
        )
        .subscribe({ next: (tabDev)=>{ /*this.tabDevises = tabDev;*/
                                       this.initAfterFetch(tabDev) } ,
                     error: (err)=>{ this.message = messageFromError(err,"echec rechercherDevises (get)"); }
                   });
  }

  initAfterFetch(tabDev:Devise[]){
    this.tabDevises = tabDev;
  }

}
