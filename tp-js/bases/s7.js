var tab= [ "lundi" , "mardi" , "mercredi" , "jeudi"];
//dans angular <tr *ngFor="let jour of tab" > ...</tr>
/*
for(let jour of tab){
    console.log("jour=" + jour);
}*/

for(let [i,jour] of tab.entries()){
    console.log(`i=${i} jour=${jour}`);
}



var port=8080;
var baseUrl="http://localhost"; ``
var api="api-customer";
var entite = "customer"
var id=6;
var url = `${baseUrl}:${port}/${api}/${entite}/${id}`;
console.log(`url=${url}`)
//url complete (ex: http://localhost:8080/api-customer/customer/6)

//en Tp on va coder une fonction qui contruit une url complete avec plein de paramètres
// qui ont des veleurs par défaut

//V1 (avec paramètres à passer dans un ordre précis)
function construireUrl(baseUrl="http//localhost", port="8080",api="api-customer",entite="customer",id=1){
    const url = `${baseUrl}:${port}/${api}/${entite}/${id}`;
    return url;
}

var url1 = construireUrl("http://isika.fr" , "80" , "api-client" , "client" , 67);
console.log(`url1=${url1}`)

var url2 = construireUrl();
console.log(`url2=${url2}`)

var url3 = construireUrl("http://isika.fr" , "80" , "api-client" );
console.log(`url3=${url3}`)

//var url4 = construireUrl( ,  ,  , "client" , 67 ); //SYNTAXE IMPOSSIBLE
//console.log(`url4=${url4}`)

function construireUrlV2( { baseUrl="http//localhost", port="8080",api="api-customer",entite="customer",id=null } = {}){
    const debutUrl = `${baseUrl}:${port}/${api}/${entite}`;
    return (id==null)?debutUrl:`${debutUrl}/${id}`;
}

url1 = construireUrlV2({ baseUrl : "http://isika.fr"  , api : "api-client" , port :"80" , entite : "client" , id : 67 });
console.log(`url1=${url1}`)

url2 = construireUrlV2({});
console.log(`url2=${url2}`)

url3 = construireUrlV2({ baseUrl : "http://isika.fr" , port : "80" , api : "api-client"  });
console.log(`url3=${url3}`)

var url4 = construireUrlV2( { entite : "client" , id : 67  }); 
console.log(`url4=${url4}`)
