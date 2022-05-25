//chargement/importation des modules :
//NB:   ./ for searching in local relative

//var mycomputer = require('./mycomputer_module'); 
import infos , { Cercle ,  myAddStringFct , myMultStringFct } from './mycomputer_module_multipleExport.js';
//cette variante syntaxique du import permet d'utiliser directement 
//infos , Cercle ,  myAddStringFct , myMultStringFct sans préfixe

// without "./" in node_modules sub directory
//var markdown = require('markdown').markdown;  //old cjs syntax
import markdownModule from 'markdown'; //es2015 syntax
var markdown = markdownModule.markdown;
console.log("");
console.log("********** V2 avec import direct sans prefixe ***** ");

//utilisation des modules importés :
var x=5;
var y=6;
var resStringAdd = myAddStringFct(x,y);
console.log(resStringAdd);
var resStringMult = myMultStringFct(x,y);
console.log(resStringMult);

console.log("infos sur le module="+JSON.stringify(infos));

var c1 = new Cercle(60,60,40);
console.log("perimetre de c1="+c1.perimetre());

var resHtmlStringMult = markdown.toHTML("**"+resStringMult+"**");

//NB: "markdown" est un mini langage de balisage
// où un encadrement par ** génère un équivalent de
// <strong> HTML (proche de <b>)
console.log(resHtmlStringMult);