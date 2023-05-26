import { expect } from "chai";

import deviseDao from '../devise-dao-mongoose.js';
var PersistentDeviseModel = deviseDao.ThisPersistentModel;

describe("test sur dao devise" , () =>{

    before(async ()=>{
        let nouvelleDevise = new PersistentDeviseModel({ code : "m2" , change : 2.2 , name : "monnaie2" });
        await nouvelleDevise.save();
    });


    it("test lecture devise m2" , async ()=>{
        let deviseEuro = await PersistentDeviseModel.findById("m2");
        console.log("deviseEuro="+ JSON.stringify(deviseEuro));
        expect(deviseEuro.name).to.equal("monnaie2");
    })

    
    after(async ()=>{
        await PersistentDeviseModel.deleteOne ({ _id : "m2"});
    });



})