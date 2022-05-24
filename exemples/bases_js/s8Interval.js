var compteur=0;
var compteur2=0;

//coder une fonction qui sera appelée toutes les 5s (5000ms)
//et qui va incrementer et afficher le compteur
//lorsque le compteur aura atteint la valeur 10 on arrete
//le traitement d'icrémentation périodique.

function codeDeclenchePeriodiquement(){
    compteur++;
    console.log("compteur="+compteur);
    if(compteur==10){
        clearInterval(traitementPeriodique)
    }
}

var traitementPeriodique = setInterval(codeDeclenchePeriodiquement, 5000);
//clearInterval(traitementPeriodique) 
//permet de stopper le traitement déclenché toutes les 5000ms

//TP : coder une variante du code possible.
var traitementPeriodique2 = setInterval( 
    ()=>{console.log("compteur2="+ (++compteur2));
        if(compteur2==10)clearInterval(traitementPeriodique2) 
        }
    , 5000);