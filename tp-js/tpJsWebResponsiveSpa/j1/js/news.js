
function creerEtAttacherCard(news,parentInDom){
	//<div class="card"
	var noeudCard = document.createElement("div");
	noeudCard.setAttribute("class" , "card with-margin-bottom small-zoom");
	parentInDom.appendChild(noeudCard);
	
	//<div class="card-header bg-primary text-white">titre1</div>
	var noeudCardHeader = document.createElement("div");
	noeudCardHeader.setAttribute("class" , "card-header bg-primary text-white");
	noeudCardHeader.innerHTML = news.title;
	noeudCard.appendChild(noeudCardHeader);
	
	//<img class="card-img-top" src="images/imagexyz.png" >
	var noeudCardImage = document.createElement("img");
	noeudCardImage.setAttribute("class" , "card-img-top");
	noeudCardImage.setAttribute("src" , "images/"+news.image);
	noeudCard.appendChild(noeudCardImage);
	
	//<div class="card-body">
	var noeudCardBody = document.createElement("div");
	noeudCardBody.setAttribute("class" , "card-body");
	var lienHypertexte = "<br/><a href='"+news.lien+"' target='_new'> details </a>";
	noeudCardBody.innerHTML = news.text + lienHypertexte;
	noeudCard.appendChild(noeudCardBody);
}


function afficherNews(tabNews){
	var zoneNews=document.getElementById("zoneNews");
	var nbNews = tabNews.length;
	//<div class="row">
	var noeudRow = document.createElement("div");
	noeudRow.setAttribute("class" , "row");
	zoneNews.appendChild(noeudRow);
	for(let numCol=0;numCol<nbNews;numCol++){
		//<div class="col-12 col-md-6 col-xl-4">
		var noeudCol = document.createElement("div");
		noeudCol.setAttribute("class" , "col-12 col-md-6 col-xl-4");
		noeudRow.appendChild(noeudCol);
		creerEtAttacherCard(tabNews[numCol],noeudCol);
	}
}

function startNews(){ 
	console.log("starNews");
    makeAjaxGetRequest("data/news.json" , function(jsonNewsData) {
		   var tabNews = [];
		   tabNews=JSON.parse(jsonNewsData);
		   for(i in tabNews){
			   console.log(JSON.stringify(tabNews[i]));
		   }
		   afficherNews(tabNews);
	   });
}