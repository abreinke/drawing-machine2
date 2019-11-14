function setup() {
createCanvas(500, 500);
background(252, 251, 227);
strokeWeight(25);
}

function draw() {
if (mouseIsPressed) {
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);
  }
  return false;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    stroke(255, 255, 0);
  } else if (keyCode === DOWN_ARROW) {
    stroke(0, 0, 0);
  }
  return false;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    stroke(186, 228, 229);
  } else if (keyPressed === RIGHT_ARROW) {
    stroke(144, 97, 194);
  }
  return false;
}
