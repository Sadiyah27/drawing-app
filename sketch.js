// Global variables that will store the toolbox colour palette
// and the helper functions.
var toolbox = null;
var colourP = null;
var helpers = null;

var editButton;
var finishButton;

var slider;

var editMode = false;
var currentShape = [];
 
var c;

var backgroundColour;

var blur;

var img;




//Loads the stamp image and star image for the star trail. 
function preload(){
    img = loadImage('assets/heart.png');
    star = loadImage('assets/star.png');
}


function setup() {
    
    
    //The mouse will be in the centre of the stamp.
   imageMode(CENTER);

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
    helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
    
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
    toolbox.addTool(new shapeTool());
    toolbox.addTool(new ellipseToolOutline());
    toolbox.addTool(new ellipseTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new stampTool());
    toolbox.addTool(new starTrail());
    toolbox.addTool(new eraserTool());
    
    
    
    //Create a blur button
    //Add DOM controls
    
    blur = createButton('Blur');
    blur.position(900,5);
    blur.mousePressed(Blur);
    
    //When blur button is pressed, the drawings become blurred. 
    //The more it is pressed, the more blurry it becomes.
    
    function Blur(){
        if (mouseIsPressed){
            filter (BLUR, 3);
        }
    }
    


    
    // Create a slider that increases and decreases the size of the eraser and ellipse.
    slider = createSlider (20,200,50);
    // width and height
    slider.size(200,20); 
    // x and y
    slider.position(500, 1090); 
    


    
	background(255);
    noFill();
    loadPixels();
    editButton = createButton('Edit Shape');
    editButton.mousePressed(function(){
        if(editMode){
            editMode = false;
            editButton.html("Edit Shape");
        }
        else{
            editMode = true;
            editButton.html("Add Verticies");
        }
    })
    
    finishButton = createButton('Finish Shape');
    finishButton.mousePressed(function(){
        editMode = false;
        draw();
        loadPixels();
        currentShape = [];
    })}





function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}

}
   


