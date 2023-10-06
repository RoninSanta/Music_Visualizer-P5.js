// Add particle effect to the Fireworks

function Particle(x,y,colour,angle,speed){

    var x = x;
    var y = y;
    var angle = angle;
    this.speed = speed;
    this.colour = colour;

    this.draw = function(){
      update();
      fill(colour);
      ellipse(x,y,10,10);
    }

    function update(){
      this.speed -= 0.1;
      //update x and y
      x+=cos(angle)*speed;
      y+=sin(angle)*speed;
    }

}
