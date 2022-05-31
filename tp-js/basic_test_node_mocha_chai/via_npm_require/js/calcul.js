
function calculerOp(op,a,b){ 
		  var res = 0;
		  if(op == '+'){
		      res = Number(a)+Number(b); // le + déclenche une concaténation entre 2 string
		                 //ou bien une addition entre 2 choses numériques
		    }else if(op == '*'){
			  res=a*b;
		   }
		 return res;
		}

module.exports.calculerOp = calculerOp;