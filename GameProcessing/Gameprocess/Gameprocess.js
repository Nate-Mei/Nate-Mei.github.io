var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;


function setup() {
  createCanvas(600, 600);
  noCursor(); // Hide the system cursor
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
  background(250);
  
  levelOne();
 
}  // end of draw

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score += 1;
  }

  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
}
