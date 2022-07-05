function calculerOp(op,a,b){ 
    a = Number(a);
	b = Number(b);
	var res = 0;
	if(op == '+'){
		 res = a+b; 
	}else if(op == '*'){
		 res=a*b;
	}else{
	   res =eval ("a"+op+"b"); //eval("a-b") ou eval("a/b") ou ...
	}
	return res;
}	
//racineCarre de 9 vaut normalement 3
function racineCarree(x){
	//x = Number(x);
	return Math.sqrt(x);
	//return 0;
}

//la moitie de 16 vaut 8
//la moitie de 10 vaut 5
function moitie(x){
	return x/2;
}

/*
//dans beforeEach , contruire une instance
//new Personne("toto",25);
function Personne(nom,age){
	this.nom=nom;
	this.age=age;
	this.incrementerAge=function(){
		this.age++;
	}
}*/

//dans beforeEach , contruire une instance
//new Personne("jean","Bon",25);
//let nc = p1.nomComplet();//"jean Bon"
function Personne(prenom,nom,age){
	this.prenom=prenom;
	this.nom=nom;
	this.age=age;
	this.incrementerAge=function(){
		this.age++;
	}
	this.nomComplet=function(){
		return this.prenom + " " + this.nom;
	}
}