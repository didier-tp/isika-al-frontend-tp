var tab1 = [ "a" , "b" , "c"];
console.log("tab1="+tab1);
var tab2 = [ "d" , "e" , "f"];
console.log("tab2="+tab2);

var tab3 = tab1.concat(tab2);
console.log("tab3="+tab3);

let sTousEltTab3 = tab3.join("_");
console.log("sTousEltTab3="+sTousEltTab3); // a_b_c_d_e_f

//ajout a la fin via .push()
let nouvelleTaille = tab3.push("g");
console.log("nouvelleTaille=" +nouvelleTaille +  " tab3="+tab3);
//retrait a la fin via .pop()
let derniereValeur = tab3.pop();
console.log("derniereValeur=" +derniereValeur + " tab3="+tab3);

//ajout au debut via .unshift()
nouvelleTaille = tab3.unshift("Z");
console.log("nouvelleTaille=" +nouvelleTaille + " tab3="+tab3);
//retrait au debut via .shift()
let premiereValeur = tab3.shift();
console.log("premiereValeur=" +premiereValeur + " tab3="+tab3);

let sousTableauPartiel1  = tab3.slice(0,-2); //sans les deux derniers éléments
console.log("sousTableauPartiel1="+sousTableauPartiel1); // a,b,c,d

let sousTableauPartiel2  = tab3.slice(2,4); //des indices 2 à 4 (pas 0 ni 1)
console.log("sousTableauPartiel2="+sousTableauPartiel2); // c,d


let tableauInverse = tab3.reverse();
console.log("tableauInverse="+tableauInverse);


let sListeVilles = 'Lyon,Paris,Marseille,Toulouse,Bordeaux';
let tabVilles = sListeVilles.split(",");
console.log("tabVilles="+tabVilles);
console.log("tabVilles[0]="+tabVilles[0]);

//afficher chaque element du tableau (un par un)
// en MAJUSCULES via boucle .forEach():
tabVilles.forEach((v)=>{ let V = v.toUpperCase() ; console.log(V); });

tabVilles.sort(); //tri élémentaire
console.log("apres tri , tabVilles="+tabVilles);

tabVilles.sort( (v1,v2)=>v2.localeCompare(v1) ); //tri decroissant
console.log("apres tri décroissant , tabVilles="+tabVilles);

if(tabVilles.includes("Lyon")) console.log("tabVilles comporte Lyon")

