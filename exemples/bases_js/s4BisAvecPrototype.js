//chaque objet comporte des propriétés (attributs ou méthodes) qui lui sont propres
//et comporte une référence sur un objet prototype (.__proto__ ou ...)
//les prototypes sont chainés entre eux et la chaine de protype s'arrete sur null (près de Object.prototype.__proto__) .
//lors d'un appel de propriété , l'interpréteur javascript va éventuellement remonter
//la chaîne de prototypage pour trouver la propriété appelée.

/*
structure par défaut d'un objet prototype:
   __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
    Cet objet pourra dynamiquement etre agrandi (nouveaux attibuts / méthodes généralement pas énumérables)

    dans certains cas (suite à new Cx() ) on aura une structure de ce type:
    __proto__: {
        propa : va ,
        methB : ƒ fB()
        constructor : Cx ,
         __proto__: {
            constructor: ƒ Object(),
            ...
         }
    }
    */

function Ventes(secteur, chiffreAffaireHt){
    this.secteur=secteur;
    this.chiffreAffaireHt=chiffreAffaireHt;
    this.chiffreAffaireTtc = function(tauxTvaPct){
        return (1 + tauxTvaPct/100) * this.chiffreAffaireHt;
    }
 }

 Ventes.prototype.sayHi = function(){
    console.log("Hi");
};

Ventes.prototype.comment = "comment-for-Ventes";

 let v1  = new Ventes("papeterie",5678);
 console.log("v1="+JSON.stringify(v1));
 console.log("v1.__proto__="+v1.__proto__); //ok mais pas standard officiel , standard de fait
 let protoOfV1 = Object.getPrototypeOf(v1); //standard depuis es2015 , identique ici à Ventes.prototype
console.log("protoOfV1="+protoOfV1 + " as JSON: " + JSON.stringify(protoOfV1) );
console.log("constructorOfV1="+protoOfV1.constructor);
let protoOfObjectClass=Object.prototype;
console.log("protoOfObjectClass.__proto__="+protoOfObjectClass.__proto__); //ok mais pas standard , affiche null ici

if(v1.hasOwnProperty("secteur")) console.log(".secteur défini dans v1 de type Ventes")
if(!protoOfV1.hasOwnProperty("secteur")) console.log(".secteur pas défini dans Ventes.prototype")
if(protoOfV1.hasOwnProperty("sayHi")) console.log(".sayHi défini dans Ventes.prototype")
if(protoOfV1.hasOwnProperty("comment")) console.log(".comment défini dans Ventes.prototype")


//Méthodes héritées de Objet (de Object.prototype) : .toString() , .valueOf() , ...
console.log("v1.toString()="+v1.toString());//[object Object]
if(!v1.hasOwnProperty("toString")) console.log(".toString pas défini dans v1 mais dans chaine de prototypage")
if(Object.prototype.hasOwnProperty("toString")) console.log(".toString défini dans Object.prototype")

function describePrototypeStructure(obj,depth){
  if(depth==null) depth=0;
  if(obj==null) return;
  console.log("depth=" + depth + " constructor.name=" + obj.constructor.name);
  let prototypeOfObj = obj.__proto__; 
  if(prototypeOfObj){
    describePrototypeStructure(prototypeOfObj,depth+1);
  }
}

describePrototypeStructure(v1);