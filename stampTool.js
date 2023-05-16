
function stampTool(){
    
    //set an icon and a name for the object 
    this.icon = "assets/stamp.jpg";
    this.name = "Stamp";
    
    
    this.draw = function(){
        
    //set values for x and y.
        this.x = mouseX;
        this.y = mouseY;
        
    //when mouse is pressed, draw the heart image.
    //set a size.
        
        if (mouseIsPressed){
        image(img, 
              this.x,
              this.y,
              50,50);
        }
    };
}
