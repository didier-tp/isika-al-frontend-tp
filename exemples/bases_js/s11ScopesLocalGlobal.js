var g1 = 12;
function f1(){
    var l1 = 3;
    console.log("g1="+g1);//12
    g1++;
    console.log("l1="+l1);//3
}

function f2(){
    var l2 = 4;
    let l3 = 6; //depuis es2015
    console.log("l2="+l2);//4
    console.log("l3="+l3);//6
    console.log("g1="+g1);//13
    //console.log("l1="+l1);//ReferenceError: l1 is not defined
}

f1();
f2();

//================ possible depuis es2015 ====

function fWithSubScope(){
   var lv1 = 2;
   let lv2 = 2;
   console.log("lv1="+lv1 + " lv2="+lv2);// lv1=2 lv2=2
   var ok = true;
   if(ok){
       var lv1 = 22; //same local variable lv1
       let lv2 = 22; //new (subscoped) hyper local variable
       console.log("lv1="+lv1 + " lv2="+lv2);//lv1=22 lv2=22
   }
   console.log("lv1="+lv1 + " lv2="+lv2);//lv1=22 lv2=2
}

fWithSubScope();

//================== possible mais très déconseillé ====
var g2 = 3;
g3 = 4; //variable implicite et globale 

function fa(){
    g4 = 7; //variable implicitement globale 
    //(aucun mot clef , pas de declaration explicite)
    //NB: cette variable n'existera que si la fonction fa est appelée !!!
}

function fb(){
    console.log("g2="+g2);//3
    console.log("g3="+g3);//4
    console.log("g4="+g4);//7 si fa() appelé avant fb() , sinon ReferenceError: g4 is not defined
}

function fc(){
    var g2 = 7; //variable locale g2 ayant (par hazard) même nom qu'une des variables globales 
    console.log("g2="+g2);//7 (valeur de la version locale de g2)
}
function fd(){
    console.log("g2="+g2);//3 unchanged value of global variable g2
}

fa();
fb();
fc();
fd();