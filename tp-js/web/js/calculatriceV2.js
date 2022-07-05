


window.addEventListener("load",function(){

	var zoneCheckBox = document.getElementById("cbHisto");
	zoneCheckBox.addEventListener("change",cacherOuMontrerHistorique);

	var tabOpName = ["addition","soustraction","multiplication", "division"];
	var tabOp = ["+","-","*", "/"];
	for(let i in tabOp){
		document.getElementById("btn_op_" + tabOpName[i]).addEventListener("click" , function(){
			calculerOperation(tabOp[i]);
		});
	}

	var btnBb =  document.getElementById("bb");
	btnBb.addEventListener("click",function (evt){

	//transformer la chaine jsonData en objet javascript objData
	//via JSON.parse()
	let objData = JSON.parse(jsonData);

       let divA1 = document.createElement("div");
	   divA1.setAttribute("id","divA1");
	   divA1.setAttribute("class","c1");
	   //divA1.innerHTML="texte de divA1";//ou bien sous partie de .label de objData
	   divA1.innerHTML=objData.label


       //imbriquer au sein de divA1 une image dont le nom de l'image
	   //correspond à objData.image
	   //<img src="images/image1.png" />
	   let image1= document.createElement("img");
	   image1.setAttribute("src","images/"+objData.image);
	   divA1.appendChild(image1);

	   let divA = document.getElementById("divA");
	   divA.appendChild(divA1);
	});
});

var jsonData = '{ "label" : "blabla" , "image" : "image1.png" }';

function cacherOuMontrerHistorique(){
	var zoneHistorique = document.getElementById("ulHistorique");
	var zoneCheckBox = document.querySelector("#cbHisto");
	if(zoneCheckBox.checked){
		zoneHistorique.style.display="block";
		//zoneHistorique.style.visibility="visible";
	}else{
		zoneHistorique.style.display="none";
		//zoneHistorique.style.visibility="hidden";
	}
}

function calculerOperation(op){
	var a =  Number(document.getElementById("a").value);
	var b =  Number(document.getElementById("b").value);
	var res =eval ("a"+op+"b"); //eval("a+b") ou eval("a*b") ou ...
	document.getElementById("spanRes").innerHTML="<b>"+res+"</b>";
	var zoneHistorique = document.getElementById("ulHistorique");
	var li = document.createElement("li");
	li.innerHTML=""+ a + op + b +"="+res ;
	li.style.fontStyle='italic';
	zoneHistorique.appendChild(li);
	}


	

		
