function setup() {
  createCanvas(600, 600);
  background(200);
}
function draw() {
     strokeWeight(0);
  // --- Hair (Back Layer) ---
  for (let i = 0; i < 10; i++) {
    fill(0, 0, 0); // dark to light fade
    ellipse(300, 300, 330 - i * 5, 440 - i * 4); // layered ellipses
  }
  
  //head
  fill(224,182,138) // Skin Color
  ellipse(300, 300, 300, 425); // Position

  //left eye
  fill(250) // Eye Color
  ellipse(225, 250, 60, 50); // Position
  
  //left pupil
  fill(84,42,14) // Pupil color
  ellipse(225, 250, 30, 30); // Position
  
  //right eye
  fill(250) // Eye Color
  ellipse(365, 250, 60, 50); // Position
  
  //right pupil
  fill(84,42,14) // Pupil color
  ellipse(365, 250, 30, 30); // Position
  
  // mouth
  stroke(84, 42, 14); // mouth color
  strokeWeight(5);    // thickness of the mouth line
  line(240, 370, 360, 370); // from left to right
  
  // --- Top Hair Arc ---
  noStroke();
  fill(0, 0, 0); // hair color
  arc(300, 220, 300, 300, PI, TWO_PI); // position, size, start angle, end angle
  
  // Shirt
  fill(50, 50, 50);
  rect(210, 450, 180, 250, 50);
}
