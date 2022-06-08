import { Component, OnInit } from '@angular/core';
import { Devise } from '../common/data/devise';

@Component({
  selector: 'app-devise',
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

  constructor() {
    //V1 (sans backend), avec des valeurs simulées en mémoire
    this.tabDevises.push(new Devise("EUR","Euro",1));
    this.tabDevises.push(new Devise("USD","Dollar",1.1));
    this.tabDevises.push(new Devise("GBP","Livre",0.9));
    this.tabDevises.push(new Devise("JPY","Yen",120));
   }

  ngOnInit(): void {
  }

  onNew(){
    this.mode="newOne";
    this.selectedDevise=undefined;
    this.deviseTemp = new Devise();
    this.message = "nouvelle devise à saisir ...";
  }

  onAdd(){
    this.tabDevises.push(this.deviseTemp);
    this.onNew();
    this.message = "devise peut être ajoutée";
  }

  onDelete(){
    if(this.selectedDevise){
      let indexToDelete = -1;
      this.tabDevises.forEach((devise,index)=>{if(devise==this.selectedDevise) indexToDelete=index; });
      if(indexToDelete>=0){
        this.tabDevises.splice(indexToDelete,1);
      }
    }
    this.onNew();
    this.message = "devise peut être supprimée";
  }

  onUpdate(){
  //test imposé par typescript sur this.selectedDevise potentiellement undefined
   if(this.selectedDevise != undefined){
    //Rappel: this.selectedDevise est ici une référence
    //qui pointe directement sur le i eme objet du tableau this.tabDevises
    //(selon ligne sélectionnée)
         this.selectedDevise.code = this.deviseTemp.code;
         this.selectedDevise.name = this.deviseTemp.name;
         this.selectedDevise.change = this.deviseTemp.change;
         this.message = "devise mise à jour";
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


}
