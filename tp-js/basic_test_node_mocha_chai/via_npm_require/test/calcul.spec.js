/*
//load js script form html 
fs = require('fs')
myCode = fs.readFileSync('./js/calcul.js','utf-8') // depends on the file encoding
eval(myCode)
*/
//or load xyz.js as a node module (export & require):
var calcul = require("../js/calcul");
		
var chai = require("chai");
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
