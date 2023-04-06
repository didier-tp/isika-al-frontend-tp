"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const simpleAsync_1 = require("../simpleAsync");
var expect = chai_1.default.expect;
describe("my simpleAsync tests", function () {
    var simpleAsync;
    beforeEach(function () {
        console.log("initialisation : new ... or ...");
        simpleAsync = new simpleAsync_1.SimpleAsync();
    });
    /*
    it("abc shoud be ABC in upperCase with done called", function (done) {
        simpleAsync.getUppercaseDataAfterDelay("abc",500)
        .then( (s)=> { expect(s).to.equals("ABC"); })
        .then( () => { console.log("ok"); done();})
        .catch( (err) => { console.log("err:"+err); expect.fail(err); })
        .catch( (err) => { done(err); })
    });
    */
    it("abc shoud be ABC in upperCase with returned Promise ", function () {
        return simpleAsync.getUppercaseDataAfterDelay("abc", 500)
            .then((s) => { expect(s).to.equals("ABC"); })
            .catch((err) => { expect.fail(err); });
    });
    it("abc shoud be ABC in upperCase with async/await", async function () {
        try {
            const s = await simpleAsync.getUppercaseDataAfterDelay("abc", 500);
            expect(s).to.equals("ABC");
        }
        catch (err) {
            expect.fail(err);
        }
    });
});
//# sourceMappingURL=simpleAsync-spec.js.map