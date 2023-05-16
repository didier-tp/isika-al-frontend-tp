function enchainerCalculEtAffichage(x,fCalcul,fAff){
    //console.log("type de x=" + typeof x);//number
    //console.log("type de fCalcul=" + typeof fCalcul)//function
    //var y = fCalcul(x);
    const y = fCalcul(x);
    fAff(y);
}

function double(x){ return 2 * x;}
function carre(x){ return x * x;}

function aff1(chose){ console.log("*** " + chose); }
function aff2(chose){ console.log("### " + chose); }

enchainerCalculEtAffichage(5,double,aff1);
enchainerCalculEtAffichage(8,carre,aff2);

//EN TP
//enchainerCalculEtAffichage(5 , ... => ... , ... => ...)
//enchainerCalculEtAffichage(8 , ... => ... , ... => ...)

enchainerCalculEtAffichage(5 , x=>2*x , val=>{ console.log("*** " +val)})
enchainerCalculEtAffichage(8 , x=>x*x , v=>{console.log("### " +v)})