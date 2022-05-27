import axios from 'axios';



async function callWithApiKeyInUrl(){
  let apiKey = "26ca93ee7fc19cbe0a423aaa27cab235";//ici avec apiKey de didier
  let  wsUrl = `http://data.fixer.io/api/latest?access_key=${apiKey}` 
	
	//type de réponse attendue:
	/*
	{"success":true,"timestamp":1635959583,"base":"EUR","date":"2021-11-03",
	"rates":{"AED":4.254663,"AFN":105.467869,..., "EUR":1 , ...}}
	*/
    try{
       const response  = await axios.get(wsUrl);
	   console.log("\n http://data.fixer.io/api/latest response:", + response.status);
       console.log("response.status : ", + response.status);
       console.log("response.data : " + JSON.stringify(response.data));
    }catch(ex){
      console.log("ex : " + ex);
    }
}

async function callWithApiKeyInUrl2(){
/*
https://developers.themoviedb.org/3/getting-started/introduction
https://www.themoviedb.org/settings/api/request (url pour demander api key)
API-KEY=861b3deeac81ccfcadd33282456a499c
for account(didierdefrance, didier@d-defrance.fr , .....2.)
*/
  let apiKey = "861b3deeac81ccfcadd33282456a499c";
  let  wsUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}` 
  //autre exemple d'url : `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`
  //et ....movie?q...=cinquieme+element&api_key=....

//type de réponse attendue:
/*
{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},
{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},
{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},
{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},
{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},
{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},
{"id":37,"name":"Western"}]}
*/
  try{
     const response  = await axios.get(wsUrl);
   console.log("\n https://api.themoviedb.org/3/genre/movie/list response:", + response.status);
     console.log("response.status : ", + response.status);
     console.log("response.data : " + JSON.stringify(response.data));
  }catch(ex){
    console.log("ex : " + ex);
  }
}


callWithApiKeyInUrl();
callWithApiKeyInUrl2();