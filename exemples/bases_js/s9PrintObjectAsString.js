function printObjectAsString (x) {
    console.log(Object.prototype.toString.call(x));
}

//en javascript , tout peut être vu (ou convertissable) en objet

printObjectAsString(new Date()); //[object Date]
printObjectAsString( []);//[object Array]
printObjectAsString( {prenom: "jean" , nom : "Bon"});//[object Object]
printObjectAsString( /x/); //[object RegExp]
printObjectAsString( function (x) { return x*x; });//[object Function]
printObjectAsString(  (x) => x*x );//[object Function]

let refFct = (x) => x*x;
console.log("type de refFct=" + typeof refFct );//type de refFct=function
printObjectAsString(refFct);// [object Function]

let d1 = new Date();
console.log("type de d1=" + typeof d1 );//type de d1=object
printObjectAsString(d1); //[object Date]

let x = 25; printObjectAsString(x); //[object Number]
let s = "abc"; printObjectAsString(s); //[object String]
let b = true; printObjectAsString(b);//[object Boolean]

let a = 12.34632567;
let a1 = new Number(a); //explicit boxing (unusual)
console.log("a="+a + ", avec arrondi="+a1.toFixed(2)); 
//ou bien directement (via autoBoxing de javascript) :
let a2 = a.toFixed(2); //arrondi à 2 chiffres aprrès la virgule
console.log("a="+a + ", a2="+a2); //a=12.34632567, a2=12.35

