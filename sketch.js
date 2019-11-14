function setup() {
createCanvas(500, 500);
background(252, 251, 227);
strokeWeight(25);
}

function draw() {
if (mouseIsPressed){
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  if (key === 'r') {
    stroke(255, 0, 51);
  } else if (key === 'g') {
    stroke(127, 255, 36);
  }
  return false;
}

function keyTyped(){
  if (key === 'y'){
    stroke(255, 255, 0);
  } else if (key === 'p') {
    stroke(144, 97, 194);
  }
}
function keyTyped(){
  if (key === 'b'){
    stroke(186, 228, 229);
  } else if (key === 'o'){
    stroke(255, 153, 0);
  }
}
