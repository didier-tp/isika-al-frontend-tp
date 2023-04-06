"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const seqAsync_promise_1 = require("../seqAsync-promise");
var expect = chai_1.default.expect;
describe("MyAsyncSequence tests", function () {
    beforeEach(function () {
        //console.log("initialisation : new ... or ..." );
    });
    it("account with .num==2 when calling getAccountByNumAfterDelay(2,500)", function () {
        return seqAsync_promise_1.MyAsyncSequence.getAccountByNumAfterDelay(2, 500)
            .then((account) => { expect(account.num).to.equals(2); })
            .catch((err) => { expect.fail(err); });
    });
    it("user with .userId==6 when calling getUserByIdAfterDelay(6,500)", async function () {
        try {
            const user = await seqAsync_promise_1.MyAsyncSequence.getUserByIdAfterDelay(6, 500);
            expect(user.userId).to.equals(6);
        }
        catch (err) {
            expect.fail(err);
        }
    });
});
//# sourceMappingURL=seqAsync-spec.js.map