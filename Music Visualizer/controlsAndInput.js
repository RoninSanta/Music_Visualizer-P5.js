//Constructor function to handle the onscreen menu, keyboard and mouse
//controls

function ControlsAndInput(){

	this.menuDisplayed = false;

	//playback button displayed at the middle of the screen
	this.playbackButton = new PlaybackButton();
	//Music Controls to the sides of the playbackButton
  this.forwardControl = new forwardControlButton();
	this.backwardsControl = new backwardsControlButton();
	// Full screen Button to resize the vis
	this.fullscreenButton = new FullscreenButton();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		//check if the playback button has been clicked
      this.playbackButton.hitCheck();
    //check if the fullscreen button is is clicked
		  this.fullscreenButton.hitCheck();
		//check if the music control button is is clicked
		this.forwardControl.hitCheck();
		this.backwardsControl.hitCheck();

	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		if(keycode == 69){
			this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name);
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		//fullscreenButton
		this.fullscreenButton.draw();
		push();
		fill("white");
		stroke("black");
		strokeWeight(2);
		textSize(34);

		//playback button
		this.playbackButton.draw();
    // Music control Button
	  this.forwardControl.draw();
		this.backwardsControl.draw();

		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){

			text("Select a visualisation:", 100, 30);
			this.menu();
		}
		pop();

	};

	this.menu = function(){
		//draw out menu items for each visualisation
        for(var i=0;i<vis.visuals.length;i++){
            text((i+1)+ ": "+vis.visuals[i].name, 100, 30+(i+1)*35);
        }
	};
}
