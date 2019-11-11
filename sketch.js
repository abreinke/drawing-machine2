function setup() {
  createCanvas(1000, 1000);
  background(255, 255, 255);
}

function draw() {
  if (mouseIsPressed == true) {
     ellipse(mouseX, mouseY, 75, 75);
   } 
}
