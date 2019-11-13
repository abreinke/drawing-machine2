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

function keyTyped(){
  if (key === 'r'){
  stroke(255, 64, 75);
  }
  else if(key === 'g') {
  stroke(204, 255, 0);
  }
  return false;
}

function keyTyped() {
  if (key === 'y') {
  stroke(255, 245, 0);
  }
  else if (key === 'p') {
  stroke(190, 128, 255);
  }
  return false;
}

function keyTyped(){
if (key === 'b'){
stroke(186, 228, 229);
  }
  else if ( key === 'o') {
  stroke(251, 184, 41);
  }
  return false;
}
