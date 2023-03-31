
function start_graph(){

var myChartInstance = null;
var btnDraw = document.getElementById("btnDraw");

btnDraw.addEventListener("click",function(event){
	var ctx = document.getElementById("myChart").getContext('2d');
	var fx = document.getElementById("fx").value;
	var xMin = document.getElementById("xMin").value;
	var xMax = document.getElementById("xMax").value;
	var yMin=0;
	var yMax=0;
	
	//var x=2
	//var y=eval(fx);
	//alert("y=f(x)=" + y);
	var x,y;
	pointValues=[];
	xMin=Number(xMin)*1.0;xMax=Number(xMax)*1.0;
	var n=100;
	var dx=(xMax-xMin)/n;
	for(x=xMin;x<=xMax;x+=dx){
		   y=eval(fx);
		   if(y<=yMin) yMin=y;
		   if(y>=yMax) yMax=y;
		   pointValues.push({x:x,y:y});
	}
	var dy=(yMax-yMin)/100;
	console.log(pointValues);
	if(myChartInstance)
    myChartInstance.destroy();
	myChartInstance = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      label: 'y=f(x)='+fx,
      data: pointValues,
      borderColor: [
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)',
        'rgba(33, 232, 234, 1)'
      ],
      borderWidth: 1
    }],
  },
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
		min: xMin,
        max: xMax,
        ticks: {
          stepSize: dx*10,
          fixedStepSize: dx*10,
        }
      },
      yAxes: {
		min: yMin,
        max: yMax,
        ticks: {
          stepSize: dy*10,
          fixedStepSize: dy*10,
        }
      }
    }
  }
});
	
});

}
