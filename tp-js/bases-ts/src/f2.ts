var jours : string[];
jours = [ "Lundi" , "mardi" , "mercredi" , "jeudi" , "vendredi" ];
jours.push("samedi"); jours.push("dimanche");
for(const [i,jour] of jours.entries()){
    let j=jour.toUpperCase();
    console.log(">> " + `jour ${i} : ${j}`);
}
