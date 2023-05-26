import { expect } from "chai";

import deviseDao from '../devise-dao-mongoose.js';
var PersistentDeviseModel = deviseDao.ThisPersistentModel;

describe("test sur dao devise" , () =>{


    it("test lecture devise euro" , async ()=>{
        let deviseEuro = await PersistentDeviseModel.findById("EUR");
        console.log("deviseEuro="+ JSON.stringify(deviseEuro));
        expect(deviseEuro.name).to.equal("Euro");
    })

    it("test lecture devise euro" , async ()=>{
        let deviseEuro = await PersistentDeviseModel.findById("USD");
        console.log("deviseEuro="+ JSON.stringify(deviseEuro));
        expect(deviseEuro.name).to.equal("Dollar");
    })



})