var a = 12; console.log("Type de a = " + typeof a);

var sB = "13"; console.log("Type de sB = " + typeof sB);
var b = Number(sB);
var c = a + b;
console.log("c = a + b = " + c);
var d;
console.log("d = " + d);
console.log("Type de d = " + typeof d);
if(c == "25") console.log("c vaut 25");
if(c === "25") 
    console.log("c vaut 25 et est de type string");
 else 
   console.log("c ne vaut pas 25 ou bien n'est pas de type string");

var v1 = null;
var v2; //undefined si pas initialisee
if(v1==v2) 
  
console.log("v1 et v2 sont considérees comme de valeurs à peu près égales") ;

v1 = 0;
v2 = 1;
//v1 = null;
//v2 = new String("abc");

if(v1) console.log("v1 considéree comme true");
      else console.log("v1 considéree comme false");

if(v2) console.log("v2 considéree comme true");
      else console.log("v2 considéree comme false"); 
      
var sB = "true";
let bb = (sB === "true"); //bb=true typeof bb =boolean
console.log("bb=" + bb + " typeof bb =" + typeof bb); 

var sB2 = "false";
if(sB2 === "true") 
      console.log("sB2 est a true");
else  console.log("sB2 est a false");