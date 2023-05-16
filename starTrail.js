function starTrail(){
    
    
    //set an icon and a name for the object
    //set number of stars drawn and the spread of the stars.
    
    this.name="starTrail";
    this.icon="assets/star.jpg";
    
    //stars holds how many pixels of paint for each mouse press.
    //when mouse is pressed, stars will appear on canvas.
    
    this.stars=1;
    this.spread=100;
    

    this.draw = function(){
        
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        
        if(mouseIsPressed){
            for(var i = 0; i < this.stars; i++){          
                image(star,(random(mouseX-this.spread,
                                   mouseX + this.spread)), 
                                  (random(mouseY-this.spread, 
                                   mouseY+this.spread)),
                                   30,30);
            }
        }
    }
};