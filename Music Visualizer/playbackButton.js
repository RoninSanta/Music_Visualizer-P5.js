//displays and handles clicks on the playback button.
function PlaybackButton(){

	this.x = 755;
	this.y = 680;
	this.width = 20;
	this.height = 20;

	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
	this.playing = false;

	this.draw = function(){
    ////// Pause Button /////
		if(this.playing){
			rect(this.x, this.y, this.width/2 - 2, this.height);
			rect(this.x + (this.width/2 + 2), this.y, this.width/2 - 2, this.height);
//////////// Draw out artist info items  ////////////
			push();
			fill(0, 0, 0, 70);
			noStroke();
			rect(
					-width/2, topMargin,
					width, size
			);
			stroke(1);
			fill(180);
			textAlign(RIGHT);
			textSize(height * 0.018);
			textSize(height * 0.018);
					var rightMargin = width - 40;
					var topMargin = height - (height * 0.2);
			//draw out the artist info for the current song
			textStyle(BOLD);
			text(
					"Title: " + currentSongDetails.title,
					rightMargin, topMargin + height * 0.03
			);
			textStyle(NORMAL);
			text(
					"Artist: "+ currentSongDetails.artist,
					rightMargin, topMargin + height * 0.05
			);
			text(
					"Album: "+ currentSongDetails.album,
					rightMargin, topMargin + height * 0.07
			);
			text(
				  "Website: "+ currentSongDetails.site,
					rightMargin, topMargin + height * 0.09
			);
			text(
					currentSongDetails.licence,
					rightMargin, topMargin + height * 0.11
			);
			pop();
		}
	//////// Play Button //////////
		else{
			triangle(this.x, this.y, this.x + this.width, this.y + this.height/2, this.x, this.y+this.height);

		}
};

	//checks for clicks on the button, starts or pauses playabck.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height && PlayMusic){
			if (sound[currentSong].isPlaying()) {
    			sound[currentSong].pause();
  			} else {
    			sound[currentSong].loop();
  			}
  			this.playing = !this.playing;
  			return true;
		}
			return false;
	};

}
