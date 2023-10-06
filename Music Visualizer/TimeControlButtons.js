// Handles the forward playback of the music
function forwardControlButton(){

  this.x = 800;
  this.y = 680;
  this.width = 20;
  this.height = 20;


  this.draw = function(){
  // forward Buttons
  triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);
  triangle(this.x+10, this.y, this.x + this.width+10, this.y + this.height/2, this.x+10, this.y+this.height);
  }

  //checks for clicks on the button, fast forward playback.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x && mouseX < this.x + this.width+10 && mouseY > this.y && mouseY < this.y + this.height){
			if (sound[currentSong].isPlaying()) {
        // the current duration in the song
        var dur = sound[currentSong].currentTime();
        // Fast forward by 10 seconds
        sound[currentSong].jump(dur + 10);
        console.log("Song Current Time: "+dur);
  			}
  			return true;
		}
			return false;
	};
}

// Handles the backwards and playback of the music
function backwardsControlButton(){

  this.x = 730;
  this.y = 680;
  this.width = 20;
  this.height = 20;

  this.draw = function(){
  // backwards Buttons
  triangle(this.x, this.y, this.x - this.width, this.y + this.height/2, this.x, this.y+this.height);
  triangle(this.x-10, this.y, this.x - this.width-10, this.y + this.height/2, this.x-10, this.y+this.height);
  }

  //checks for clicks on the button, goes backwards playback.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x - this.width-10 && mouseX < this.x  && mouseY > this.y && mouseY < this.y + this.height){
			if (sound[currentSong].isPlaying()) {
        // the current duration in the song
        var dur = sound[currentSong].currentTime();
        // Go backwards by 10 seconds
        sound[currentSong].jump(dur - 10);
        console.log("Song Current Time: "+dur);
  			}
  			return true;
		}
			return false;
	};
}
