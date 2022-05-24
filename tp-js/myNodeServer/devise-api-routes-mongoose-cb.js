//var express = require('express');
import express from 'express';
const apiRouter = express.Router();
//var devise_dao_mongoose = require('./devise-dao-mongoose-cb.js');
import devise_dao_mongoose from './session-dao-mongoose-cb.js';

var PersistentDeviseModel;
devise_dao_mongoose.initMongooseWithSchemaAndModel(
	function(InitializedPersistentDeviseModel) {
		PersistentDeviseModel=InitializedPersistentDeviseModel
	}
);

//exemple URL: http://localhost:8282/devise-api/public/devise/EUR
apiRouter.route('/devise-api/public/devise/:code')
.get( async function(req , res  , next ) {
	var codeDevise = req.params.code;
	PersistentDeviseModel.findById( codeDevise ,
									    function(err,devise){
											if(devise==null)
											   res.status(404).send({ err : 'not found'});
											else
										       res.send(devise);
									   });
});

/*
//exemple URL: http://localhost:8282/devise-api/public/devise-conversion?montant=50&source=EUR&cible=USD
apiRouter.route('/devise-api/public/devise-conversion')
.get( function(req , res  , next ) {
	let montant = Number(req.query.montant);
	let codeDeviseSource = req.query.source;
	let codeDeviseCible = req.query.cible;
	//on demande à mongodb les détails de la devise source
	PersistentDeviseModel.findOne( { _id : codeDeviseSource} , 
		                           function (err,deviseSource){	
		if(err!=null || deviseSource==null )
		  res.status(404).send({ message:"devise source pas trouvee"})	;	
		else					   						   
        //callback avec deviseSource si tout va bien   
		//2 nd appel pour récupérer les détails de la devise cible:
		PersistentDeviseModel.findOne( { _id : codeDeviseCible} , 
			function (err,deviseCible){  
			if(err!=null || deviseCible==null )
				res.status(404).send({ message:"devise cible pas trouvee"})	;
			else {
			 //callback avec deviseCible si tout va bien 					   
			 var montantConverti = montant * deviseCible.change / deviseSource.change;
			 res.send ( { montant : montant , 
				         source :codeDeviseSource , 
				         cible : codeDeviseCible ,
						 montantConverti : montantConverti});
			 }
			});
		});
})
*/
/*
//exemple URL: http://localhost:8282/devise-api/public/devise-conversion?montant=50&source=EUR&cible=USD
apiRouter.route('/devise-api/public/devise-conversion')
.get( function(req , res  , next ) {
	let montant = Number(req.query.montant);
	let codeDeviseSource = req.query.source;
	let codeDeviseCible = req.query.cible;
    let deviseSourceLocal ; 
    devise_dao_mongoose.getDeviseByCriteria({ _id : codeDeviseSource})
	.then((deviseSource)=>{ deviseSourceLocal = deviseSource;
		return devise_dao_mongoose.getDeviseByCriteria({ _id : codeDeviseCible})
	})
	.then((deviseCible)=>{
		var montantConverti = montant * deviseCible.change / deviseSourceLocal.change;
			 res.send ( { montant : montant , 
				         source :codeDeviseSource , 
				         cible : codeDeviseCible ,
						 montantConverti : montantConverti});
	})
	.catch((erreur)=>{ res.status(404).send(erreur)	;});
})
*/
/*
//exemple URL: http://localhost:8282/devise-api/public/devise-conversion?montant=50&source=EUR&cible=USD
apiRouter.route('/devise-api/public/devise-conversion')
.get( async function(req , res  , next ) {
	let montant = Number(req.query.montant);
	let codeDeviseSource = req.query.source;
	let codeDeviseCible = req.query.cible;
	try{
		let deviseSource = await  devise_dao_mongoose.getDeviseByCriteria(
			                   { _id : codeDeviseSource});
		let deviseCible = await devise_dao_mongoose.getDeviseByCriteria(
			                   { _id : codeDeviseCible});
		let montantConverti = montant * deviseCible.change / deviseSource.change;
		res.send ( { montant : montant , 
					source :codeDeviseSource , 
					cible : codeDeviseCible ,
					montantConverti : montantConverti});
		}
	catch(ex){
		res.status(404).send(ex);
	}
})
*/

//exemple URL: http://localhost:8282/devise-api/public/devise-conversion?montant=50&source=EUR&cible=USD
apiRouter.route('/devise-api/public/devise-conversion')
.get( async function(req , res  , next ) {
	let montant = Number(req.query.montant);
	let codeDeviseSource = req.query.source;
	let codeDeviseCible = req.query.cible;
	try{
		let  [ deviseSource , deviseCible ]
		 = await  Promise.all([ devise_dao_mongoose.getDeviseByCriteria(
			                   { _id : codeDeviseSource}) ,
	                           devise_dao_mongoose.getDeviseByCriteria(
			                   { _id : codeDeviseCible})
							   ]);
		let montantConverti = montant * deviseCible.change / deviseSource.change;
		res.send ( { montant : montant , 
					source :codeDeviseSource , 
					cible : codeDeviseCible ,
					montantConverti : montantConverti});
		}
	catch(ex){
		res.status(404).send(ex);
	}
})


//exemple URL: http://localhost:8282/devise-api/public/devise-convert?montant=50&source=EUR&cible=USD
apiRouter.route('/devise-api/public/devise-convert')
.get( function(req , res  , next ) {
	let montant = Number(req.query.montant);
	let codeDeviseSource = req.query.source;
	let codeDeviseCible = req.query.cible;
	let changeDeviseSource ;
	/*
	devise_dao_mongoose.getDeviseByCode(codeDeviseSource)
	.then((deviseSource)=> { changeDeviseSource = deviseSource.change;  
		return devise_dao_mongoose.getDeviseByCode(codeDeviseCible) ; } )
	.then((deviseCible)=>{
		res.send ({ montant : montant , 
			        source : codeDeviseSource , 
					cible : codeDeviseCible ,
		            montantConverti : montant * deviseCible.change / 
					changeDeviseSource });
	 })
	.catch((error)=> { res.status(404).send(error); } );
	*/
	Promise.all( [ devise_dao_mongoose.getDeviseByCode(codeDeviseSource) ,
		           devise_dao_mongoose.getDeviseByCode(codeDeviseCible) ])
	.then( ([deviseSource , deviseCible] )=> {
		res.send ({ montant : montant , 
			source : codeDeviseSource , 
			cible : codeDeviseCible ,
			montantConverti : montant * deviseCible.change / 
			                 deviseSource.change });
	 })
	.catch((error)=> { res.status(404).send(error); });
});

//exemple URL: http://localhost:8282/devise-api/public/devise (returning all devises)
//             http://localhost:8282/devise-api/public/devise?changeMini=1.05
apiRouter.route('/devise-api/public/devise')
.get( function(req , res  , next ) {
	var changeMini = Number(req.query.changeMini);
	var criteria=changeMini?{ change: { $gte: changeMini } }:{};
	PersistentDeviseModel.find(criteria,function(err,devises){
		   if(err) {
			   console.log("err="+err);
	       }
		   res.send(devises);
	});//end of find()
});

// http://localhost:8282/devise-api/private/role-admin/devise en mode post
// avec { "code" : "mxy" , "nom" : "monnaieXy" , "change" : 123 } dans req.body
apiRouter.route('/devise-api/private/role-admin/devise')
.post( function(req , res  , next ) {
	var nouvelleDevise = req.body;
	console.log("POST,nouvelleDevise="+JSON.stringify(nouvelleDevise));
	var persistentDevise = new PersistentDeviseModel(nouvelleDevise)
	persistentDevise.save ( function(err,savedDevise){
											 if(err==null)
											   res.send(nouvelleDevise);
											 else 
											   res.status(500).send({err : "cannot insert in database" ,
											                         cause : err});
									    });
});

// http://localhost:8282/devise-api/private/role-admin/devise en mode PUT
// avec { "code" : "USD" , "nom" : "Dollar" , "change" : 1.123 } dans req.body
apiRouter.route('/devise-api/private/role-admin/devise')
.put( function(req , res  , next ) {
	var newValueOfDeviseToUpdate = req.body;
	console.log("PUT,newValueOfDeviseToUpdate="+JSON.stringify(newValueOfDeviseToUpdate));
	const filter = { _id : newValueOfDeviseToUpdate.code }
	PersistentDeviseModel.updateOne( filter , newValueOfDeviseToUpdate,
		function(err,opResultObject){
			//console.log(JSON.stringify(opResultObject))
			if(err || opResultObject.n == 0){
				res.status(404).json({ err : "no devise to update with code=" + newValueOfDeviseToUpdate.code });
			}else{
					res.send(newValueOfDeviseToUpdate);
			 }
	});	//end of updateOne()
});

// http://localhost:8282/devise-api/private/role-admin/devise/EUR en mode DELETE
apiRouter.route('/devise-api/private/role-admin/devise/:code')
.delete( function(req , res  , next ) {
	var codeDevise = req.params.code;
	console.log("DELETE,codeDevise="+codeDevise);
	const filter = { _id : codeDevise }
	PersistentDeviseModel.deleteOne( filter,
		function(err,opResultObject){
			//console.log(JSON.stringify(opResultObject))
			if(err || opResultObject.n == 0)
				res.status(404).send({ err : "not found , no delete" } );
			 else
				 res.send({ deletedDeviseCode : codeDevise } );
		 });
});

//module.exports.apiRouter = apiRouter; //ancienne syntaxe common-js
export { apiRouter } //syntaxe module es2015