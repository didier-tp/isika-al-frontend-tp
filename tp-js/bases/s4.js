let prenom = "didier";
let nom = "Defrance";
let nomComplet = `${prenom} ${nom}`;
console.log(nomComplet);

let tab1 = [ 12 , 8 , 6 ];
let tab2 = tab1.map( v => v/2);
console.log(`tab2=${tab2}`)

let tabObj = [ { prenom : 'alex' , nom : 'Therieur'},
               { prenom : 'jean' , nom : 'Bon'}];

console.log(`tabObj=${JSON.stringify(tabObj)}`)