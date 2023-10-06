//"Spirals" visualization
////////// One of my custom Extensions  //////////////////
////// Creates Audio visualizer from mouse input ////////////
function MyExtension1(){
    //vis name
	this.name = "Spirals";
    // Variable to store the radius based on window size making sure the pattern will always fit within the screen
		// Making sure it is the shortest dist from center to any edge
    var radius = floor(min(height, width)/2);
    //Variable that keep track of Current Frame
    var localTime = 0;
    //variable to store dist between nodes
    var currentProduct = 0;
		// Factor is a vriable to determine the relationships between nodes
    var factor;
		// Variable to hold Starting X and Y positions
    var x1;
    var y1;

    var nodes = [];  //Array to store each object < ======= elements to be pushed in line 47
		//change radii based on input for every node in nodes array
    this.updateAllNodes = function(r){
        for (i = 0; i < nodes.length; i++){
            nodes[i].update(r);
        }
    }
  // Resize function to make sure vis fits screen
	this.onResize = function() {
		this.updateAllNodes(floor(min(height, width)/2))
	};
	this.onResize();// Calls resize function

/////////////  DRAW FUNCTION /////////////////////////
	this.draw = function(){
        //get the current amplitude
        var level = amplitude.getLevel();
        factor = random(7, radius / 2 - 1);
        push();
				//Text Instruction at Center
				textAlign(CENTER);
		    fill(255,255,255,63);
		    noStroke();
		    textSize(26);
				text('Move Mouse\nTo Interact with Animation',width/2, height/2);
				//Center the visualization to center of screen
				translate(width/2,height/2);
        //Rotate the entire visualization
        rotate((PI / radius) * map(localTime, 0, radius, 0, 1));
        //Creates a new node for each Frames
        nodes.push(new Node(localTime, radius)); //      < =======  ADD Nodes to array HERE
        if (nodes.length > 1){
            // For loop to increase each node
            for (i = 0; i < nodes.length; i++){
                push();
                //ROTATE visualizer based on MOUSE INPUT
                rotate(PI / map(mouseX, 0, width, 308, -308) * i);
                nodes[i].c[3] = level * 255;
                //Lines colored using node property
                stroke(nodes[i].c);
                strokeWeight(1);
                //Draw line from the current Node to the Next
                line(
                    nodes[i].x,
                    nodes[i].y,
                    nodes[(i+1) % nodes.length].x,
                    nodes[(i+1) % nodes.length].x
                );
                pop();
            }
        }
        pop();
				// If conditions {to keep localTime, currentProduct and node array in check}
        localTime = (localTime + 1) % radius;
        currentProduct = (factor * localTime) % radius;
        if (nodes.length == radius){
            nodes.shift();
        };
	};
}
