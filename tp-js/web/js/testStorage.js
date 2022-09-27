function memoriserCouleur(){
    let eltCouleur = document.getElementById("couleur");
    let valCouleur = eltCouleur.value;
    localStorage.setItem("couleurPreferee" ,valCouleur );
    let userSession = { name : "toto" , role : "developpeur" };
    sessionStorage.setItem("userSession" , JSON.stringify(userSession) );
    init();
}

window.onload = init;

function init(){
    let valCouleur = localStorage.getItem("couleurPreferee");
    if(valCouleur!=null){
       let  eltBody = document.querySelector("body");
        eltBody.style.backgroundColor = valCouleur;
    }
    let userSessionAsJsonString = sessionStorage.getItem("userSession");
    if(userSessionAsJsonString!=null){
        let  userSession = JSON.parse(userSessionAsJsonString);
        document.getElementById("spanMessage").innerHTML = userSession.name;
    }
}