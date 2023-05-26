//var express = require('express');
import express from 'express';
const apiRouter = express.Router();

import deviseDao from './devise-dao-mongoose.js';
var PersistentDeviseModel = deviseDao.ThisPersistentModel;

//exemple URL: http://localhost:8282/devise-api/public/devise/EUR
apiRouter.route('/devise-api/public/devise/:code')
.get(async function(req , res  , next ) {
	var codeDevise = req.params.code;
	var devise = await PersistentDeviseModel.findById(codeDevise);
	if(devise==null)
	  res.status(404).json({message:"devise inconnue pour code="+codeDevise});
	else
	  res.send(devise);
});

//exemple URL: http://localhost:8282/devise-api/public/devise (returning all devises)
//             http://localhost:8282/devise-api/public/devise?changeMini=1.05
apiRouter.route('/devise-api/public/devise')
.get(async function(req , res  , next ) {
	var changeMini = req.query.changeMini;
	let criteria=changeMini?{ change: { $gte: changeMini } }:{}; //$gte signifie greater or equal
    let deviseArray = await PersistentDeviseModel.find(criteria );
	res.send(deviseArray);
});


//exemple URL: http://localhost:8282/devise-api/public/convert?amount=50&source=EUR&target=USD
apiRouter.route('/devise-api/public/convert')
.get( async function(req , res  , next ) {
	let montant = Number(req.query.amount);
	let codeDeviseSource = req.query.source;
	let codeDeviseCible = req.query.target;
	let deviseSource = await PersistentDeviseModel.findById(codeDeviseSource);
	let deviseCible = await PersistentDeviseModel.findById(codeDeviseCible);
	let montantConverti = montant * deviseCible.change / deviseSource.change;
		res.send ( { amount : montant , 
					source :codeDeviseSource , 
					target : codeDeviseCible ,
					result : montantConverti});
});



// http://localhost:8282/devise-api/private/devise en mode post
// avec { "code" : "mxy" , "name" : "monnaieXy" , "change" : 123 } dans req.body
apiRouter.route('/devise-api/private/devise')
.post(async function(req , res  , next ) {
	let nouvelleDevise = req.body;
	console.log("POST,nouvelleDevise="+JSON.stringify(nouvelleDevise));
	let deviseExitanteMemecode = await PersistentDeviseModel.findById(nouvelleDevise.code);
	if(deviseExitanteMemecode!=null)
	    res.status(409).json({message : "deja une devise avec meme code"})
	else{
		let persistentDevise = new PersistentDeviseModel(nouvelleDevise);
		let savedDevise = await persistentDevise.save();
	    res.send(savedDevise);
     }
});

// http://localhost:8282/devise-api/private/devise en mode PUT
// avec { "code" : "USD" , "name" : "Dollar" , "change" : 1.123 } dans req.body
apiRouter.route('/devise-api/private/devise')
.put( async function(req , res  , next ) {
	var newValueOfDeviseToUpdate = req.body;
	console.log("PUT,newValueOfDeviseToUpdate="+JSON.stringify(newValueOfDeviseToUpdate));
	var deviseToUpdate = await PersistentDeviseModel.findById(newValueOfDeviseToUpdate.code);
	if(deviseToUpdate!=null){
		const filter = { _id : newValueOfDeviseToUpdate.code };
		await PersistentDeviseModel.updateOne(filter ,newValueOfDeviseToUpdate );
		res.send(newValueOfDeviseToUpdate);
	}else{
		res.status(404).json({ error : "no devise to update with code=" + newValueOfDeviseToUpdate.code });
	}
	
});

// http://localhost:8282/devise-api/private/devise/EUR en mode DELETE
apiRouter.route('/devise-api/private/devise/:code')
.delete( async function(req , res  , next ) {
	var codeDevise = req.params.code;
	console.log("DELETE,codeDevise="+codeDevise);
	var deviseToDelete = await PersistentDeviseModel.findById(codeDevise);
	if(deviseToDelete){
		const filter = { _id : codeDevise };
		await PersistentDeviseModel.deleteOne(filter );
		res.send({ deletedDeviseCode : codeDevise } );
	}
	else{
		res.status(404).json({ error : "no devise to delete with code=" + codeDevise });
	}
});


//export { apiRouter };//pour import * as deviseApiRoutes from './devise-api-routes-memory.js';
export default { apiRouter };//pour import as deviseApiRoutes from './devise-api-routes-memory.js';