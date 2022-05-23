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