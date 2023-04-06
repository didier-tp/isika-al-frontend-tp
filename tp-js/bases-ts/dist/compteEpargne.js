"use strict";
class CompteEpargne {
    constructor(numero, solde = 0) {
        this.numero = numero;
        this.solde = solde;
    }
    calculerInterets() {
        return this.solde * CompteEpargne.tauxInteret / 100;
    }
}
CompteEpargne.tauxInteret = 1.5;
var compteEpargne1 = new CompteEpargne(1, 200.0);
console.log("tauxInteret=" + CompteEpargne.tauxInteret);
console.log("interets pour compteEpargne1=" + compteEpargne1.calculerInterets());
//# sourceMappingURL=compteEpargne.js.map