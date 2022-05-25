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