import { Component, OnInit } from '@angular/core';
import { DeviseService} from '../common/service/devise.service'
import { Devise} from '../common/data/devise'
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  montant : number =0 ;
  codeDeviseSource : string ="";
  codeDeviseCible : string ="";
  montantConverti : number =0;

  listeDevises : Devise[] =[]; //à choisir dans liste déroulante.

  constructor(private _deviseService : DeviseService) { }

  onConvertirV1(){
        console.log("debut de onConvertir");
        this._deviseService.convertir$(this.montant,
                                      this.codeDeviseSource,
                                      this.codeDeviseCible)
               /* .pipe(
                  map( (v)=> -v )
                )   */                   
                .subscribe({
                    next : (res :number) => { this.montantConverti = res;
                                      console.log("resultat obtenu en différé")} ,
                    error : (err:any) => { console.log("error:"+err)}
                   });
        console.log("suite immédiate (sans attente) de onConvertir");
        //Attention : sur cette ligne , le résultat n'est à ce stade pas encore connu
        //car appel asynchrone non bloquant et réponse ultérieure via callback
  }

  async onConvertir(){
    try{
      this.montantConverti =  await firstValueFrom(
        this._deviseService.convertir$(this.montant,
                                  this.codeDeviseSource,
                                  this.codeDeviseCible));
    }catch(err){
      console.log(err);
    } 
}


  initListeDevises(tabDevises : Devise[]){
    this.listeDevises = tabDevises;
    if(tabDevises && tabDevises.length > 0){
      this.codeDeviseSource = tabDevises[0].code; //valeur par défaut
      this.codeDeviseCible = tabDevises[0].code; //valeur par défaut
    }
    console.log("fin de initListeDevises");
  }

  //ngOnInit() est automatiquement appelée par le framework après le constructeur
  //et après la prise en compte des injections et des éventuels @Input
  ngOnInitV1(): void {
    console.log("debut de ngOnInit");
    this._deviseService.getAllDevises$()
         .subscribe({
            next: (tabDev : Devise[])=>{ this.initListeDevises(tabDev); },
            error: (err) => { console.log("error:"+err)}
         });
  }

  async ngOnInit() {
    try{
      let tabDev : Devise[] = await firstValueFrom(
           this._deviseService.getAllDevises$());
      this.initListeDevises(tabDev)
      }catch(err){
          console.log("error:"+err);
      } 
  }

}
