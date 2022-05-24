function Client(name){
	this.name =name;
	this.direBonjour = methDireBonjour;
	this.showInternal = methShowInternal;
}

Client.prototype.address="1, rue elle"; //as static default address
Client.prototype.country="France"; //as static default country
//Client.prototype.liveIn = function(otherContry) { Client.prototype.country = otherContry; } //change static default property
Client.prototype.liveIn = function(otherContry) { this.country = otherContry; } //change property

function methDireBonjour(){
           console.log("Bonjour, mon nom est "+this.name);
	console.log("my address is "+this.address);
	console.log("my country is "+this.country);
};
function methShowInternal(){
	console.log("this.constructor.toString()=" + this.constructor.toString());
	console.log("this.constructor.prototype.address=" + this.constructor.prototype.address);
	console.log("this.constructor.prototype.country=" + this.constructor.prototype.country);
};

var c0=new Client(); 
c0.direBonjour();
//Bonjour, mon nom est undefined ,my address is 1, rue elle, my country is France

var c1 = new Client("c1"); c1.liveIn("USA");
c1.direBonjour();//Bonjour, mon nom est c1, my address is 1, rue elle, my country is USA
c1.showInternal();
//this.constructor.toString()=function Client(name){
//     this.name =name;
//     this.direBonjour = methDireBonjour;
//      this.showInternal = methShowInternal;
//}
//this.constructor.prototype.address=1, rue elle
//this.constructor.prototype.country=France

var c2 = new Client("c2");  c2.liveIn("UK");
c2.direBonjour();//Bonjour, mon nom est c2 , my address is 1, rue elle , my country is UK


//=====================================
console.log("****** SPEUDO HERITAGE (via prototype es5) entre Dog et Animal ********");

function Animal(name){
	this.name=name;
    this.notInheritDescribe = function () { console.log("ANIMAL of name="+this.name);}
}
Animal.prototype.color="black";//default color
Animal.prototype.weight=0;//default weight
Animal.prototype.describe = function () { console.log("Animal of name="+this.name);}

var a1=new Animal("animal_1");
console.log("a1="+JSON.stringify(a1)); //a1={"name":"animal 1"}
console.log("Animal.prototype as jsonString="+JSON.stringify(Animal.prototype)); 
//Animal.prototype as jsonString={"color":"black","weight":0}
console.log("a1.color="+a1.color); //a1.color=black
a1.notInheritDescribe();
a1.describe();



//constructeur de Dog(...) :
function Dog(type,name){
	//NB: methodeXy.call(this, args) permet de préciser this en plus des arguments
	Client.call(this,name); //appel du constructeur de Client(...)
	this.type=type;//new attribute/property
}

//Expression d'un heritage entre Dog et Animal
/*
Dog.prototype = Object.create(Animal.prototype, {
	constructor: { value: Dog, 
	               enumerable: false, 
		   writable: true, 
		   configurable: true } 
	});
*/
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Animal;

Dog.prototype.height="40"; // Après HERITAGE !!!


var d1 = new Dog("berger allemand", "medor");
console.log("d1.type=" + d1.type);
console.log("d1.name=" + d1.name);
//d1.notInheritDescribe();//TypeError: d1.notInheritDescribe is not a function
d1.describe();
console.log("d1.height=" + d1.height);
console.log("d1.color=" + d1.color);
if(d1 instanceof Dog)
	console.log("d1 is a Dog");
if(d1 instanceof Animal)
	console.log("d1 is a Animal");