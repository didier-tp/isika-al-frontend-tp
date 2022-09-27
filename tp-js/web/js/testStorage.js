function memoriserCouleur(){
    let eltCouleur = document.getElementById("couleur");
    let valCouleur = eltCouleur.value;
    localStorage.setItem("couleurPreferee" ,valCouleur );
    //...
}