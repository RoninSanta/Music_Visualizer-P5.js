//Node constructor - sub constructor for MyExtension1.js
function Node(t, radius){
    // Node Creation Time
    this.t = t;
    //The Start and End Points of each node
    this.x = sin(((2*PI)/radius) * this.t) * radius;
    this.y = cos(((2*PI)/radius) * this.t) * radius;
    // Creates Vector with X and Y
    this.vec = createVector(this.x, this.y)
    //Array to store color and alpha channels
    this.c = [0,0,0,255];
    this.color = function(){
        fourier.analyze();
        // Initiate varaibles from FFT(bass,lowMid,mid)
        this.c[0] = fourier.getEnergy('bass');
        this.c[1] = fourier.getEnergy('lowMid');
        this.c[2] = fourier.getEnergy('mid');
        //Remove min color value to stand out
        var min = this.c[0];
        var minIndex = 0;
        for (var i = 1; i < this.c.length - 1; i++) {
            if (this.c[i] < min) {
                minIndex = i;
                min = this.c[i];
            }
        }
        this.c[minIndex] = 0;
    }

    //Initialize Node Color
    this.color();
    //Update the radius to correspond to window resizing
    this.update = function(radius){
        this.x = sin(((2*PI)/radius) * this.t) * radius;
        this.y = cos(((2*PI)/radius) * this.t) * radius;
        this.vec = createVector(this.x, this.y)
    }
}
