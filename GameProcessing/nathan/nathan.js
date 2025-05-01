function setup() {
  createCanvas(600, 600);
  background(200);
}
function draw() {
     strokeWeight(0);
  //head
  fill(242, 214, 181) // Skin Color
  ellipse(300, 300, 300, 425); // Position

  //left eye
  fill(250) // Eye Color
  ellipse(230, 200, 60, 50); // Position
  
  //left pupil
  fill(84,42,14) // Pupil color
  ellipse(230, 200, 30, 30); // Position
  
  //right eye
  fill(250) // Eye Color
  ellipse(360, 200, 60, 50); // Position
  
  //right pupil
  fill(84,42,14) // Pupil color
  ellipse(360, 200, 30, 30); // Position
}
