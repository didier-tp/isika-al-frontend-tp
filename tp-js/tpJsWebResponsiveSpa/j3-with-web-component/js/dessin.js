
var myCanvas; //canvasElement
var offscreenCanvasBeforeTemp = null; //for double buffering (temp) 
var myStatusMsg; //zone ou afficher xC,yC
var xC,yC; //new (x,y) relative to canvas
var x1,y1,x2,y2; //mousedown(x1,y1) , mouseup(x2,y2)
                // relative to canvas
var typeFigure="ligne"; //par defaut
var couleur="black"; //par defaut
var empty = false; //par defaut
var figStarted = false; //true between mousedown and mouseup
 

function compute_xC_yC_relativeTocanvas(e,canvasElement){
		xC = e.pageX - canvasElement.offsetLeft;
		yC = e.pageY - canvasElement.offsetTop;
	}
	
function clear_canvas(){
		var ctx = myCanvas.getContext("2d");
		ctx.clearRect (0,0,myCanvas.width,myCanvas.height )
	}
	
function set_and_log_coords_xC_yC(event){
		compute_xC_yC_relativeTocanvas(event,myCanvas);
		var msg="x=" + xC + " y=" + yC;
		console.log(msg);
		myStatusMsg.innerHTML=msg;
	}

function setTypeFig(tf){
   typeFigure=tf;
   console.log("typeFigure="+typeFigure);
}	
	
function log_coords_and_setX1Y1(event){
		set_and_log_coords_xC_yC(event);
		x1=xC; y1=yC; //premier point (mousedown)
		retreiveParameters();
	}

function prepareOffsreenCanvas(originalCanvas,copyCanvas){
	copyCanvas.width=originalCanvas.width;
	copyCanvas.height=originalCanvas.height;
    drawingCanvasImage(originalCanvas,copyCanvas);
}

function drawingCanvasImage(originalCanvas,drawingCanvas){
    let ctx = drawingCanvas.getContext('2d');
	ctx.drawImage(originalCanvas, 0, 0);
}

function drawFigInCanvas(canvas){
	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle=couleur;
	ctx.fillStyle=couleur;
	ctx.strokeWidth=1;
	switch(typeFigure){
		case "ligne":	
			ctx.moveTo(x1,y1) 
		    ctx.lineTo(x2,y2)
			break;
		case "rect":	
			ctx.rect(x1,y1,x2-x1,y2-y1)
			if(!empty) ctx.fill();
			break;
		case "cercle":	
		    r=Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
			ctx.arc(x1, y1, r, 0 /*startAngle*/, 2 * Math.PI /*endAngle*/, false);
			if(!empty) ctx.fill();
			break;
	}
	ctx.closePath();
	ctx.stroke();
}
	
function drawFig(temp){
	//http://blog.bob.sh/2012/12/double-buffering-with-html-5-canvas.html
	
	if(offscreenCanvasBeforeTemp==null){
		  //start of temp 
		  offscreenCanvasBeforeTemp = document.createElement('canvas');
		  prepareOffsreenCanvas(myCanvas,offscreenCanvasBeforeTemp); //snapshot before temporay drawing
	}

	let offscreenCanvasTemp = document.createElement('canvas');
	prepareOffsreenCanvas(offscreenCanvasBeforeTemp,offscreenCanvasTemp);
	drawFigInCanvas(offscreenCanvasTemp);//tempary drawing in offscreen canvas
	drawingCanvasImage(offscreenCanvasTemp,myCanvas);//flip to real screen canvas
	
	if(!temp){
		offscreenCanvasBeforeTemp=null;
	}
}

function retreiveParameters(){
	var selectCouleur = document.getElementById("selCouleur");
	couleur = selectCouleur.value;
	console.log("couleur="+couleur);
	var cbEmpty = document.getElementById("cbEmpty");
	empty=cbEmpty.checked;
}


function log_coords_and_drawFig(event){
	set_and_log_coords_xC_yC(event);
	x2=xC; y2=yC;
	drawFig(false);//real drawing (not temp)
}
	
function start_dessin(){ 

	myCanvas = document.getElementById("myCanvas");
    myStatusMsg  = document.getElementById("my_status_msg");

	myCanvas.addEventListener("mousedown" ,
	    (event)=> { 
			figStarted=true; 
			log_coords_and_setX1Y1(event);
		});

	myCanvas.addEventListener("mousemove" ,
	     (event)=> {
			     set_and_log_coords_xC_yC(event);
		});
	
	myCanvas.addEventListener("mouseup" ,
	     (event)=> {
		  log_coords_and_drawFig(event); 
		  figStarted=false;
		});

}