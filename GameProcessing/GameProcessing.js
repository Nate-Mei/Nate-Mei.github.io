var ballx = 300;
var bally = 300
var ballSize = 40;
var score = 0;
var img1; 
var img2;
var imgbg;
var gameState = "L1";

function preload() {

  img1 = loadImage('https://upload.wikimedia.org/wikipedia/commons/1/10/Userbox_creeper.svg');
  img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/1/12/Minecraft_Lego_head_%286790028921%29.jpg');
  imgbg = loadImage('https://upload.wikimedia.org/wikipedia/commons/7/7a/Pixel_Art_Background.jpg');
                   
}


function setup() {
  createCanvas(600, 600);
  textAlign (CENTER);
  textSize(20);
  
}

function draw() {
  background(imgbg);
  noCursor();
  
  if(gameState =="L1"){
    levelOne();
}
  if(gameState =="L2"){
    levelTwo();
}
  if(gameState =="L3"){
    levelThree();
}
  if(gameState =="L4"){
    levelFour()
  }
  if(gameState =="L5"){
    winner();
  }
  text(("Score: " + score), width/2, 40);
}

function levelOne(){
  background (imgbg);
  text("Level 1", width/2, height-20);
  image(img2,mouseX - 15,mouseY - 15,30,30);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall<ballSize){
    ballx = random(width);
    bally = random(height);
    score = score +1;
}
  if (score>5){
    gameState = "L2";
  }
  image(img1,ballx,bally,ballSize,ballSize);
  line(ballx + ballSize/2,bally + ballSize/2,mouseX + 15/2, mouseY +15/2);
}

function levelTwo(){
  background (imgbg);
  text("Level 2", width/2, height-20);
  image(img2,mouseX - 15,mouseY - 15,30,30);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall<ballSize){
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize-1;
    score = score +1;
}
  if (score>10){
    gameState = "L3";
  }
  image(img1,ballx,bally,ballSize,ballSize);
}

function levelThree(){
  background (imgbg);
  text("Level 3", width/2, height-20);
  image(img2,mouseX - 15,mouseY - 15,30,30);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall<ballSize){
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize-1;
    score = score +1;
    
}
  if (score>15){
    gameState = "L4";
  }
  image(img1,ballx,bally,ballSize,ballSize);
}

function levelFour(){
  background (imgbg);
  text("Level 4", width/2, height-20);
  image(img2,mouseX - 15,mouseY - 15,30,30);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall<ballSize){
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize-1;
    score = score +1;
    
}
  if (score>20){
    gameState = "L5";
  }
  image(img1,ballx,bally,ballSize,ballSize);
}


function winner(){
  background(255, 223, 0);
  textSize(30);
  text("You Win!", width / 2, height / 2);
  textSize(20);
  text("Final Score: " + score, width /2, height /1.5);
}
