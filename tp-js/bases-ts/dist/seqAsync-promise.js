"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAsyncSequence = exports.User = exports.Account = void 0;
class Account {
    constructor(num = 0, balance = 0, ownerId = 0) {
        this.num = num;
        this.balance = balance;
        this.ownerId = ownerId;
    }
}
exports.Account = Account;
;
class User {
    constructor(userId = 0, firstName = "?", lastName = "?") {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
exports.User = User;
;
class MyAsyncSequence {
    static getAccountByNum(num) {
        //simulation (no database , no dataset):
        return new Account(num, Math.random() * 1000 /* balance/solde*/, Math.round(Math.random() * 100) /* owerId / userId */);
    }
    static getUserById(id) {
        //simulation (no database , no dataset)
        return new User(id, "firstName_" + id, "lastname" + id);
    }
    static getAccountByNumAfterDelay(num, delay) {
        return new Promise((resolve, reject) => {
            if (num > 0)
                setTimeout(() => { resolve(this.getAccountByNum(num)); }, delay);
            else
                setTimeout(() => { reject("invalid account number : " + num); }, delay);
        });
    }
    static getUserByIdAfterDelay(id, delay) {
        return new Promise((resolve, reject) => {
            if (id > 0)
                setTimeout(() => { resolve(this.getUserById(id)); }, delay);
            else
                setTimeout(() => { reject("invalid user id : " + id); }, delay);
        });
    }
    static retreive_account_and_owner(accountNumber) {
        let delay = 3000; //ms
        let compte = null;
        //avec enchainement de "Promise":
        MyAsyncSequence.getAccountByNumAfterDelay(accountNumber, delay)
            .then((account) => {
            compte = account;
            this.afficherCompteRecupere(compte);
            //console.log("account:" + JSON.stringify(account));
            return MyAsyncSequence.getUserByIdAfterDelay(account.ownerId, delay);
        }, (err) => { console.log("aff err account:" + err); })
            .then((user) => { console.log("user (owner of account):" + JSON.stringify(user)); })
            .catch((err) => { console.log("aff commun:" + err); });
        console.log("enchainement enregistré - en attente des résultats différés");
    }
    static afficherCompteRecupere(compte) {
        console.log("compte:" + JSON.stringify(compte));
    }
}
exports.MyAsyncSequence = MyAsyncSequence;
//petit test:
MyAsyncSequence.retreive_account_and_owner(0);
MyAsyncSequence.retreive_account_and_owner(8);
//# sourceMappingURL=seqAsync-promise.js.map