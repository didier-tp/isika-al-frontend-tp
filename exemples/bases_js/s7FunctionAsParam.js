//params: x = nombre , fctCalcul = reference vers une fonction de calcul
//        fctAff = reference vers fonction affichage
function enchainerCalculEtAffichage(x,fctCalcul,fctAff){
    let resCalcul = fctCalcul(x);
    fctAff(resCalcul);
}

function calculerAuCarre(x) {   return x*x;}
function calculerRacineCarre(x){   return Math.sqrt(x); }
function affichageV1(x){    console.log(">>> " + x); }
function affichageV2(x){    console.log("*** " + x); }

enchainerCalculEtAffichage(4,calculerAuCarre,affichageV1);
enchainerCalculEtAffichage(9,calculerRacineCarre,affichageV2);
enchainerCalculEtAffichage(9,
                          function (x){ return Math.sqrt(x); },
                          function (val) { console.log("*** " + val);  } 
                          );
enchainerCalculEtAffichage(9,
                            x =>  Math.sqrt(x) ,
                            val => { console.log("*** " + val);  } 
                            );                          