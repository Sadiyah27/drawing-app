function eraserTool(){
    
	//set an icon and a name for the object
	this.icon = "assets/eraser.jpg";
	this.name = "eraser";


	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
        
		//if the mouse is pressed
		if(mouseIsPressed){
            
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
            }
            
            //Making the stroke colour white and increasing the weight will allow it to become an eraser tool.
            
            else{
                stroke(255,255,255);
                strokeWeight(slider.value());
				line(previousMouseX,
                     previousMouseY,
                     mouseX, 
                     mouseY);
                previousMouseX = mouseX;
				previousMouseY = mouseY;
            }
        }
        //if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
        else{
			previousMouseX = -1;
			previousMouseY = -1;
        }
    }
};