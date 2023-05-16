function ellipseTool (){

	//set an icon and a name for the object
	this.icon = "assets/circleFill.jpg";
	this.name = "ellipse";
    
	this.draw = function(){
        
    //Set the values for x and y and size.  
    this.x = mouseX;
    this.y = mouseY;
    this.size = slider.value();
        
    //if the mouse is pressed an ellipse is drawn.
    //Colour of the ellipse is filled with what the user selects.
    //Silder value changes the size of the ellipse.

        if(mouseIsPressed){
            
            ellipse(this.x,
                    this.y,
                    this.size);
        }
    
    }
};
    


        
        
        
        
        
        
        
        
        
        
        
        
        
