
//Adds Fireworks vis effect in music
function Fireworks(){
  // vis name
  this.name = "Fireworks";
  var fireworks = [];
  var beatDetect;

  //Set Frames per second to 30
  // 60 Frames result in too much particles in the air
  frameRate(30);
  beatDetect = new BeatDetect();
  //Draw vis effect
  this.draw = function(){
    var spectrum = fourier.analyze();
    if(beatDetect.detectBeat(spectrum)){
      this.addFirework();
    }
    this.update();
  }

  this.addFirework = function(){
      var f_colour = color(random(0,255),random(0,255),random(0,255));
      var f_x = random(width*0.2,width*0.8);
      var f_y = random(height*0.2,height*0.8);
      var firework = new Firework(f_colour,f_x,f_y);
      fireworks.push(firework);
  }

  this.update = function(){
      for(var i=0;i<fireworks.length;i++){
          fireworks[i].draw();
          if(fireworks[i].depleted){
              fireworks.splice(i,1);
          }
      }
  }
}
