//displays fullscreen when clicks on the button.
function FullscreenButton(){

  this.x = 850;
  this.y = 677;
  this.width = 10;
  this.height = 10;


  this.draw = function(){
        //rect(this.x,this.y,this.width,this.height);
        let c = color('white');
        fill(c);
        rect(this.x, this.y, this.width, this.height); // Draw rectangle
        rect(this.x, this.y+15, this.width, this.height); // Draw rectangle
        rect(this.x+15, this.y, this.width, this.height); // Draw rectangle
        rect(this.x+15, this.y+15, this.width, this.height); // Draw rectangle
        //center black rectangle
        c = color('black');
        fill(c);
        noStroke();
        rect(this.x+2, this.y+2, this.width+11, this.height+11); // Draw rectangle
      };
    //checks for clicks on the button, starts or pauses playabck.
    this.hitCheck = function(){
      if(mouseX > this.x && mouseX < this.x +20 && mouseY > this.y && mouseY < this.y +20){
        let fs = fullscreen();
        fullscreen(!fs);
      return true;
    }
    return false;
  }
}
