var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var level = 1;
var myCursorImage; // <-- added

function preload() {
  myCursorImage = loadImage('yourImage.png'); // <-- added
}

function setup() {
  createCanvas(600,600);
  noCursor(); // <-- added
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(250);

  if(level == 1){
    levelOne();
    if(score >= 10){
      level = 2;
    }
  }
  else if(level == 2){
    levelTwo();
  }

  text("Score: " + score, width/2, 40);

  // Draw your custom cursor at the very end
  image(myCursorImage, mouseX, mouseY, 40, 40); 
}
