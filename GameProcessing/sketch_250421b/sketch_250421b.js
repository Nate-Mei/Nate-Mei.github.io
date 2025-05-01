var img;
var initials ='mm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img0 = loadImage('https://milesmunoz9.github.io/images/mcsky.jpg');
  img = loadImage('https://milesmunoz9.github.io/images/grass.jpg');
  img1 = loadImage('https://milesmunoz9.github.io/images/stone.jpg');
  img2 = loadImage('https://milesmunoz9.github.io/images/wood.png');
  img3 = loadImage('https://milesmunoz9.github.io/images/plank.jpg');
  img4 = loadImage('https://milesmunoz9.github.io/images/pig.png');
  img5 = loadImage('https://milesmunoz9.github.io/images/creeper.png');
  img6 = loadImage('https://milesmunoz9.github.io/images/leaf.png');
  img7 = loadImage('https://milesmunoz9.github.io/images/steve.png');
  img8 = loadImage('https://milesmunoz9.github.io/images/dragon.png');
  img9 = loadImage('https://milesmunoz9.github.io/images/sword.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(img0);   // use our background screen image

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' || toolChoice == '1') { // 1 places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '2' || toolChoice == '2') { // 2 places the image we pre-loaded
    image(img1, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '3' || toolChoice == '3') { // 3 places the image we pre-loaded
    image(img2, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '4' || toolChoice == '4') { // 4 places the image we pre-loaded
    image(img3, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '5' || toolChoice == '5') { // 5 places the image we pre-loaded
    image(img4, mouseX, mouseY, 90, 90);
    
  } else if (toolChoice == '6' || toolChoice == '6') { // 6 places the image we pre-loaded
    image(img5, mouseX, mouseY, 60, 80);
    
  } else if (toolChoice == '7' || toolChoice == '7') { // 7 places the image we pre-loaded
    image(img6, mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '8' || toolChoice == '8') { // 8 places the image we pre-loaded
    image(img7, mouseX, mouseY, 40, 70);
    
  } else if (toolChoice == '9' || toolChoice == '9') { // 9 places the image we pre-loaded
    image(img8, mouseX, mouseY, 150, 150);
    
  } else if (toolChoice == '0' || toolChoice == '0') { // 0 places the image we pre-loaded
    image(img9, mouseX, mouseY, 40, 40);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(img0); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
