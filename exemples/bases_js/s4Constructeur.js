function Ventes(secteur, chiffreAffaireHt){
   this.secteur=secteur;
   this.chiffreAffaireHt=chiffreAffaireHt;
   this.chiffreAffaireTtc = function(tauxTvaPct){
       return (1 + tauxTvaPct/100) * this.chiffreAffaireHt;
   }
}

var ventesPapeterie = new Ventes("papeterie",35892.45);
console.log("ventesPapeterie="+ventesPapeterie + " de type " + typeof ventesPapeterie);
//ventesPapeterie=[object Object] de type object
if(ventesPapeterie instanceof Ventes) console.log("ventesPapeterie est une instance de Ventes")
//ventesPapeterie est une instance de Ventes

console.log(JSON.stringify(ventesPapeterie));
//{"secteur":"papeterie","chiffreAffaireHt":35892.45}
console.log("chiffreAffaireTtc pour papeterie:" 
            +ventesPapeterie.chiffreAffaireTtc(20.0));


var tabVentes = [ ventesPapeterie ];
tabVentes.push(new Ventes("vins" , 15688.6));
tabVentes.push(new Ventes("legumes" , 27897.3));
tabVentes.push(new Ventes("fruits" , 13789.1));
tabVentes.push(new Ventes("viandes" , 21789.96));

function chiffreAffaireHtTotal(tabVentes){
  let totalHt=0;
  for(let i in tabVentes){
      totalHt += tabVentes[i].chiffreAffaireHt;
  }
  return totalHt;
}

var ca_total = chiffreAffaireHtTotal(tabVentes);
console.log("chiffreAffaireHtTotal="+ca_total); //exemple: 115057.41

//supprimer l'élément "vins" du tableau tabVentes
//d'indice 0+1 puis réafficher le tableau tabVentes
//(avec éléments restants) au format JSON

//delete tabVentes[0+1];
//tabVentes.splice(0+1,1);

for(let i in tabVentes){
    if(tabVentes[i].secteur=="vins"){
        //delete tabVentes[i];
        tabVentes.splice(i,1); 
        break;
    }
}


console.log("tabVentes (après suppression des vins):" 
         + JSON.stringify(tabVentes));