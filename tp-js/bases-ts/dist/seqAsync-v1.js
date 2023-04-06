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
    static getAccountByNumAfterDelayWithCb(num, delay, cbWithAccount, cbWithError) {
        if (num > 0)
            setTimeout(() => { cbWithAccount(this.getAccountByNum(num)); }, delay);
        else
            setTimeout(() => { cbWithError("invalid account number : " + num); }, delay);
    }
    static getUserByIdAfterDelayWithCb(id, delay, cbWithUser, cbWithError) {
        if (id > 0)
            setTimeout(() => { cbWithUser(this.getUserById(id)); }, delay);
        else
            setTimeout(() => { cbWithError("invalid user id : " + id); }, delay);
    }
    static retreive_account_and_owner(accountNumber) {
        let delay = 5000; //ms
        //utilisation chaînée avec callbacks imbriquées:
        MyAsyncSequence.getAccountByNumAfterDelayWithCb(accountNumber, delay, (account) => {
            console.log("account:" + JSON.stringify(account));
            MyAsyncSequence.getUserByIdAfterDelayWithCb(account.ownerId, delay, (user) => { console.log("user (owner of account):" + JSON.stringify(user)); }, (errUser) => { console.log(errUser); });
        }, (errAccount) => { console.log(errAccount); });
    }
}
exports.MyAsyncSequence = MyAsyncSequence;
//petit test:
MyAsyncSequence.retreive_account_and_owner(0);
MyAsyncSequence.retreive_account_and_owner(8);
//# sourceMappingURL=seqAsync-v1.js.map