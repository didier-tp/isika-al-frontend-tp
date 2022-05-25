function internalAddFct(a,b) {
    return a+b;
}

function internalMultFct(a,b) {
    return a*b;
}

var infos = {
	title : "mycomputer_module",
	features : "add, mult as string",
	author : "didier",
	compteurCalculs : 0 /* nombre de calculs effectués */
}; 

function internalStringOpFct(a,b,op,res) {
	infos.compteurCalculs++;
	//console.log("compteurCalculs="+infos.compteurCalculs);
    var resultString = "" + a + op + b +" = " + res;
    return resultString;
}

function myAddStringFct(a,b) {
    var result=internalAddFct(a,b);
    return internalStringOpFct(a,b,"+",result);
}

function myMultStringFct(a,b) {
    var result=internalMultFct(a,b);
    return internalStringOpFct(a,b,"*",result);
}



function Cercle(x,y,r){
	this.x=x; this.y=y;  this.r=r; 
	this.perimetre = function(){
		return 2 * Math.PI * r; 
	}
}

/*
//ANCIENNE SYNTAXE COMMON-JS :

//exportation d'un objet (ici description/infos)
module.exports.infos = infos;

//exportation d'une classe:
module.exports.Cercle=Cercle;

//exportation de fonctions:
module.exports.myAddStringFct = myAddStringFct;
module.exports.myMultStringFct = myMultStringFct;
*/

//NOUVELLE SYNTAXE ES2015:

//exportation d'un unique objet global (pour tout ce module)
//comportant le sous objet infos et des classes et des fonctions
export default { infos, Cercle , myAddStringFct , myMultStringFct }
/*à comprendre comme écriture raccourcie/compact pour :
export default { infos : infos, 
	            Cercle : Cercle , 
                myAddStringFct : myAddStringFct , 
				myMultStringFct : myMultStringFct }
*/