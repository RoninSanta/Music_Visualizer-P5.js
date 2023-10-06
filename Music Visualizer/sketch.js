////////// GLOBAL VARIABLES ////////
var controls = null;
var amplitude;
var vis = null;
////////// SOUND ARRAY FOR LIST OF SONGS ////////
var sound = [];
var song1 = null;
var song2 = null;
var song3 = null;

var currentSong = 0;
var rotateBlock = null;
//variable for p5 fast fourier transform
var fourier;
var noiseStep;
var isReady = false;
var PlayMusic = false;
var gui;
var rotateThresh;
var progThresh;
var seedThresh;
var beatDetect;
var fireworks;
var angle = 0;
var percentLoaded = null;
//// SOUND DETAILS eg. title, artist etc /////////
var currentSongDetails = [];
var sound1Details;
var sound2Details;
var sound3Details;

var progress;
var error;
var soundLoaded;
var size;
var camera;

function preload(){
/////////// Load the sounds here //////////////
 	 soundFormats('mp3','wav');
   song1 = loadSound('assets/LOFi_background_Music.mp3',success,Loaderror,whileLoading);
   song2 = loadSound('assets/retrosoul.mp3',success,Loaderror,whileLoading);
   song3 = loadSound('assets/TheKid-LAROI Ft-Justin-Bieber-S.mp3',success,Loaderror,whileLoading);
   sound.push(song1,song2,song3);

	 noiseStep = 0.01;
	 rotateThresh = 100;
	 //progThresh actual Submition = 150
	 progThresh = 150;
	 //seedThresh actual Submition = 110
	 seedThresh = 110;
}

//////////////// SET UP ////////////////////
function setup(){
	 createCanvas(windowWidth, windowHeight);
	 soundLoaded = false;
	 controls = new ControlsAndInput();
	 //instantiate the fft object
	 fourier = new p5.FFT();
   amplitude = new p5.Amplitude()
	//Add Fireworks function
	fireworks = new Fireworks();
	//create a new visualisation container and add visualisations
	vis = new Visualisations();
	vis.add(new Spectrum());
	vis.add(new WavePattern());
	vis.add(new Needles());
	vis.add(new Ridgeplots());
	vis.add(new NoiseLine());
	vis.add(new Fireworks());
  vis.add(new MyExtension1());
  vis.add(new MyExtension2());
  ////////// MUSIC SELECTOR DROPDOWN BOX ////////////////////
  Select = createSelect();
  Select.position(730, 650);
  Select.option('Song 1');
  Select.option('Song 2');
  Select.option('Song 3');
  Select.selected('Song 1');
  Select.changed(SelectMusicTracks);
}

///////////// DRAW FUNCTIONS /////////////////
function draw(){
	//set background to black
	background(0);
	//draw the selected visualisation
 vis.selectedVisual.draw();
 //draw the controls on top LEFT.
 controls.draw();

	/////////// Progress Bar CALLBACK FUNCTION
	// File Successfully Loaded
	if(soundLoaded){
		if(isReady = true && !sound[currentSong].isPlaying())
		{
				push();
				fill('white');
				textAlign(CENTER);
				textSize(32);
				text("Click to Play/Stop", width/2, height/2 - 50);
				text("Press E for extensions", width/2, height/2 + 50);
				pop();
		}
	}
	//IF sound is still loading draw loading animation
	else {
		loadingAnimation();
	}
}
///////// Key and Mouse functions /////////
function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
