/*
1. draw the lines without any input
    a. work out where on the screen to plot and the scale - DONE-
    b. draw lines that move up the screen in regular intervals - DONE-
        i. create a 2d array of lines and add one to the array every x frames -DONE-
        ii. each frame clear screen and decrease the y coordinates of each line iii. if line's y is smaller than ploty then remove from array.
        -DONE-
2. add the music output-DONE
==== ALL STEPS COMPLETED  =======
*/
function Ridgeplots(){

    this.name = "ridgeplots";

    var output = [];
    var startX;
    var startY;
    var endY;
    var spectrumWidth;
    var speed = 0.7;

    startX = width/5;
    endY = height/5;
    startY = height - endY;
    spectrumWidth = (width/5)*3;

    function addWave(){
//        output.push([{x: startX, y: startY}, {x: startX + spectrumWidth, y: startY}]);
        var w = fourier.waveform();
        var output_wave = [];
        var smallScale = 3;
        var bigScale = 40;

        for(var i = 0; i < w.length; i++)
        {
            if(i%20 == 0){
                var x = map(i,0,1024,startX, startX + spectrumWidth);
                if(i < 1024 * 0.25 || i > 1024 * 0.75){
                    var y = map(w[i],-1,1,-smallScale, smallScale);
                    output_wave.push({
                        x: x,
                        y: startY + y
                    })
                }
                else
                {
                    var y = map(w[i],-1,1,-bigScale,bigScale);
                    output_wave.push({
                        x: x,
                        y: startY + y
                    })
                }
            }
        }
        output.push(output_wave);
    }

    this.draw = function(){
        stroke(255);
        strokeWeight(2);
        if(frameCount % 10 == 0)
        {
            addWave();
        }

        for(var i = 0; i < output.length; i++){
            var o = output[i];
            beginShape();
            for(var j = 0; j < o.length; j++)
            {
                o[j].y -= speed;
                vertex(o[j].x, o[j].y);
            }
            endShape();
            if(o[0].y < endY){
                output.splice(i,1);
            }
        }
    }
}
