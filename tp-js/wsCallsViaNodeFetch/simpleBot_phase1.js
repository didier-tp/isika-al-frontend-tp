
import fetch from 'node-fetch';

var villesAvecMeteo = [
    {
        name : 'Paris',
        zip : '75001',
        lat:null,
        lon:null,
        weather_description:null,
        temperature : null
    },
    {
        name : 'Bordeaux',
        zip : '33000',
        lat:null,
        lon:null,
        weather_description:null,
        temperature : null
    },
    {
        name : 'Nice',
        zip : '06000',
        lat:null,
        lon:null,
        weather_description:null,
        temperature : null
    },
    {
        name : 'Lyon',
        zip : '69001',
        lat:null,
        lon:null,
        weather_description:null,
        temperature : null
    },
    {
        name : 'Strasbourg',
        zip : '67000',
        lat:null,
        lon:null,
        weather_description:null,
        temperature : null
    }
];
/*
//but du tp :
phase 1 :
   - trouver les informations manquante en appelant en boucle
   les API REST
      http://api.zippopotam.us/fr (lon et lat selon zip)
      https://api.openweathermap.org (weather selon lon et lat)

phase 2 :
   - stocker cela dans une base mongoDB

phase 3 :
   - déclenchement périodique (toutes les 6h)   
*/

//console.log("villesAvecMeteo="+ JSON.stringify(villesAvecMeteo));

async function recupererLatLong(tabVilles){

}

async function recupererInfosMeteo(tabVilles){
    
}

async function recuperLatLongEtInfosMeteo(tabVilles){
    try{
        await recupererLatLong(tabVilles);
        await recupererInfosMeteo(tabVilles);
        console.log("villesAvecMeteo="+ JSON.stringify(villesAvecMeteo));
    }catch(ex){
        console.log(ex);
    }
}
