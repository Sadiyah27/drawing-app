
function ellipseToolOutline(){

	//set an icon and a name for the object
	this.icon = "assets/circle.jpg";
	this.name = "ellipseToolOutline";

	this.draw = function(){
        
    //Set the values for x and y and size. 
        
    this.x = mouseX;
    this.y = mouseY;
    this.size = slider.value();
	
        
    //if the mouse is pressed an ellipse is drawn.
    //Outline of the ellipse is the colour the user selects.
    //Silder value changes the size of the ellipse.
        
		if(mouseIsPressed){
            
             
           noFill();
           ellipse(this.x,
                   this.y,
                   this.size);
            
        }
    }
};
    


        