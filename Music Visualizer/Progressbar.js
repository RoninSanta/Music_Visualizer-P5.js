////////// Progress Bar Animations Extension///////////////
// The functions below are all CALLBACK functions to the sketch.js

// Success function when the file is successfully loaded and it will display User interface and visuals
function success(){
	// Adds 2.1 sec delay to the loading such that the animations will not happen in a flash
	setTimeout(function (){
		soundLoaded = true;
		PlayMusic = true;
	},2100);
}

//Opens Alert when something is wrong
function Loaderror(error){
	alert("ERROR!!: "+ error);
}

///// Progress bar animations function/////////
// Only gets trigger when the file is being loaded and within the 2.1 sec delay
function loadingAnimation(pl){
    //function for showing a loading animation while song is loading
		push();
    textAlign(CENTER);
    fill(255);
    noStroke();
    textSize(16);
    text('Please Wait!\nYour song is loading...', width/2, height/2);
    ////// Rotating Loading animations  ////
		angle += 0.1;
		fill(150,100);
		arc(width/2,height/2,200,200,0,angle);
    stroke(0,250,0);
    strokeWeight(4);
    translate(width/2,height/2+5);
    noFill();
    rotate(angle);
    line(0,0,100,0);
		pop();
}

function whileLoading(p){
   percentLoaded= p;
}
