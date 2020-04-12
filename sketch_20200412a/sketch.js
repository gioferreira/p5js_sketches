function setup() {
  // let canvasWidth = 1920 / 2;
  // let canvasHeight = 1080 / 2;
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  createCanvas(canvasWidth, canvasHeight);
  background(0, 0, 0);
  frameRate(60);
}

function drawStar() {
  stroke(255);
  line(0, -10, 0, 10);
  line(-8, -5, 8, 5);
  line(-8, 5, 8, -5);
}

function draw() {
  translate(int(random(40, window.innerWidth - 40)), int(random(40, window.innerHeight - 40)));
  drawStar();

  if (frameCount % 10 == 0) {
    background(0, 0, 0, 80);

  }
}

function mouseClicked() {
  background(0, 0, 0, 127);
  // prevent default
  return false;
}