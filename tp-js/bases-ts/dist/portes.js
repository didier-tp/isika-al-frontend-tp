"use strict";
class Porte {
    constructor(num = 0) {
        this.numero = num;
    }
    verifierClef(clef) {
        if (clef == undefined)
            return false;
        if (clef.length == 0)
            return false;
        return true;
    }
    get nomPorte() { return "porte_" + this.typeOfPorte() + "_" + this.numero; }
    ouvrir() { console.log("la porte s'ouvre ... "); }
    fermer() { console.log("la porte se ferme ... "); }
}
var porteQuelconque;
//porteQuelconque = new Porte(5); //impossible si abstract
class PorteCoulissante extends Porte {
    typeOfPorte() { return "coulissante"; }
    constructor(num = 0) {
        super(num);
        this.ouvertureGlissiere = 0; //en cm
    }
    faireCoulisserPorte(ouverture) {
        this.ouvertureGlissiere = ouverture;
        console.log("ouverture porte (sur glissière)=" + this.ouvertureGlissiere);
    }
    ouvrir() {
        super.ouvrir();
        this.faireCoulisserPorte(80);
    }
    fermer() {
        super.fermer();
        this.faireCoulisserPorte(0);
    }
}
var porteCoulissante = new PorteCoulissante(8);
console.log(porteCoulissante.nomPorte); // porte_coulissante_8
porteCoulissante.ouvrir(); //la porte s'ouvre ...  ouverture porte (sur glissière)=80
porteCoulissante.fermer(); //la porte se ferme ... ouverture porte (sur glissière)=0
if (porteCoulissante.ouvertureGlissiere == 0)
    console.log("porte coulissante bien fermée");
class PortePivotante extends Porte {
    typeOfPorte() { return "pivotante"; }
    constructor(num = 0) {
        super(num);
        this.angleRotationPorte = 0; //en degres
    }
    fairePivoterPorte(angle) {
        this.angleRotationPorte = angle;
        console.log("angle ouverture porte pivotante=" + this.angleRotationPorte);
    }
    ouvrir() {
        super.ouvrir();
        this.fairePivoterPorte(90);
    }
    fermer() {
        super.fermer();
        this.fairePivoterPorte(0);
    }
}
var portePivotante = new PortePivotante(15);
console.log(portePivotante.nomPorte); // porte_pivotante_15
portePivotante.ouvrir(); //la porte s'ouvre ...  angle ouverture porte pivotante=90
portePivotante.fermer(); //la porte se ferme ... angle ouverture porte pivotante=0
if (portePivotante.angleRotationPorte == 0)
    console.log("porte pivotante bien fermée");
//Test du comportement attendu lié au polymorphisme 
var tabPortes = [];
tabPortes[0] = porteCoulissante;
tabPortes[1] = portePivotante;
console.log("\n --- ouverture de toutes les portes ---");
for (let p of tabPortes) {
    p.ouvrir(); //porte (peut importe ton type), ouvre toi !
}
console.log(" --- Ali baba peut maintenant passer ...");
//# sourceMappingURL=portes.js.map