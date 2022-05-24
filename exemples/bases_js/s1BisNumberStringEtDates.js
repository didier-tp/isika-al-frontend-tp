var d1 = new Date();
console.log("d1="+d1);//d1=Thu Jan 06 2022 17:37:33 GMT+0100 (heure normale d’Europe centrale)

var optionsA = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
var sDate1A = d1.toLocaleDateString("fr-FR", optionsA);
console.log("sDate1A="+sDate1A);// jeudi 06 janvier 2022

var optionsB = { year: "numeric", month: "2-digit", day: "2-digit"};
var sDate1B = d1.toLocaleDateString("fr-FR", optionsB);
console.log("sDate1B="+sDate1B);// 06/01/2022

var sDate1C = d1.toISOString()
console.log("sDate1C="+sDate1C);// 2022-01-06T16:58:46.181Z (Z = Zero decalage vis a vis de  UTC)

var sDate1D = d1.toISOString().split('T')[0];
console.log("sDate1D="+sDate1D);// 2022-01-06 (UTC)

//______________________________

let n=128;
let sN = n.toString();//sN="128" typeof sN =string
console.log("sN=" + sN + " typeof sN =" + typeof sN);

var sB = "true";
let bb = (sB === "true");//bb=true typeof bb =boolean
console.log("bb=" + bb + " typeof bb =" + typeof bb);

var sx= "3.14159";
let x = parseFloat(sx);//x=3.14159 typeof x =number
console.log("x=" + x + " typeof x =" + typeof x);
console.log("x arrondi =" + x.toFixed(2) );

console.log("Math.PI="+Math.PI);

//--------- regexp -----------

let sText = "Use Javascript every day";
let posJs = sText.indexOf("Javascript");
console.log("posJs="+posJs) ;//4
posJs = sText.indexOf("javascript");
console.log("posJs="+posJs) ;//-1 (pas trouvé via indexOf() avec j minuscule)
//attention pas de .search("/javascript/i"); mais .search(/javascript/i);
posJs = sText.search(/javascript/i); // /i is for isensitive (not case sensitive)
console.log("posJs="+posJs) ;//4 (trouvé via search() avec j minuscule)

sText = "un deux trois";
let sText2 = sText.replace("deux","two");
console.log("sText2="+sText2) ; //un two trois

sText = "deux fois deux plus deux est egal a six";
let sText3 = sText.replace(/deux/g,"DEUX"); //remplacement global via regexp avec /g
console.log("sText3="+sText3) ; //DEUX fois DEUX plus DEUX est egal a six

sText = "javascript is a good language";
if(sText.match(/good/)) console.log("good");
if(!sText.match(/Good/)) console.log("good but not Good");
if(sText.match(/GOOD/i)) console.log("good or Good or GOOD");

sText = "12 + 20 = 32";
tabOfNombresTrouves = sText.match(/[0-9]+/g);
console.log("tabOfNombresTrouves="+tabOfNombresTrouves);