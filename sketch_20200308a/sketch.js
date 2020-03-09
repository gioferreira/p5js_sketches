let x = 0;
let y = 0;
let pX = 0;
let pY = 0;

function setup() {
  let canvasWidth = 1920 / 2;
  let canvasHeight = 1080 / 2;
  createCanvas(canvasWidth, canvasHeight);
  background(255, 255, 255);
  frameRate(10);
}

function draw() {
  let r = random(200, 245);
  let g = random(50, 180);
  let b = random(200, 245);
  let ellipseColor = color(r, g, b);
  let radius = random(10, 80);

  strokeWeight(radius / 15);

  x = random(radius / 2, width - (radius / 2));
  y = random(radius / 2, height - (radius / 2));

  let strokeGrey = (r + g + b) / 3;
  stroke(strokeGrey);
  line(x, y, pX, pY);

  stroke(255, 255, 255);
  fill(ellipseColor);
  ellipse(x, y, radius);

  pX = x;
  pY = y;
  if (frameCount % 2 == 0) {
    background(255, 85);
  }
}