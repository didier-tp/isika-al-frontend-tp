"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
const personnes_1 = require("./personnes");
class Employe extends personnes_1.Personne {
    constructor(numero = 0, prenom = "?", nom = "?", age = 0, salaire = 0) {
        super(numero, prenom, nom, age);
        this.salaire = salaire;
    }
    augmenterSalaire(augmentation) {
        this.salaire += augmentation;
    }
}
exports.Employe = Employe;
//# sourceMappingURL=employes.js.map