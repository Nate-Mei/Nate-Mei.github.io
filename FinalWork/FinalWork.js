//global

var stage = 0; 

//player
var p1X = 400; //player 1
var p1Y = 375; 
var pWidth = 110;
var pHeight = 160;

//box
var b1X = 200; //box 1
var b1Y = 300;
var b2X = 600; //box 1
var b2Y = 300;
var bWidth = 250;
var bHeight = 150;

//coins
var c1X = 600;
var c1Y = 410;
var cWidth = 30;
var cHeight = 30;

//counters
var score = 0;
var timer = 30;         // time in seconds
var startTime;          // when game started
var timeLeft = timer;   // countdown value


//gravity
var jump = false;
var direction = 1; //force of gravity in y direction
var velocity = 5; //speed of player
var jumpPower = 15; //jump power
var fallSpeed = 5; //equal to velocity
var minHeight = 360; //ground height
var maxHeight = 50; //sky height
var jumpCounter = 0; //keep track of jumping


//images
var player;
var platform;
var bg;
var coin;


////preload
function preload(){
  player = loadImage('player360.png');
  bg = loadImage('background.png');
  platform = loadImage('platform.png');
  coin = loadImage('coin.png');
  
  
  
  
}////close preload

////setup
function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
    
}
////close setup


////draw
function draw() {
  //call functions
  keyPressed();
  gravity();
  
  
    if(stage == 0){
    splash();
  }//close = 0
  
  if(stage == 1){
    game();
  }//close = 1
  
  if (mouseIsPressed) {
  if (stage === 0 || stage === 2) {
    resetGame();
    stage = 1;
  }
    startTime = millis(); // start timer when game begins  } 
}
  if (stage === 2) {
  endScreen();  
  }
  
function endScreen() {
  background(0);
  fill(255);
  textSize(60);
  text("Time's Up!", width / 2, height / 2 - 40);
  textSize(40);
  text("Score: " + score, width / 2, height / 2 + 20);
  textSize(30);
  text("Refresh to play again", width / 2, height / 2 + 70);
}
  
}


////close draw

////splash
function splash(){
  //appearence
  background(150, 230, 240); //sky blue
  image(bg, width/2, height/2, width, height);
  
//title
  textSize(80)
  text('Coins, Coins, Coins', width/2, 120);
  textSize(40);
  text('By: Nathan Mei', width/2, 180);
  
//instructions
  textSize(35)
  text('*How to Play', width/2, 270);
  text('*Use Arrow Keys To Move Left And Right', width/2, 330);
  text('*Use Up Arrow To Jump', width/2, 380);
  text('*Get Coins Before Time Runs Out', width/2, 430)
  text('*Click The Screen To Start', width/2, 480);
  
  
}//close splash


////game
function game(){
  //appearence
  background(150, 230, 240); //sky blue
  image(bg, width/2, height/2, width, height);
   
//ground
  noStroke();
  fill(100, 200, 75); //green
  rect(width/2, 450, width, 100);
  
//frame
  noFill();
  stroke(0);
  strokeWeight(15);
  rect(width/2, height/2, width, height);
  
//draw box
  stroke(0);
  strokeWeight(5);
  fill(255, 150, 0); //orange
  //rect(b1X, b1Y, bWidth, bHeight);
  image(platform, b1X, b1Y, bWidth, bHeight);
  image(platform, b2X, b2Y, bWidth, bHeight);  
//draw player
  stroke(0);
  fill(150, 0, 170);
  //rect(p1X, p1Y, pWidth, pHeight);
  image(player, p1X, p1Y, pWidth, pHeight);
  p1X = constrain(p1X, pWidth / 2, width - pWidth / 2);
  
//scoreboard
  textSize(25)
  text('Points:', 60, 60);
  text(score, 120, 60);
  
//collision
  
 if(p1X >= b1X-bWidth /2 && p1X <= b1X+bWidth /2 && p1Y+pHeight-92 >= b1Y-bHeight /2 && p1Y+pHeight-92 <= b1Y+bHeight /2 && jump == false){
    p1Y = b1Y-100;//don't fall
    velocity = 0;//no speed
    jumpCounter = 0;//reset jump
  }//close if on box
  
if(p1X >= b2X-bWidth /2 && p1X <= b2X+bWidth /2 && p1Y+pHeight-92 >= b2Y-bHeight /2 && p1Y+pHeight-92 <= b2Y+bHeight /2 && jump == false){
    p1Y = b1Y-100;//don't fall
    velocity = 0;//no speed
    jumpCounter = 0;//reset jump
  }//close if on box
  
//coin
  image(coin, c1X, c1Y, cWidth, cHeight);

let coinLeft = c1X - cWidth / 2;
let coinRight = c1X + cWidth / 2;
let coinTop = c1Y - cHeight / 2;
let coinBottom = c1Y + cHeight / 2;
  
let playerBottom = p1Y + pHeight / 2;
let playerTop = p1Y - pHeight / 2;
let playerLeft = p1X - pWidth / 2;
let playerRight = p1X + pWidth / 2;
  
if (
  playerRight >= coinLeft &&
  playerLeft <= coinRight &&
  playerBottom >= coinTop &&
  playerTop <= coinBottom
) {
  score++; // increase score

  // move coin to a new random spot
  c1X = random(cWidth / 2, width - cWidth / 2);
  c1Y = random(100, minHeight - cHeight - 50);
}
  
  
  // TIMER
let elapsed = floor((millis() - startTime) / 1000);
timeLeft = max(0, timer - elapsed); // don't go below 0

// show on screen
textSize(25);
text("Time Left: " + timeLeft, width - 90, 60);

// check if time runs out
if (timeLeft === 0) {
  stage = 2; // go to end screen
} 
  
  
}////close game


////gravity
function gravity(){
  
  if (p1Y >= minHeight && jump == false){
    //stop falling on ground
    p1Y = p1Y; //don't fall
    jumpCounter = 0; //reset jumpCounter when landing
  }//close on ground
  else{
  p1Y = p1Y + (direction*velocity); //working gravity
}//else fall
  
  if(jump == true){
    if(p1Y <= maxHeight || jumpCounter >= jumpPower){
      if(p1Y >= minHeight){
        p1Y = minHeight; 
      } //close at min
      else{
      velocity = fallSpeed; //fall at maximum
      }//close else not at min
    }//close at max
    else{
    velocity = -jumpPower; //jumping
      jumpCounter = jumpCounter + 1; //add to jumpCounter
  }//close not at max
  }//close jump
    else{
    velocity = fallSpeed; 
  }//close not jumping
  
}////close gravity


function keyPressed(){
  if (keyIsDown(LEFT_ARROW)) {
    p1X -=2; //move left
  }
  if (keyIsDown(RIGHT_ARROW)) {
    p1X +=2; //move right
  }
  if (keyIsDown(UP_ARROW)){
    jump = true; //jump
  }
  else{
    jump = false; //don't jump
  }//close jump
}////close keyPressed

function resetGame() {
  // Reset score and player position
  score = 0;
  p1X = 400;
  p1Y = 375;
  velocity = fallSpeed;
  jump = false;
  jumpCounter = 0;

  // Reset coin to new random position
  c1X = random(cWidth / 2, width - cWidth / 2);
  c1Y = random(100, minHeight - cHeight - 50);

  // Reset timer
  startTime = millis();
}
