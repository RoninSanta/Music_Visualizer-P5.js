// sub Constructor function to Fireworks.js
//push particle effect into firework to the music

function Firework(colour, x, y){

    var colour = colour;
    var x = x;
    var y = y;

    //create a list of particles
    var particles = [];
    // a property to indicate if fireworks have filled the screen
    this.depleted = false;
    //Add a constant explosion of particles 360 DEGREES
    //+=18 such that 360/18 = 20 maxmium particles at a time instead of 360
    for(var i = 0; i<360; i+=18){
        particles.push(new Particle(x,y,colour,i,10));
    }

    this.draw = function(){
      // Intergrate the particles.js
      for(var i=0;i<particles.length;i++){
          particles[i].draw();
        }

      // if there is no speed the firework will be removed from array
      if(particles[0].speed<=0){
              this.depleted = true;
      }
   }
}
