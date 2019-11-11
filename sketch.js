function setup() {
  createCanvas(1000, 1000);
  background(255, 255, 255);
  strokeWeight(50);
  }

function draw() {
if (mousePressed == true){
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);
}
}
function draw() {
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
line(25, 25, 50, 50);
}
