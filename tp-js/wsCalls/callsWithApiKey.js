import axios from 'axios';



async function callWithApiKeyInUrl(){
    let  wsUrl = "http://data.fixer.io/api/latest?access_key=26ca93ee7fc19cbe0a423aaa27cab235" 
	//ici avec api-key de didier

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


callWithApiKeyInUrl();