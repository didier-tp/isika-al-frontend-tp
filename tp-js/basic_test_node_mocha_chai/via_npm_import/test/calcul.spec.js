
import calcul from "../js/calcul.js";
		
import  chai from "chai";
var expect = chai.expect;
		
describe("my calculator tests", function () {
            var cpt=0;

            beforeEach(function () {
                console.log("initialisation : new ... or ..." );
            });

            afterEach(function () {
                cpt++;
            });

            it("2+3==5?", function () {
                expect(calcul.calculerOp('+',2,3)).to.equal(5);
            });
            it("2*3==6?", function () {
                expect(calcul.calculerOp('*',2,3)).to.equal(6);
            });

            //afterAll() with jasmine, after() with mocha
            after(function () {
                console.log("cpt="+cpt );
            });
            
        });
