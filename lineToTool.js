function LineToTool(){
    //set icon and name for the line tool
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
    

    //Set startMouseX and startMouseY to -1 to start with because we haven't started drawing yet.
	var startMouseX = -1;
	var startMouseY = -1;
    //Drawing is set to false
	var drawing = false;

	this.draw = function(){
        //if the mouse is pressed
		if(mouseIsPressed){
			if(startMouseX == -1){
                //check if they previousX and Y are -1.
				startMouseX = mouseX;
				startMouseY = mouseY;
                //once mouse is pressed, drawing is true
				drawing = true;
				loadPixels();
			}

			else{
                //updates display window, if not the lines draw continuously
		    	updatePixels();
                //draws a line from position startMouseX to startMouseY
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
            loadPixels();
			drawing = false;
            //if drawing is false, reset the psotions of startMouseX and startMouseY.
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
