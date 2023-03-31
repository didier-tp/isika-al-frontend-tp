
function start_effets() {
	
  var image1 = document.getElementById("image1");
  var btnStart = document.getElementById("btnDemarrerAnimationSurImage1");
  btnStart.addEventListener('click',function (){
	     image1.style.animation = "none"; //stop before restart
		 setTimeout( () =>  {
	       image1.style.animation = "secouer-anim 4s";
		 } , 2); //a small delay (ex: 2 ms ) is necessary
  });
  
  var btnStop = document.getElementById("btnArreterAnimationSurImage1");
  btnStop.addEventListener('click',function (){
	     image1.style.animation = "none";
  });
  
   var btnPause = document.getElementById("btnStartStopPauseAnimationSurImage1");
  btnPause.addEventListener('click',function (){
	     if(image1.style.animationPlayState != 'paused')
		      image1.style.animationPlayState = 'paused';
		 else image1.style.animationPlayState = 'running';
  });
  	  
}

