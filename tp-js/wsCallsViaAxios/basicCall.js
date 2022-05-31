import axios from 'axios';

async function badCallWrongUrl(){
    
    let wsUrl = "https://catfact.ninja/bad_url";
    try{
       const response  = await axios.get(wsUrl);
       console.log("response.status : ", + response.status);
       console.log("response.data : " + JSON.stringify(response.data));
    }catch(ex){
      console.log("\n badCallWrongUrl exception: ");
      console.log("exception ex as JSON string:" + JSON.stringify(ex));
      if(ex.response){
          console.log("ex.response.status : " + ex.response.status); 
          console.log("ex.response.headers : " + JSON.stringify(ex.response.headers)); 
      }
      console.log("ex.message : " + ex.message);
      console.log("ex : " + ex);
    }
}

async function callNinjaCatFact(){
    let wsUrl = "https://catfact.ninja/fact";
        //Ce WS facile à appeler (sans api_key) retourne
		//une réponse au format JSON de type
		// { "fact" : "un fait sur les chats" , "length" :  21_ou_autre }
    try{
       const response  = await axios.get(wsUrl);
       console.log("\n good callNinjaCatFact response: ");
       console.log("response.status : ", + response.status);
       console.log("response.data : " + JSON.stringify(response.data));
    }catch(ex){
      console.log("exception ex as JSON string:" + JSON.stringify(ex));
      if(ex.response){
        console.log("ex.response.status : " + ex.response.status); 
        console.log("ex.response.headers : " + JSON.stringify(ex.response.headers)); 
    }
      console.log("ex.message : " + ex.message);
      console.log("ex : " + ex);
    }
}

badCallWrongUrl();
callNinjaCatFact();

/*
Autres exemples:


http://api.zippopotam.us/fr/75001
renvoyant:
{"post code": "75001", "country": "France", 
"country abbreviation": "FR", 
"places": [{"place name": "Paris 01 Louvre", "longitude": "2.3417",
 "state": "\u00cele-de-France", "state abbreviation": "A8", 
 "latitude": "48.8592"}]}


 https://geo.api.gouv.fr/communes?codePostal=78000
 renvoyant
 [{"nom":"Versailles","code":"78646","codeDepartement":"78","codeRegion":"11","codesPostaux":["78000"],"population":84808}]
 */