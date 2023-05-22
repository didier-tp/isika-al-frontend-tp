
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

async function myJsonFetch(wsUrl){
    try{
        const response  =  await fetch(wsUrl);
        //console.log("response.status : ", + response.status);
        const resObj = await response.json();
        //console.log("response data : " + JSON.stringify(resObj));
        return resObj; //NB: in async function value is return as Promise.resolve
     }catch(ex){
       console.log("ex : " + ex);
       throw ex; //NB: in async function exception is thrown as Promise.reject
     }
}

async function recupererLatLong(tabVilles){
    try{
        for(let ville of tabVilles){
            const wsUrl= `http://api.zippopotam.us/fr/${ville.zip}`;
            const resWs = await myJsonFetch(wsUrl);
            ville.lat=resWs.places[0].latitude;
            ville.lon=resWs.places[0].longitude;
        }
        return tabVilles;//NB: in async function value is return as Promise.resolve
    }catch(ex){
        console.log("ex : " + ex);
        throw ex; //NB: in async function exception is thrown as Promise.reject
    }
}

async function recupererInfosMeteo(tabVilles){
    try{
        for(let ville of tabVilles){
            let apiKey = "27a68278aebee75af9d4fc23d7a68f75";//de didier-defrance (formateur fou)
            const wsUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${ville.lat}&lon=${ville.lon}&appid=${apiKey}`;
            const resWs = await myJsonFetch(wsUrl);
            ville.weather_description=resWs.weather[0].description;
            const tempKelvin = resWs.main.temp;
            ville.temperature= tempKelvin -273,15 ;//conversion degre kelvin en degré celsius
        }
        return tabVilles;//NB: in async function value is return as Promise.resolve
    }catch(ex){
        console.log("ex : " + ex);
        throw ex; //NB: in async function exception is thrown as Promise.reject
    }
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

recuperLatLongEtInfosMeteo(villesAvecMeteo);
