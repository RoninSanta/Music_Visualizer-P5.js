// Draws a bar Graph of the music on the screen
function Spectrum(){
	// vis name
	this.name = "spectrum";
  // draw the visualiation on screen
	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();

		fill(0,255,0)
		var c1 = color(0,255,0);
		var c2 = color(255,0,0);

		for (var i = 0; i< spectrum.length; i++){
			  //var x = map(i, 0, spectrum.length, 0, width);
        var y = map(i, 0, spectrum.length, 0, height);
				//var h = -height + map(spectrum[i], 0, 255, height, 0);
		    var h = map(spectrum[i], 0, 255, 0, width);
        //Change color of each bar based on amplitude using lerpColor
				var c = lerpColor(c1,c2,spectrum[i]/255);
				fill(c);
        //rect(x,height, width / spectrum.length, h );
        rect(0,y, h, height/spectrum.length);

  		}

		pop();
	};
}
