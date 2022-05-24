x=5;
console.log("x="+x);
var x; //this line will be loaded and replace before line 1
       //before execution of the script (this is call "hoisting" ,"hissage en francais" )


console.log("y="+y); //undefined !!! (hoisting of declaration, no hoisting of initialization !!!)
var y=4;

//===============

var a=2;
var b=3;
console.log("a+b="+add(a,b)); //call before declaration is possible because of hoisting of function

function add(x,y){
    return x+y;
}

/*
console.log("a+b="+add2(a,b)); //add2 is not a function
//NOT WORKING, hoisting of declaration, no hoisting of initialization

var add2 = function (x,y){
    return x+y;
}
*/