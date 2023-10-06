//"Webcam" visualization
///////////////Second of my custom Extensions///////////
/////////// Creates an audio visualizer that takes input from the user's webcam /////////////
function MyExtension2(){
  //vis name
	this.name = "Webcam";
////// Takes input from webcam ///////
	camera = createCapture(VIDEO);
	camera.size(windowWidth,windowHeight);
	camera.hide();

  this.draw = function (){
		//get the current amplitude
		var volume = amplitude.getLevel();
		var volColor = map(volume,0,1,0,255);
    // Initiate Bass and Treble Values
    var spectrum = fourier.analyze();
		var bass = int((fourier.getEnergy("bass")));
		var treble = int((fourier.getEnergy("treble")));

    camera.loadPixels();

		// NESTED FOR LOOP to create the pixels array
		for( var y = 0; y < camera.height; y+= 15){
			for ( var x = 0; x < camera.width; x+= 15){
        // This formula states the index for pixels array arrcording to width
				var index = (y * camera.width + x) * 4;
				// The r will map the pixels from the webcam into the pixels Array
				var r = camera.pixels[index];
				// Maps the diameter of circle to the brihtness of the each pixels
				var diameter = map(r,0,255,15,2);

				fill(bass,treble,volColor);
				noStroke();
				circle(x, y, diameter);
			}
		}
	}
}
