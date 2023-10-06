// Add Noise and rotatingBlocks visualiation to the music
function NoiseLine(){
  // vis name
  this.name = "NoiseLine";

  //Create user-interface for audio Visualizer
  gui = createGui('Audio Visualizer',windowWidth -250);
  //Add noiseStep to user slider
  sliderRange(0.001,1,0.001);
  gui.addGlobals('noiseStep');
  //set different thresholds to slider
  sliderRange(0,255,1);
  gui.addGlobals('rotateThresh','progThresh','seedThresh');

  //Draw the Visualisations
  this.draw = function(){
  //create an array amplitude values from the fft.
  var spectrum = fourier.analyze();
  //initialize the bass and treble from the song
  var bass = fourier.getEnergy("bass");
  var treble = fourier.getEnergy("treble");
  //set the blocks to rotate on treble
  //set NoiseLine to move on bass
  this.rotatingBlocks(treble);
  this.noiseLine(bass,treble);

  }

  /*-draws the rotatingBlocks
  -@param energy: The energy are the music bass
  */
  this.rotatingBlocks = function(energy){

   if(energy < rotateThresh+25)
  {
    rotateBlock += 0.01;
  }

  var r = map(energy, 0, 255, 20, 100);

  push();
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate(rotateBlock);
  fill(255,0,0);


  var incre = width/(10 - 1);

  for(var i = 0; i < 10; i++)
  {
    rect(i * incre - width/2,0,r,r);
  }
  pop();
  }

  /*-draws the the Noise Line
  -@param energy: The energy are the music bass,energy2 is treble
  */
  this.noiseLine = function(energy,energy2){

    push();
  	translate(width/2, height/2);
  	beginShape();
  	noFill();
  	stroke(0,255,0);
  	strokeWeight(3);

  	for(var i = 0; i < 100; i++)
  	{

  		var x = map(noise(i* noiseStep + progress),0,1,-250,250);
  		var y = map(noise(i* noiseStep + progress + 1000),0,1,-250,250);


  		vertex(x,y);
  	}
  	endShape();


  	if(energy > progThresh)
  	{
  		progress += 0.05;
  	}
    // If energy2 exceeds seedThresh calls function
    if(energy2 > seedThresh)
  	{
  		noiseSeed();
  	}
  	pop();
  }
}
