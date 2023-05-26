//var mongoose = require('mongoose');
import mongoose from 'mongoose'; // npm install -s mongoose
import dbMongoose from './db-mongoose.js';

var thisDb = dbMongoose.thisDb;

var thisSchema;//mongoose Shcema (structure of mongo document)
var ThisPersistentModel; //mongoose Model (constructor of persistent ThisPersistentModel)

function initMongooseWithSchemaAndModel() {
    mongoose.Connection = thisDb;
    thisSchema = new mongoose.Schema({
        _id: { type: String, alias: "code" },
        name: String,
        change: Number
    });
    thisSchema.set('id', false); //no default virtual id alias for _id
    thisSchema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) { delete ret._id }
    });
    //"Devise" model name is "devises" collection name in mongoDB database
    ThisPersistentModel = mongoose.model('Devise', thisSchema);
}
initMongooseWithSchemaAndModel();


function reinit_db() {
    return new Promise((resolve, reject) => {
        const deleteAllFilter = {}
        ThisPersistentModel.deleteMany(deleteAllFilter)
            .then(() => { //insert elements after deleting olds
               /* (new ThisPersistentModel({
                    _id: '618d53514e0720e69e2e54c8',
                    nom: "classeur", prix: 4.0
                })).save();
                (new ThisPersistentModel({
                    _id: '618d53514e0720e69e2e54c9',
                    nom: "cahier", prix: 2.1
                })).save();*/
                (new ThisPersistentModel({ code : "EUR" , name : "Euro" , change : 1.0})).save();
                (new ThisPersistentModel({ code : "USD" , name : "Dollar" , change : 1.1})).save();
                resolve({ action: "devises collection re-initialized in mongoDB database" })
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                reject({ error: "cannot delete in database", cause: err });
            });
    });
}

export default { ThisPersistentModel , reinit_db }