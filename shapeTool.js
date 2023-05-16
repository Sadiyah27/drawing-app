function shapeTool(){
    
    //set an icon and a name for the object
    this.icon = "assets/shape.jpg";
	this.name = "shape";
    
    
    this.draw = function() {    
        updatePixels();
        
        //when mouse is pressed on the canvas
        if(mouseIsPressed && mousePressedOnCanvas(c))
        {
            if(!editMode){
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            }
            
            else{
                for(var i = 0; i < 
                   currentShape.length; i++){
                    if(dist(currentShape[i].x,
                           currentShape[i].y, mouseX, 
                           mouseY) < 15){
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }
        }
        
        beginShape();
        for(var i = 0; i < currentShape.length; i++){
            
            //small points ont he vetrex allows user to change the position and edit the shape.
            
            vertex(currentShape[i].x,
                   currentShape[i].y);
            if(editMode){
                fill ('blue');
                ellipse(currentShape[i].x,
                        currentShape[i].y, 
                        10);
                noFill();
            }
        }
        
        endShape();
    }
}

function mousePressedOnCanvas(canvas) {
    if (mouseX > canvas.elt.offsetLeft &&
		mouseX < (canvas.elt.offsetLeft + canvas.width) &&
		mouseY > canvas.elt.offsetTop &&
		mouseY < (canvas.elt.offsetTop + canvas.height)){
		return true;
    }
    else{
        return false;
    }
}
