<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Minecraft Click Game</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
  </head>
  <body>
    <script>
      let ballx = 300;
      let bally = 300;
      let ballSize = 40;
      let score = 0;
      let img1;
      let img2;
      let imgbg;
      let gameState = "L1";

      function preload() {
        // Using CORS-friendly placeholder images for testing
        img1 = loadImage("https://i.imgur.com/NM5Gufz.png"); // Creeper head
        img2 = loadImage("https://i.imgur.com/RKwfF5W.png"); // Cursor (Steve face)
        imgbg = loadImage("https://i.imgur.com/8pZPuwQ.png"); // Pixel background
      }

      function setup() {
        createCanvas(600, 600);
        textAlign(CENTER);
        textSize(20);
      }

      function draw() {
        background(imgbg);
        noCursor();

        if (gameState === "L1") {
          levelOne();
        } else if (gameState === "L2") {
          levelTwo();
        } else if (gameState === "L3") {
          levelThree();
        } else if (gameState === "L4") {
          levelFour();
        } else if (gameState === "L5") {
          winner();
        }

        fill(255);
        stroke(0);
        strokeWeight(2);
        text("Score: " + score, width / 2, 40);
      }

      function levelOne() {
        text("Level 1", width / 2, height - 20);
        image(img2, mouseX - 15, mouseY - 15, 30, 30);

        let distToBall = dist(ballx, bally, mouseX, mouseY);
        if (distToBall < ballSize) {
          ballx = random(width);
          bally = random(height);
          score++;
        }

        if (score > 5) {
          gameState = "L2";
        }

        image(img1, ballx, bally, ballSize, ballSize);
        line(ballx + ballSize / 2, bally + ballSize / 2, mouseX, mouseY);
      }

      function levelTwo() {
        text("Level 2", width / 2, height - 20);
        image(img2, mouseX - 15, mouseY - 15, 30, 30);

        let distToBall = dist(ballx, bally, mouseX, mouseY);
        if (distToBall < ballSize) {
          ballx = random(width);
          bally = random(height);
          ballSize = max(10, ballSize - 1);
          score++;
        }

        if (score > 10) {
          gameState = "L3";
        }

        image(img1, ballx, bally, ballSize, ballSize);
      }

      function levelThree() {
        text("Level 3", width / 2, height - 20);
        image(img2, mouseX - 15, mouseY - 15, 30, 30);

        let distToBall = dist(ballx, bally, mouseX, mouseY);
        if (distToBall < ballSize) {
          ballx = random(width);
          bally = random(height);
          ballSize = max(10, ballSize - 1);
          score++;
        }

        if (score > 15) {
          gameState = "L4";
        }

        image(img1, ballx, bally, ballSize, ballSize);
      }

      function levelFour() {
        text("Level 4", width / 2, height - 20);
        image(img2, mouseX - 15, mouseY - 15, 30, 30);

        let distToBall = dist(ballx, bally, mouseX, mouseY);
        if (distToBall < ballSize) {
          ballx = random(width);
          bally = random(height);
          ballSize = max(10, ballSize - 1);
          score++;
        }

        if (score > 20) {
          gameState = "L5";
        }

        image(img1, ballx, bally, ballSize, ballSize);
      }

      function winner() {
        background(255, 223, 0);
        textSize(30);
        fill(0);
        text("You Win!", width / 2, height / 2);
        textSize(20);
        text("Final Score: " + score, width / 2, height / 1.5);
      }
    </script>
  </body>
</html>
