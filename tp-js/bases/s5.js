
function f1(){
    //var a=5; //pas bien pour une variable locale
    //let a=5; //déjà mieux pour variable locale
    const a=5; //encore mieux pour variable locale que l'on ne souhaite pas modifier
    /*
    if(a=6) console.log("a vaut 6"); //erreur if(a=6) à la place de if(a==6) détectée avec mot clef const
      else console.log("a ne vaut pas 6");
      */
    if(a==6) console.log("a vaut 6"); //erreur if(a=6) à la place de if(a==6) détectée avec mot clef const
      else console.log("a ne vaut pas 6");
}

f1();