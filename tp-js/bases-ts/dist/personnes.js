"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(numero = undefined, prenom = "?", nom = "?", _age = 0) {
        this.numero = numero;
        this.prenom = prenom;
        this.nom = nom;
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(a) {
        if (a >= 0)
            this._age = a;
        else
            throw "age negatif invalide";
    }
    incrementerAge() {
        this._age++;
    }
}
exports.Personne = Personne;
//# sourceMappingURL=personnes.js.map