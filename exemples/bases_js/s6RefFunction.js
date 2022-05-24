/*
//syntaxe1 :
function addition(a,b){
	return a+b;
}
*/

/*
//syntaxe2:
var addition = function(a,b){
	return a+b;
}
*/
//syntaxe3 (arrow function alias lambda expression depuis 2015)
var addition = (a,b)=>{
	return a+b;
}
console.log("type de addition="+ typeof addition)
var resAdd = addition(5,6);
console.log("5+6=" + resAdd);